from django.core.handlers.wsgi import WSGIRequest
from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView

from backend.models import User


class AddUser(APIView):

    def post(self, request):
        user = User(email=request.data['email'])
        user.save()

        return JsonResponse(data=request.data, status=status.HTTP_200_OK)


def subjects(request: WSGIRequest) -> JsonResponse:
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
