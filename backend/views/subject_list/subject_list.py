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

# class SubjectListAPI(APIErrorsMixin, APIView):
#     permission_classes = [IsAuthenticated]
#
#     def get(self, request):
#         result = [
#             {
#                 "name": "პროგრამირების მეთოდოლოგიები",
#                 "faculty": "MACS",
#                 "semester": "AUTUMN",
#                 "year": 1,
#                 "credits": 6,
#                 "difficulty": 6.1,
#                 "rating": 7.5
#             },
#             {
#                 "name": "პროგრამული უზრუნველყოფის არქიტექტურა",
#                 "faculty": "MACS",
#                 "semester": "SPRING",
#                 "year": 2,
#                 "credits": 5,
#                 "difficulty": 5.1,
#                 "rating": 7.3
#             },
#             {"name": "Libri magni", "faculty": "GOV", "semester": "SPRING", "year": 1, "credits": 3, "difficulty": 3.1,
#              "rating": 7.2},
#             {"name": "ანთროპოლოგია", "faculty": "GEN", "semester": "SPRING", "year": 1, "credits": 4, "difficulty": 4.1,
#              "rating": 6.1},
#             {"name": "Libri magni II", "faculty": "GOV", "semester": "AUTUMN", "year": 2, "credits": 3,
#              "difficulty": 3.1,
#              "rating": 6.9},
#             {
#                 "name": "პროგრამირების აბსტრაქციები",
#                 "faculty": "MACS",
#                 "semester": "SPRING",
#                 "year": 1,
#                 "credits": 8,
#                 "difficulty": 8.7,
#                 "rating": 7.5
#             },
#             {
#                 "name": "ვიზუალური ხელოვნება",
#                 "faculty": "VAADS",
#                 "semester": "AUTUMN",
#                 "year": 3,
#                 "credits": 1,
#                 "difficulty": 1.1,
#                 "rating": 3.5
#             },
#             {"name": "ექსელი", "faculty": "ESM", "semester": "AUTUMN", "year": 1, "credits": 2, "difficulty": 2.1,
#              "rating": 4.5},
#             {"name": "საინტერესო საგანი", "faculty": "GEN", "semester": "BOTH", "year": 4, "credits": 3,
#              "difficulty": 7.7,
#              "rating": 4.5},
#         ]
#
#         return JsonResponse(result, safe=False)
