from django.core.exceptions import ValidationError
from rest_framework import exceptions as rest_exceptions

from backend.models.user import User
from backend.utils import get_error_message


class PublicAPIMixin:
    authentication_classes = ()
    permission_classes = ()


class APIErrorsMixin:
    """
    Mixin that transforms Django and Python exceptions into rest_framework ones.
    Without the mixin, they return 500 status code which is not desired.
    """

    expected_exceptions = {
        ValueError: rest_exceptions.ValidationError,
        ValidationError: rest_exceptions.ValidationError,
        PermissionError: rest_exceptions.PermissionDenied,
        User.DoesNotExist: rest_exceptions.NotAuthenticated,
    }

    def handle_exception(self, exc): # type: ignore
        if isinstance(exc, tuple(self.expected_exceptions.keys())):
            drf_exception_class = self.expected_exceptions[exc.__class__]
            drf_exception = drf_exception_class(get_error_message(exc))

            return super().handle_exception(drf_exception) # type: ignore

        return super().handle_exception(exc) # type: ignore
