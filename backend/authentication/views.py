from typing import Any

from django.conf import settings
from django.http import JsonResponse
from rest_framework import serializers, status
from rest_framework.request import Request
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from backend.authentication.services import google_get_tokens, google_get_user_info
from backend.mixins import APIErrorsMixin
from backend.models.user import User


class GoogleLoginAPI(APIErrorsMixin, APIView):
    authentication_classes = ()
    permission_classes = ()

    class InputSerializer(serializers.Serializer):
        code = serializers.CharField(required=False)
        error = serializers.CharField(required=False)

    def post(self, request: Request, *args: Any, **kwargs: Any) -> JsonResponse:
        input_serializer = self.InputSerializer(data=request.data)
        input_serializer.is_valid(raise_exception=True)

        validated_data = input_serializer.validated_data

        code = validated_data.get("code")
        tokens_response = google_get_tokens(
            code=code, redirect_uri=settings.BASE_BACKEND_URL
        ).json()
        access_token = tokens_response["access_token"]
        user_data = google_get_user_info(access_token=access_token)
        profile_data = {
            "email": user_data["email"],
        }
        user, _ = User.objects.get_or_create(**profile_data)
        tokens = RefreshToken.for_user(user)
        response_dict = {
            "refresh_token": str(tokens),
            "access_token": str(tokens.access_token),
            "access_exp": tokens.access_token.payload["exp"],
            "picture": user_data["picture"],
        }
        return JsonResponse(response_dict, status=status.HTTP_202_ACCEPTED)
