from django.db import models
from rest_framework import serializers


class User(models.Model):
    email = models.CharField(max_length=100, unique=True)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email"]
