from django.urls import path

from . import views
from .authentication.views import GoogleLoginApi, DecodeJWTTest
from .views import SubjectsView

urlpatterns = [
    path("add_user/", views.AddUser.as_view(), name="add_user"),
    path("subjects/", SubjectsView.as_view(), name="subjects"),
    path('google/login/', GoogleLoginApi.as_view(), name='login-with-google'),
    path('test/', DecodeJWTTest.as_view(), name='test'),
]
