from fastapi import APIRouter, status

router = APIRouter(tags=['missions'])


@router.get('/missions', status_code=status.HTTP_200_OK)
async def get_missions() -> dict:
    return {
        'missions': [
            {'id': 1, 'title': 'Coral Reef Patrol', 'progress': 72},
            {'id': 2, 'title': 'Plastic Drift Mapping', 'progress': 41},
            {'id': 3, 'title': 'Whale Song Classification', 'progress': 88},
        ]
    }
