import os
from dataclasses import dataclass


@dataclass
class Settings:
    supabase_url: str = os.getenv('SUPABASE_URL', '')
    supabase_key: str = os.getenv('SUPABASE_KEY', '')
    supabase_uploads_table: str = os.getenv('SUPABASE_UPLOADS_TABLE', 'uploads')
    upload_dir: str = os.getenv('UPLOAD_DIR', 'uploads')


settings = Settings()
