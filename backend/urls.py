from django.urls import path

from .authentication.views import GoogleLoginAPI
from .views.planner.planner import (
    AddSubjectToPlanAPI,
    RemoveSubjectFromPlanAPI,
    UpdateSubjectGradeAPI,
    UserPlanAPI,
)
from .views.subject_info.subject_info import (
    AddCommentAPI,
    CommentsAPI,
    ScoreDistributionAPI,
    SubjectInfoAPI,
    UpdateUserDifficultyAPI,
    UpdateUserRatingAPI,
    UpdateUserScoreAPI,
)
from .views.subject_list.subject_list import SubjectListAPI

urlpatterns = [
    # **************************** Authentication *************************** #
    path("google/login/", GoogleLoginAPI.as_view(), name="login-with-google"),
    # ***************************** Subject List **************************** #
    path("subjects/", SubjectListAPI.as_view(), name="get-subject-list"),
    # ******************************* Planner ******************************* #
    path("planner/get_plan/", UserPlanAPI.as_view(), name="get-user-plan"),
    # args: subject_name, semester
    path(
        "planner/add_subject/",
        AddSubjectToPlanAPI.as_view(),
        name="add-subject-to-plan",
    ),
    # args: subject_name, semester
    path(
        "planner/remove_subject/",
        RemoveSubjectFromPlanAPI.as_view(),
        name="remove-subject-from-plan",
    ),
    # args: subject_name, semester, grade
    path(
        "planner/update_grade/",
        UpdateSubjectGradeAPI.as_view(),
        name="update-subject-grade",
    ),
    # ***************************** Subject Info **************************** #
    # args: subject_name
    path("subject_info/", SubjectInfoAPI.as_view(), name="get-subject-info"),
    # args: subject_name, semester, year
    path(
        "subject_info/score_distribution/",
        ScoreDistributionAPI.as_view(),
        name="get-score-distribution",
    ),
    # args: subject_name, rating
    path(
        "subject_info/update_rating/",
        UpdateUserRatingAPI.as_view(),
        name="update-user-rating",
    ),
    # args: subject_name, difficulty
    path(
        "subject_info/update_difficulty/",
        UpdateUserDifficultyAPI.as_view(),
        name="update-user-difficulty",
    ),
    # args: subject_name, score, year, semester
    path(
        "subject_info/update_score/",
        UpdateUserScoreAPI.as_view(),
        name="update-user-score",
    ),
    # args: subject_name, comment
    path(
        "subject_info/add_comment/",
        AddCommentAPI.as_view(),
        name="add-comment",
    ),
    # args: subject_name
    path(
        "subject_info/get_comments/",
        CommentsAPI.as_view(),
        name="get-comments",
    ),
]
