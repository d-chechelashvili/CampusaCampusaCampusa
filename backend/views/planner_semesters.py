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
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetPlannerSemesters(APIView):
    def get(self, request):
        planner_semesters = PlannerSemester.objects.all()
        serializer = PlannerSemesterSerializer(planner_semesters, many=True)
        return JsonResponse(serializer.data, safe=False)
