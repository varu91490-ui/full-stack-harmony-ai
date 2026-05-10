from fastapi import APIRouter, HTTPException, status

from app.models.schemas import LoginRequest, LoginResponse
from app.services.auth_service import login_user

router = APIRouter(tags=['auth'])


@router.post('/login', response_model=LoginResponse, status_code=status.HTTP_200_OK)
async def login(payload: LoginRequest) -> LoginResponse:
    try:
        return login_user(payload)
    except ValueError as exc:
        raise HTTPException(status_code=401, detail=str(exc)) from exc
