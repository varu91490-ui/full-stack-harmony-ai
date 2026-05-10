from fastapi import APIRouter

router = APIRouter(prefix='/dashboard', tags=['dashboard'])


@router.get('')
async def get_dashboard() -> dict:
    return {
        'stats': [
            {'label': 'Ocean Health Index', 'value': '84%'},
            {'label': 'Anomalies This Week', 'value': '12'},
            {'label': 'Active Missions', 'value': '4'},
        ]
    }
