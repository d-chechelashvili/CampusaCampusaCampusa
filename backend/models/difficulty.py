from django.db import models
from rest_framework import serializers

from backend.models.user import User
from backend.models.subject import Subject


class Difficulty(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    difficulty = models.IntegerField()


class DifficultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Difficulty
        fields = ['id', 'user', 'subject', 'difficulty']
