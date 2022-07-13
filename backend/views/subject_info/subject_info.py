import random
from collections import Counter

from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.views import APIView

from backend.mixins import APIErrorsMixin
from backend.models.comment import Comment, CommentSerializer
from backend.models.difficulty import Difficulty, DifficultySerializer
from backend.models.nickname import Nickname
from backend.models.prerequisite import Prerequisite
from backend.models.rating import Rating, RatingSerializer
from backend.models.score import Score, ScoreSerializer
from backend.models.subject import Subject
from backend.models.subject_version import SubjectVersion
from backend.views.utils import (
    calculate_difficulty,
    calculate_rating,
    get_postrequisite_names,
    get_prerequisite_names,
    get_semester,
)


class SubjectInfoAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = request.query_params
        subject_name = args["subject_name"]

        subject = Subject.objects.get(name=subject_name)
        ratings = Rating.objects.filter(subject=subject.id)
        subject_versions = SubjectVersion.objects.filter(subject=subject.id)
        prerequisites = Prerequisite.objects.select_related().filter(subject=subject.id)
        postrequisites = Prerequisite.objects.select_related().filter(
            prerequisite=subject.id
        )
        difficulties = Difficulty.objects.filter(subject=subject.id)

        user_rating = 0
        if len(ratings.filter(user_id=user_id)) > 0:
            user_rating = ratings.get(user=user_id).rating

        user_difficulty = 0
        if len(difficulties.filter(user_id=user_id)) > 0:
            user_difficulty = difficulties.get(user=user_id).difficulty

        result = {
            "name": subject.name,
            "syllabus_path": subject.syllabus_path,
            "user_rating": user_rating,
            "general_rating": calculate_rating(ratings),
            "credits": subject.credits,
            "semester": get_semester(subject_versions),
            "prerequisite_names": get_prerequisite_names(prerequisites),
            "postrequisite_names": get_postrequisite_names(postrequisites),
            "user_difficulty": user_difficulty,
            "general_difficulty": calculate_difficulty(difficulties),
        }

        return JsonResponse(result, safe=False)


class ScoreDistributionAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: Request) -> JsonResponse:
        args = request.query_params
        subject_name = args["subject_name"]
        semester = args["semester"]
        year = args["year"]
        subject = Subject.objects.get(name=subject_name)
        kwargs = {
            "subject": subject.id,
        }
        if year != "ALL":
            kwargs["year"] = year
        if semester != "ALL":
            kwargs["semester"] = semester
        scores = Score.objects.filter(**kwargs)
        result = [score.score for score in scores]
        return JsonResponse(result, safe=False)


class UpdateUserRatingAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = JSONParser().parse(request)
        subject_id = Subject.objects.get(name=args["subject_name"]).id

        ratings = Rating.objects.filter(user=user_id, subject=subject_id)
        if len(ratings) > 0:
            rating = Rating.objects.get(user=user_id, subject=subject_id)
            rating.rating = args["rating"]
            rating.save()

            return JsonResponse("", status=status.HTTP_200_OK, safe=False)
        else:
            data = {"user": user_id, "subject": subject_id, "rating": args["rating"]}

            serializer = RatingSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)

            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateUserDifficultyAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = JSONParser().parse(request)
        subject_id = Subject.objects.get(name=args["subject_name"]).id

        difficulties = Difficulty.objects.filter(user=user_id, subject=subject_id)
        if len(difficulties) > 0:
            difficulty = Difficulty.objects.get(user=user_id, subject=subject_id)
            difficulty.difficulty = args["difficulty"]
            difficulty.save()

            return JsonResponse("", status=status.HTTP_200_OK, safe=False)
        else:
            data = {
                "user": user_id,
                "subject": subject_id,
                "difficulty": args["difficulty"],
            }

            serializer = DifficultySerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)

            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateUserScoreAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = JSONParser().parse(request)
        subject_id = Subject.objects.get(name=args["subject_name"]).id

        scores = Score.objects.filter(
            user=user_id,
            subject=subject_id,
            year=args["year"],
            semester=args["semester"],
        )
        if len(scores) > 0:
            scores[0].score = args["score"]
            scores[0].save()
            return JsonResponse("", status=status.HTTP_200_OK, safe=False)

        data = {
            "user": user_id,
            "subject": subject_id,
            "score": args["score"],
            "year": args["year"],
            "semester": args["semester"],
        }

        serializer = ScoreSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)

        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddCommentAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = JSONParser().parse(request)
        subject_id = Subject.objects.get(name=args["subject_name"]).id

        user_comments = Comment.objects.filter(user_id=user_id, subject_id=subject_id)
        if len(user_comments) > 0:
            nickname_id = user_comments.first().nickname.id
        else:
            nickname_ids = [nickname.id for nickname in Nickname.objects.all()]
            subject_nickname_ids = [
                comment.nickname.id
                for comment in Comment.objects.filter(subject_id=subject_id)
            ]

            nickname_id_counts = Counter(nickname_ids + subject_nickname_ids)
            sorted_nickname_id_counts = nickname_id_counts.most_common()[::-1]
            filtered_nickname_id_counts = list(
                filter(
                    lambda x: x[1] == sorted_nickname_id_counts[0][1],
                    sorted_nickname_id_counts,
                )
            )

            nickname_id = random.choice(filtered_nickname_id_counts)[0]

        data = {
            "user": user_id,
            "subject": subject_id,
            "nickname": nickname_id,
            "comment": args["comment"],
        }

        serializer = CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            comment = Comment.objects.get(id=serializer.data["id"])
            response = {
                "author_nickname": comment.nickname.nickname,
                "comment_text": comment.comment,
                "is_client_author": comment.user.id == user_id,
                "date": comment.datetime.strftime(("%d/%m/%Y")),
            }
            return JsonResponse(response, status=status.HTTP_201_CREATED)

        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentsAPI(APIErrorsMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: Request) -> JsonResponse:
        user_id = request.user.id

        args = request.query_params
        subject_name = args["subject_name"]
        subject = Subject.objects.get(name=subject_name)

        comments = (
            Comment.objects.select_related()
            .filter(subject=subject.id)
            .order_by("-datetime")
        )

        result = []

        for comment in comments:
            result.append(
                {
                    "author_nickname": comment.nickname.nickname,
                    "comment_text": comment.comment,
                    "is_client_author": comment.user.id == user_id,
                    "date": comment.datetime.strftime(("%d/%m/%Y")),
                }
            )

        return JsonResponse(result, safe=False)
