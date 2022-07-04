from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.planner_semester import PlannerSemester, PlannerSemesterSerializer


class AddPlannerSemester(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = PlannerSemesterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetPlannerSemesters(APIView):
    def get(self, request):
        planner_semesters = PlannerSemester.objects.all()
        serializer = PlannerSemesterSerializer(planner_semesters, many=True)
        return JsonResponse(serializer.data, safe=False)
