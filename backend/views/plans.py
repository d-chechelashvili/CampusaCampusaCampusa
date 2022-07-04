from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

from backend.models.plan import Plan, PlanSerializer


class AddPlan(APIView):
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = PlanSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


class GetPlans(APIView):
    def get(self, request):
        plans = Plan.objects.all()
        serializer = PlanSerializer(plans, many=True)
        return JsonResponse(serializer.data, safe=False)
