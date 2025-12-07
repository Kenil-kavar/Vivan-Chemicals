import logging
import os
from contextlib import asynccontextmanager

from alembic import command
from alembic.config import Config
from fastapi import Depends, FastAPI, HTTPException, status
from sqlalchemy.orm import Session

from crud import create_contact_us, create_free_sample, get_db, engine as db_engine
from models import Base
from schemas import ContactUsCreate, FreeSampleCreate

log = logging.getLogger("uvicorn")
app = FastAPI()

def run_migrations():
    log.info("Running Alembic migrations...")
    try:
        alembic_cfg = Config("alembic.ini")
        command.upgrade(alembic_cfg, "head")
        log.info("Alembic migrations completed.")
    except Exception as e:
        log.error(f"Migration failed: {str(e)}")


def ensure_tables():
    if db_engine is None:
        log.error("Database engine not initialized; cannot ensure tables exist")
        return

    log.info("Ensuring database tables exist...")
    try:
        Base.metadata.create_all(bind=db_engine)
        log.info("Database tables ensured.")
    except Exception as e:
        log.error(f"Failed to ensure tables exist: {str(e)}")


@asynccontextmanager
async def lifespan(app_: FastAPI):
    log.info("Starting up...")
    run_migrations()
    ensure_tables()
    yield
    log.info("Shutting down...")

from fastapi.middleware.cors import CORSMiddleware

root_path = os.getenv("ROOT_PATH", "")
log.info(f"STARTING APP WITH ROOT_PATH: '{root_path}'")

app = FastAPI(
    title="Vivan Chemical API",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
    lifespan=lifespan,
    root_path=root_path
)

# Add ProxyHeadersMiddleware to trust Nginx headers (X-Forwarded-Proto, etc.)
# This is CRITICAL for /docs and /private/admin to work correctly behind HTTPS/Nginx
from uvicorn.middleware.proxy_headers import ProxyHeadersMiddleware
app.add_middleware(ProxyHeadersMiddleware, trusted_hosts="*")

from sqladmin import Admin, ModelView
from sqladmin.authentication import AuthenticationBackend
from starlette.requests import Request
from models import ContactUs, FreeSample

class AdminAuth(AuthenticationBackend):
    async def login(self, request: Request) -> bool:
        form = await request.form()
        username = form.get("username")
        password = form.get("password")

        # Validate username/password - Using env vars for production security
        admin_user = os.getenv("ADMIN_USERNAME", "Jeet")
        admin_pass = os.getenv("ADMIN_PASSWORD", "Jeet@123")
        
        if username == admin_user and password == admin_pass:
            request.session.update({"token": "admin_token"})
            return True
        return False

    async def logout(self, request: Request) -> bool:
        request.session.clear()
        return True

    async def authenticate(self, request: Request) -> bool:
        token = request.session.get("token")
        if not token:
            return False
        return True

# Use a secure secret key from env or generate one
authentication_backend = AdminAuth(secret_key=os.getenv("SECRET_KEY", "change_this_to_a_secure_random_string_in_production"))
admin = Admin(app, db_engine, authentication_backend=authentication_backend, base_url="/private/admin")

class ContactUsAdmin(ModelView, model=ContactUs):
    column_list = [ContactUs.id, ContactUs.name, ContactUs.email, ContactUs.phone, ContactUs.message, ContactUs.created_at]

class FreeSampleAdmin(ModelView, model=FreeSample):
    column_list = [FreeSample.id, FreeSample.name, FreeSample.email, FreeSample.phone, FreeSample.address, FreeSample.description, FreeSample.created_at]

admin.add_view(ContactUsAdmin)
admin.add_view(FreeSampleAdmin)

# Configure CORS
origins = [
    "http://localhost:8080",
    "http://localhost:5173",
    "https://vivan-chemicals.com",
    "https://www.vivan-chemicals.com",
    "*" # Allow all for now to debug, user can restrict later
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Vivan Chemical API"}

@app.post("/api/contact-us")
def contact_us(contact_us: ContactUsCreate, db: Session = Depends(get_db)):
    try:
        return create_contact_us(db, contact_us)
    except Exception as e:
        log.error(f"Error creating contact us entry: {str(e)}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal server error")

@app.post("/api/free-sample")
def free_sample(free_sample: FreeSampleCreate, db: Session = Depends(get_db)):
    try:
        return create_free_sample(db, free_sample)
    except Exception as e:
        log.error(f"Error creating free sample entry: {str(e)}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal server error")
