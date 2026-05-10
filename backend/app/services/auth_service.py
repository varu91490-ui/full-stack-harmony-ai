from app.models.schemas import LoginRequest, LoginResponse


def login_user(payload: LoginRequest) -> LoginResponse:
    # Mock login validation for local development.
    if payload.password != 'password123':
        raise ValueError('Invalid credentials. Use password123 for mock login.')

    return LoginResponse(
        access_token='harmoniocean-mock-token',
        user={
            'email': payload.email,
            'name': 'Ocean Explorer',
            'role': 'researcher',
        },
    )
