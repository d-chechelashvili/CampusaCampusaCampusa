from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.rating import Rating, RatingSerializer


class AddRating(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = RatingSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetRatings(APIView):
    def get(self, request):
        ratings = Rating.objects.all()
        serializer = RatingSerializer(ratings, many=True)
        return JsonResponse(serializer.data, safe=False)
