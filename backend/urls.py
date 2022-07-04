from django.urls import path

from .views import users

urlpatterns = [
    path("users/add_user", users.AddUser.as_view()),
    path("users/get_users", users.GetUsers.as_view()),
]
