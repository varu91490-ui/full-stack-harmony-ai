from datetime import datetime
from typing import Any

from pydantic import BaseModel, EmailStr, Field
from pydantic import model_validator


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=6)


class LoginResponse(BaseModel):
    access_token: str
    token_type: str = 'bearer'
    user: dict[str, Any]


class UploadResponse(BaseModel):
    id: str
    filename: str
    content_type: str
    size: int
    stored_path: str
    created_at: datetime


class PredictionRequest(BaseModel):
    prompt: str | None = Field(default=None, min_length=3)
    text: str | None = Field(default=None, min_length=3)
    image_id: str | None = None

    @model_validator(mode='after')
    def validate_input(self):
        if not self.prompt and not self.text:
            raise ValueError('Either prompt or text is required.')
        return self


class PredictionResponse(BaseModel):
    image_id: str | None = None
    pollution_risk: str
    plastic_detection: str
    fish_species: list[str]
    safe_fishing_suggestion: str
