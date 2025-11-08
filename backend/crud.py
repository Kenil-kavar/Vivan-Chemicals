import os
import logging

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from models import ContactUs, FreeSample

log = logging.getLogger("uvicorn")

# Database URL
DEFAULT_DATABASE_URL = (
    "postgresql://neondb_owner:npg_nEUZoKe5rB6u@"
    "ep-long-mud-a4z6o3j7-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=prefer"
)

SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_DATABASE_URL)

try:
    engine = create_engine(SQLALCHEMY_DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    log.info("Database connection established successfully")
except Exception as e:
    log.error(f"Failed to connect to database: {str(e)}")
    engine = None
    SessionLocal = None

def get_db():
    if engine is None or SessionLocal is None:
        raise Exception("Database connection not initialized")
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def create_contact_us(db, contact_us):
    try:
        db_contact_us = ContactUs(**contact_us.dict())
        db.add(db_contact_us)
        db.commit()
        db.refresh(db_contact_us)
        return db_contact_us
    except Exception as e:
        db.rollback()
        log.error(f"Error in create_contact_us: {str(e)}")
        raise

def create_free_sample(db, free_sample):
    try:
        db_free_sample = FreeSample(**free_sample.dict())
        db.add(db_free_sample)
        db.commit()
        db.refresh(db_free_sample)
        return db_free_sample
    except Exception as e:
        db.rollback()
        log.error(f"Error in create_free_sample: {str(e)}")
        raise
