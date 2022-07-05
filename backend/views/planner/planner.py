from rest_framework import status
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated

from backend.models.subject import Subject
from backend.mixins import PublicAPIMixin, APIErrorsMixin
from backend.models.planner_item import PlannerItem, PlannerItemSerializer


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


class AddSubjectToPlanAPI(PublicAPIMixin, APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user_id = request.user.id

        args = JSONParser().parse(request)
        subject_id = Subject.objects.get(name=args['subject_name']).id

        data = {
            'user': user_id,
            'subject': subject_id,
            'semester': args['semester'],
            'grade': '?'
        }

        serializer = PlannerItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)

        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
