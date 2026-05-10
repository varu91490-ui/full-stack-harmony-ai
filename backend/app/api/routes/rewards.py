from fastapi import APIRouter, status

router = APIRouter(tags=['points'])


@router.get('/points', status_code=status.HTTP_200_OK)
async def get_points() -> dict:
    return {
        'total_points': 3200,
        'progress': 64,
        'rewards': [
            {'id': 1, 'name': 'Blue Guardian Badge', 'points': 1500, 'status': 'Unlocked'},
            {'id': 2, 'name': 'Marine Research Credits', 'points': 2400, 'status': 'Unlocked'},
            {'id': 3, 'name': 'Ocean Hero NFT', 'points': 4000, 'status': 'In Progress'},
        ]
    }
