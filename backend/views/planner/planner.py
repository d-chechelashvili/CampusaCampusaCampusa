from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from backend.models.planner_item import PlannerItem
from backend.mixins import PublicAPIMixin, APIErrorsMixin


class UserPlansAPI(PublicAPIMixin, APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_id = request.user.id

        result = []

        planner_items = PlannerItem.objects.select_related()

        for planner_item in planner_items:
            if planner_item.user.id == user_id:
                while planner_item.semester > len(result):
                    result.append([])

                subject = {
                    'name': planner_item.subject.name,
                    'credits': planner_item.subject.credits,
                    'grade': planner_item.grade
                }

                result[planner_item.semester - 1].append(subject)

        return JsonResponse(result, safe=False)
