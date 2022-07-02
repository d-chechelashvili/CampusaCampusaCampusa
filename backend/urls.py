from django.urls import path

from . import views
from .views import GoogleLoginApi, SubjectsView

urlpatterns = [
    path("add_user/", views.AddUser.as_view(), name="add_user"),
    path("subjects/", SubjectsView.as_view(), name="subjects"),
    path('google/login/', GoogleLoginApi.as_view(), name='login-with-google'),

]
