from django.db import models
from rest_framework import serializers


class Difficulty(models.Model):
    user_id = models.IntegerField()
    subject_id = models.IntegerField()
    difficulty = models.IntegerField()


class DifficultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Difficulty
        fields = ['id', 'user_id', 'subject_id', 'difficulty']
