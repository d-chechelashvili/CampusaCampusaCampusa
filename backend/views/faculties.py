from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.faculty import Faculty, FacultySerializer


class AddFaculty(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = FacultySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetFaculties(APIView):
    def get(self, request):
        faculties = Faculty.objects.all()
        serializer = FacultySerializer(faculties, many=True)
        return JsonResponse(serializer.data, safe=False)
