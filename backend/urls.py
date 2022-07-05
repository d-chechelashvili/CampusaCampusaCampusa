from django.urls import path

from .authentication.views import GoogleLoginAPI
from .views.subject_list.subject_list import SubjectListAPI
from .views.planner.planner import UserPlanAPI, AddSubjectToPlanAPI, RemoveSubjectFromPlanAPI, UpdateSubjectGradeAPI

urlpatterns = [
    # **************************** Authentication *************************** #
    path('google/login/', GoogleLoginAPI.as_view(), name='login-with-google'),


    # ***************************** Subject List **************************** #
    path('subjects/', SubjectListAPI.as_view(), name='get-subject-list'),


    # ******************************* Planner ******************************* #
    path('planner/get_plan/', UserPlanAPI.as_view(), name='get-user-plan'),

    # args: subject_name, semester
    path('planner/add_subject/', AddSubjectToPlanAPI.as_view(), name='add-subject-to-plan'),

    # args: subject_name, semester
    path('planner/remove_subject/', RemoveSubjectFromPlanAPI.as_view(), name='remove-subject-from-plan'),

    # args: subject_name, semester, grade
    path('planner/update_grade/', UpdateSubjectGradeAPI.as_view(), name='update-subject-grade'),
]
