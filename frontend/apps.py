from typing import TypeVar

from django.apps import AppConfig


class FrontendConfig(AppConfig):  # type: ignore[misc]
    default_auto_field = "django.db.models.BigAutoField"
    name = "frontend"
