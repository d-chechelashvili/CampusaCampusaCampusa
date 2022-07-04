from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.nickname import Nickname, NicknameSerializer


class AddNickname(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = NicknameSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetNicknames(APIView):
    def get(self, request):
        users = Nickname.objects.all()
        serializer = NicknameSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)
