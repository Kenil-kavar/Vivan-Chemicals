import logging
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

app = FastAPI(lifespan=lifespan)

@app.get("/")
def read_root():
    return {"message": "Welcome to Vivan Chemicals API"}

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
