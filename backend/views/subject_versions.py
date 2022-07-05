from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.subject_version import SubjectVersion, SubjectVersionSerializer


class AddSubjectVersion(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = SubjectVersionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetSubjectVersions(APIView):
    def get(self, request):
        subject_versions = SubjectVersion.objects.all()
        serializer = SubjectVersionSerializer(subject_versions, many=True)
        return JsonResponse(serializer.data, safe=False)
