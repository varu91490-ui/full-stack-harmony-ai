from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.auth import router as auth_router
from app.api.routes.dashboard import router as dashboard_router
from app.api.routes.missions import router as missions_router
from app.api.routes.prediction import router as prediction_router
from app.api.routes.rewards import router as rewards_router
from app.api.routes.upload import router as upload_router

app = FastAPI(title='HarmoniOcean AI Backend', version='1.0.0')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/health')
async def health() -> dict:
    return {'status': 'ok'}


app.include_router(auth_router)
app.include_router(upload_router)
app.include_router(prediction_router)
app.include_router(dashboard_router)
app.include_router(missions_router)
app.include_router(rewards_router)
