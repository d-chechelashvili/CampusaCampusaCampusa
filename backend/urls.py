from django.urls import path

from .authentication.views import GoogleLoginAPI
from .views.subject_list.subject_list import SubjectListAPI
from .views.planner.planner import UserPlanAPI, AddSubjectToPlanAPI, RemoveSubjectFromPlanAPI, UpdateSubjectGradeAPI

urlpatterns = [
    # authentication
    path('google/login/', GoogleLoginAPI.as_view(), name='login-with-google'),

    # subject_list
    path('subjects/', SubjectListAPI.as_view(), name='get-subject-list'),

    # planner
    path('planner/get_plan', UserPlanAPI.as_view(), name='get-user-plan'),
    path('planner/add_subject', AddSubjectToPlanAPI.as_view(), name='add-subject-to-plan'),
    path('planner/remove_subject', RemoveSubjectFromPlanAPI.as_view(), name='remove-subject-from-plan'),
    path('planner/update_grade', UpdateSubjectGradeAPI.as_view(), name='update-subject-grade'),
]
