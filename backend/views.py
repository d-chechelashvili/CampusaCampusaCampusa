from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTStatelessUserAuthentication

from backend.authentication.mixins import PublicApiMixin
from backend.models import User


class AddUser(APIView):
    def post(self, request):
        user = User(email=request.data['email'])
        user.save()

        return JsonResponse(data=request.data, status=status.HTTP_200_OK)


class SubjectsView(PublicApiMixin, APIView):
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
        # response = {
        #     "subjects": [
        #         "Programming Methodology",
        #         "Programming Abstraction",
        #         "Programming Paradigms",
        #         "Nand2Tetris",
        #         "Design Patterns",
        #         "Distributed Systems",
        #         "Compilers",
        #         "Computer Networks",
        #     ]
        # }
        # return JsonResponse(response)

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
