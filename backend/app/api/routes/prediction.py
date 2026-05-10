from fastapi import APIRouter, status

from app.models.schemas import PredictionRequest, PredictionResponse
from app.services.prediction_service import run_mock_prediction

router = APIRouter(tags=['predictions'])


@router.post('/predict', response_model=PredictionResponse, status_code=status.HTTP_200_OK)
async def predict(payload: PredictionRequest) -> PredictionResponse:
    return run_mock_prediction(payload)


@router.post('/analyze', response_model=PredictionResponse, status_code=status.HTTP_200_OK)
async def analyze(payload: PredictionRequest) -> PredictionResponse:
    return run_mock_prediction(payload)
