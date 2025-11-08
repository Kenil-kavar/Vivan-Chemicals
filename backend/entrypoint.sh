#!/bin/sh

# Run migrations
alembic upgrade head

# Start the FastAPI application
exec uvicorn main:app --host 0.0.0.0 --port 8000 --reload
