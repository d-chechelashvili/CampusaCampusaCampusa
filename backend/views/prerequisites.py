from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.prerequisite import Prerequisite, PrerequisiteSerializer


class AddPrerequisite(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = PrerequisiteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetPrerequisites(APIView):
    def get(self, request):
        prerequisites = Prerequisite.objects.all()
        serializer = PrerequisiteSerializer(prerequisites, many=True)
        return JsonResponse(serializer.data, safe=False)
