from django.conf import settings
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTStatelessUserAuthentication
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from backend.authentication.mixins import PublicApiMixin, ApiErrorsMixin
from backend.authentication.services import google_get_tokens, google_get_user_info
from backend.models import User


class GoogleLoginApi(PublicApiMixin, ApiErrorsMixin, APIView):
    class InputSerializer(serializers.Serializer):
        code = serializers.CharField(required=False)
        error = serializers.CharField(required=False)

    def post(self, request, *args, **kwargs):
        input_serializer = self.InputSerializer(data=request.data)
        input_serializer.is_valid(raise_exception=True)

        validated_data = input_serializer.validated_data

        code = validated_data.get('code')

        tokens_response = google_get_tokens(code=code, redirect_uri=settings.BASE_BACKEND_URL).json()
        access_token = tokens_response['access_token']
        user_data = google_get_user_info(access_token=access_token)

        profile_data = {
            'email': user_data['email'],
        }
        user, _ = User.objects.get_or_create(**profile_data)
        tokens = RefreshToken.for_user(user)
        tokens_dict = {
            'refresh': str(tokens),
            'access': str(tokens.access_token),
        }
        # response = requests.post(settings.BASE_BACKEND_URL + '/api/login/')
        # django_response = HttpResponse(
        #     content=response.content,
        #     status=response.status_code,
        #     content_type=response.headers['Content-Type']
        # )
        return JsonResponse(tokens_dict)


class DecodeJWTTest(PublicApiMixin, APIView):
    def get(self, request):
        print("AQ VAR")
        authenticator = JWTStatelessUserAuthentication()
        response = authenticator.authenticate(request)
        if response is not None:
            # unpacking
            user, token = response
            print("this is decoded token claims", token.payload)
            print(user.email)
            print(token)
        else:
            print("no token is provided in the header or the header is missing")
        return JsonResponse({"status": "ok"})
