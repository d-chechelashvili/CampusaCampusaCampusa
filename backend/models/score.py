from django.db import models
from rest_framework import serializers


class Score(models.Model):
    user_id = models.IntegerField()
    subject_id = models.IntegerField()
    score = models.FloatField()
    year = models.IntegerField(blank=True, null=True)
    semester_id = models.IntegerField(blank=True, null=True)


class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ['id', 'user_id', 'subject_id', 'score', 'year', 'semester_id']
