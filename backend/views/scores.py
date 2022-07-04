from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.score import Score, ScoreSerializer


class AddScore(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = ScoreSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetScores(APIView):
    def get(self, request):
        scores = Score.objects.all()
        serializer = ScoreSerializer(scores, many=True)
        return JsonResponse(serializer.data, safe=False)
