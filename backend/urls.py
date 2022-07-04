from django.urls import path

from .views import comments, difficulties, faculties, nicknames, plans, prerequisites, ratings, scores, semesters, \
    subject_versions, subjects, users

urlpatterns = [
    path("comments/add_comment", comments.AddComment.as_view()),
    path("comments/get_comments", comments.GetComments.as_view()),

    path("difficulties/add_difficulty", difficulties.AddDifficulty.as_view()),
    path("difficulties/get_difficulties", difficulties.GetDifficulties.as_view()),

    path("faculties/add_faculty", faculties.AddFaculty.as_view()),
    path("faculties/get_faculties", faculties.GetFaculties.as_view()),

    path("nicknames/add_nickname", nicknames.AddNickname.as_view()),
    path("nicknames/get_nicknames", nicknames.GetNicknames.as_view()),

    path("plans/add_plan", plans.AddPlan.as_view()),
    path("plans/get_plans", plans.GetPlans.as_view()),

    path("prerequisites/add_prerequisite", prerequisites.AddPrerequisite.as_view()),
    path("prerequisites/get_prerequisites", prerequisites.GetPrerequisites.as_view()),

    path("ratings/add_rating", ratings.AddRating.as_view()),
    path("ratings/get_ratings", ratings.GetRatings.as_view()),

    path("scores/add_score", scores.AddScore.as_view()),
    path("scores/get_scores", scores.GetScores.as_view()),

    path("semesters/add_semester", semesters.AddSemester.as_view()),
    path("semesters/get_semesters", semesters.GetSemesters.as_view()),

    path("subject_versions/add_subject_version", subject_versions.AddSubjectVersion.as_view()),
    path("subject_versions/get_subject_versions", subject_versions.GetSubjectVersions.as_view()),

    path("subjects/add_subject", subjects.AddSubject.as_view()),
    path("subjects/get_subjects", subjects.GetSubjects.as_view()),

    path("users/add_user", users.AddUser.as_view()),
    path("users/get_users", users.GetUsers.as_view()),
]
