from django.db import models
from rest_framework import serializers

from backend.models.user import User
from backend.models.subject import Subject


class Score(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    score = models.FloatField()
    year = models.IntegerField(blank=True, null=True)
    semester = models.CharField(max_length=100, blank=True, null=True)


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ['id', 'user', 'subject', 'score', 'year', 'semester']
