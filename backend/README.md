# HarmoniOcean AI Backend

FastAPI backend with modular routes for login, image upload, and AI prediction.

## Tech

- FastAPI
- python-multipart
- uvicorn
- requests
- supabase-py (`supabase`)

## Setup

1. Create and activate a virtual environment.
2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Copy `.env.example` to `.env` and fill Supabase credentials.

## Run

```bash
uvicorn app.main:app --reload --port 5000
```

Backend base URL: `http://localhost:5000`

## Routes

- `POST /api/auth/login`
- `POST /api/uploads` (multipart field name: `file`)
- `POST /api/predictions`
- `GET /api/dashboard`
- `GET /api/missions`
- `GET /api/rewards`
- `GET /health`

## Notes

- Login is mock (accepts password `password123`).
- Upload metadata is stored in Supabase table defined by `SUPABASE_UPLOADS_TABLE`.
- Image binary is stored on local disk in `UPLOAD_DIR`.
