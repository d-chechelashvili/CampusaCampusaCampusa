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
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetSubjectVersions(APIView):
    def get(self, request):
        subject_versions = SubjectVersion.objects.all()
        serializer = SubjectVersionSerializer(subject_versions, many=True)
        return JsonResponse(serializer.data, safe=False)
