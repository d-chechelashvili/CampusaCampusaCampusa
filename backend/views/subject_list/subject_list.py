from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from backend.models.rating import Rating
from backend.models.difficulty import Difficulty
from backend.models.subject_version import SubjectVersion
from backend.mixins import PublicAPIMixin, APIErrorsMixin


def calculate_rating(subject_id, ratings):
    total = 0
    count = 0

    for rating in ratings:
        if rating.subject.id == subject_id:
            total += rating.rating
            count += 1

    if count == 0:
        return -1

    return total / count


def calculate_difficulty(subject_id, difficulties):
    total = 0
    count = 0

    for difficulty in difficulties:
        if difficulty.subject.id == subject_id:
            total += difficulty.difficulty
            count += 1

    if count == 0:
        return -1

    return total / count


class SubjectListAPI(PublicAPIMixin, APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        result = []

        subject_versions = SubjectVersion.objects.select_related()
        ratings = Rating.objects.select_related()
        difficulties = Difficulty.objects.select_related()

        for subject_version in subject_versions:
            subject = {
                'name': subject_version.subject.name,
                'faculty': subject_version.faculty.abbreviation,
                'year': subject_version.year,
                'credits': subject_version.subject.credits,
                'rating': calculate_rating(subject_version.subject.id, ratings),
                'difficulty': calculate_difficulty(subject_version.subject.id, difficulties),
                'semester': subject_version.semester
            }
            result.append(subject)

        return JsonResponse(result, safe=False)
