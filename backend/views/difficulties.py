from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.difficulty import Difficulty, DifficultySerializer


class AddDifficulty(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = DifficultySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetDifficulties(APIView):
    def get(self, request):
        difficulties = Difficulty.objects.all()
        serializer = DifficultySerializer(difficulties, many=True)
        return JsonResponse(serializer.data, safe=False)
