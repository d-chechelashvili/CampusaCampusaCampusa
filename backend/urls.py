from django.urls import path

from . import views

urlpatterns = [
    path("subjects", views.subjects, name="subjects"),
]
