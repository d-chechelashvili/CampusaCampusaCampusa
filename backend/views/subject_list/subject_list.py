from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from backend.models.rating import Rating
from backend.models.difficulty import Difficulty
from backend.models.subject_version import SubjectVersion
from backend.mixins import APIErrorsMixin
from backend.views.utils import calculate_rating, calculate_difficulty


class SubjectListAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        result = []

        subject_versions = SubjectVersion.objects.select_related()

        for subject_version in subject_versions:
            ratings = Rating.objects.filter(subject=subject_version.subject.id)
            difficulties = Difficulty.objects.filter(subject=subject_version.subject.id)

            subject = {
                'name': subject_version.subject.name,
                'faculty': subject_version.faculty.abbreviation,
                'year': subject_version.year,
                'credits': subject_version.subject.credits,
                'rating': calculate_rating(ratings),
                'difficulty': calculate_difficulty(difficulties),
                'semester': subject_version.semester
            }
            result.append(subject)

        return JsonResponse(result, safe=False)
