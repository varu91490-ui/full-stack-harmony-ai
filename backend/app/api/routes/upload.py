from fastapi import APIRouter, File, HTTPException, UploadFile, status

from app.models.schemas import UploadResponse
from app.services.storage_service import save_uploaded_image

router = APIRouter(tags=['uploads'])


@router.post('/upload', response_model=UploadResponse, status_code=status.HTTP_201_CREATED)
async def upload_image(file: UploadFile = File(...)) -> UploadResponse:
    try:
        return await save_uploaded_image(file)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except RuntimeError as exc:
        raise HTTPException(status_code=502, detail=str(exc)) from exc
