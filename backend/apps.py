from django.apps import AppConfig


class BackendConfig(AppConfig):  # type: ignore[misc]
    default_auto_field = "django.db.models.BigAutoField"
    name = "backend"
