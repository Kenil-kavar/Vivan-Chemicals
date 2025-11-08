# Vivan Chemicals Backend

This is the FastAPI backend for Vivan Chemicals, providing APIs for contact us and free sample requests.

## Setup
1. Install dependencies: `pip install -r requirements.txt`
2. Configure your PostgreSQL connection in `config.py`
3. Run migrations: `alembic upgrade head`
4. Start the server: `uvicorn main:app --reload`

## APIs
- `/api/contact-us` - Submit contact information
- `/api/free-sample` - Request a free sample
