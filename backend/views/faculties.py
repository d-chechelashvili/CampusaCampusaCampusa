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
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetFaculties(APIView):
    def get(self, request):
        faculties = Faculty.objects.all()
        serializer = FacultySerializer(faculties, many=True)
        return JsonResponse(serializer.data, safe=False)
