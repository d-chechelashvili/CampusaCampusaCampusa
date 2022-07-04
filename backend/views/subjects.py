from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.subject import Subject, SubjectSerializer


class AddSubject(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = SubjectSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetSubjects(APIView):
    def get(self, request):
        subjects = Subject.objects.all()
        serializer = SubjectSerializer(subjects, many=True)
        return JsonResponse(serializer.data, safe=False)
