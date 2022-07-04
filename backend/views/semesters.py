from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.semester import Semester, SemesterSerializer


class AddSemester(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = SemesterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetSemesters(APIView):
    def get(self, request):
        semesters = Semester.objects.all()
        serializer = SemesterSerializer(semesters, many=True)
        return JsonResponse(serializer.data, safe=False)
