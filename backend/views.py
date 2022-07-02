from django.conf import settings
from django.http import JsonResponse
from rest_framework import status, serializers
from rest_framework.views import APIView

from backend.mixins import PublicApiMixin, ApiErrorsMixin
from backend.models import User
from backend.services import google_get_tokens, google_get_user_info


class AddUser(APIView):
    def post(self, request):
        user = User(email=request.data['email'])
        user.save()

        return JsonResponse(data=request.data, status=status.HTTP_200_OK)


class SubjectsView(APIView):
    def get(self, request):
        response = {
            "subjects": [
                "Programming Methodology",
                "Programming Abstraction",
                "Programming Paradigms",
                "Nand2Tetris",
                "Design Patterns",
                "Distributed Systems",
                "Compilers",
                "Computer Networks",
            ]
        }
        return JsonResponse(response)


# def subjects(request: WSGIRequest) -> JsonResponse:
#     response = {
#         "subjects": [
#             "Programming Methodology",
#             "Programming Abstraction",
#             "Programming Paradigms",
#             "Nand2Tetris",
#             "Design Patterns",
#             "Distributed Systems",
#             "Compilers",
#             "Computer Networks",
#         ]
#     }
#     return JsonResponse(response)


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
            'first_name': user_data.get('givenName', ''),
            'last_name': user_data.get('familyName', ''),
        }

        # response = requests.post(settings.BASE_BACKEND_URL + '/api/login/')
        # django_response = HttpResponse(
        #     content=response.content,
        #     status=response.status_code,
        #     content_type=response.headers['Content-Type']
        # )
        return JsonResponse(tokens_response)
