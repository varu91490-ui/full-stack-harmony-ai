from datetime import datetime, timezone
from pathlib import Path
from uuid import uuid4

from fastapi import UploadFile

from app.core.config import settings
from app.db.supabase_client import get_supabase_client
from app.models.schemas import UploadResponse


async def save_uploaded_image(file: UploadFile) -> UploadResponse:
    if not file.filename:
        raise ValueError('No image file selected.')
    if not (file.content_type or '').startswith('image/'):
        raise ValueError('Invalid file type. Please upload an image.')

    upload_id = str(uuid4())
    upload_dir = Path(settings.upload_dir)
    upload_dir.mkdir(parents=True, exist_ok=True)

    extension = Path(file.filename or 'image.bin').suffix
    filename = f'{upload_id}{extension}'
    stored_path = upload_dir / filename

    content = await file.read()
    if not content:
        raise ValueError('Uploaded image is empty.')
    stored_path.write_bytes(content)

    created_at = datetime.now(timezone.utc)
    payload = {
        'id': upload_id,
        'filename': file.filename or filename,
        'content_type': file.content_type or 'application/octet-stream',
        'size': len(content),
        'stored_path': str(stored_path).replace('\\', '/'),
        'created_at': created_at.isoformat(),
    }

    client = get_supabase_client()
    if client:
        try:
            client.table(settings.supabase_uploads_table).insert(payload).execute()
        except Exception as exc:  # noqa: BLE001
            raise RuntimeError('Failed to store upload metadata in Supabase.') from exc

    return UploadResponse(
        id=upload_id,
        filename=payload['filename'],
        content_type=payload['content_type'],
        size=payload['size'],
        stored_path=payload['stored_path'],
        created_at=created_at,
    )
