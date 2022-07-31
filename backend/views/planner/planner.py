from typing import Dict, List, Union

from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.views import APIView

from backend.mixins import APIErrorsMixin
from backend.models.planner_item import PlannerItem, PlannerItemSerializer
from backend.models.subject import Subject


class UserPlanAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        result: List[Dict[str, List[Dict[str, Union[str, int]]]]] = []

        planner_items = PlannerItem.objects.select_related()

        for planner_item in planner_items:
            if planner_item.user.id == user_id:
                while planner_item.semester > len(result):
                    result.append({"subjects": []})

                subject = {
                    "name": planner_item.subject.name,
                    "credits": planner_item.subject.credits,
                    "grade": planner_item.grade,
                }

                result[planner_item.semester - 1]["subjects"].append(subject)
        return JsonResponse(result, safe=False)


class AddSubjectToPlanAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = JSONParser().parse(request)
        subject_id = Subject.objects.get(name=args["subject_name"]).id

        data = {
            "user": user_id,
            "subject": subject_id,
            "semester": args["semester"],
            "grade": "?",
        }

        serializer = PlannerItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)

        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RemoveSubjectFromPlanAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = JSONParser().parse(request)
        subject_id = Subject.objects.get(name=args["subject_name"]).id

        PlannerItem.objects.filter(
            user=user_id, subject=subject_id, semester=args["semester"]
        ).delete()

        return JsonResponse("", status=status.HTTP_200_OK, safe=False)


class UpdateSubjectGradeAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = JSONParser().parse(request)
        subject_id = Subject.objects.get(name=args["subject_name"]).id

        planner_item = PlannerItem.objects.get(
            user=user_id, subject=subject_id, semester=args["semester"]
        )
        planner_item.grade = args["grade"]
        planner_item.save()

        return JsonResponse("", status=status.HTTP_200_OK, safe=False)
