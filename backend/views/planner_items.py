from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.planner_item import PlannerItem, PlannerItemSerializer


class AddPlannerItem(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = PlannerItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetPlannerItems(APIView):
    def get(self, request):
        planner_items = PlannerItem.objects.all()
        serializer = PlannerItemSerializer(planner_items, many=True)
        return JsonResponse(serializer.data, safe=False)
