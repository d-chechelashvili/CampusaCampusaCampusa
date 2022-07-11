from django.db import models
from rest_framework import serializers

from backend.models.subject import Subject
from backend.models.user import User


class Difficulty(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    difficulty = models.IntegerField()


class DifficultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Difficulty
        fields = ["id", "user", "subject", "difficulty"]
