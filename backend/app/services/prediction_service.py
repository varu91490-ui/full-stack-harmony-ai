import random

import requests

from app.models.schemas import PredictionRequest, PredictionResponse


def _get_context_signal() -> str:
    """
    Optional external request to show `requests` package usage.
    Fails safely and returns local fallback signal.
    """
    try:
        response = requests.get('https://example.com', timeout=2)
        if response.ok:
            return 'surface-current-stable'
    except requests.RequestException:
        pass
    return 'surface-current-uncertain'


def run_mock_prediction(payload: PredictionRequest) -> PredictionResponse:
    user_prompt = payload.prompt or payload.text or 'ocean sample'
    risk_levels = ['Low', 'Moderate', 'High']
    pollution_risk = random.choices(risk_levels, weights=[0.3, 0.5, 0.2])[0]
    plastic_detection = random.choice(['Detected', 'Not Detected'])

    signal = _get_context_signal()
    fish_pool = ['Tuna', 'Mackerel', 'Sardine', 'Snapper', 'Salmon']
    fish_species = random.sample(fish_pool, k=2)
    suggestion = (
        'Safe fishing window in early morning near low-drift zones.'
        if pollution_risk != 'High'
        else 'Avoid fishing in this zone; recheck after 24 hours.'
    )

    return PredictionResponse(
        image_id=payload.image_id,
        pollution_risk=pollution_risk,
        plastic_detection=plastic_detection,
        fish_species=fish_species,
        safe_fishing_suggestion=f'{suggestion} Context: {signal}. Prompt: "{user_prompt}".',
    )
