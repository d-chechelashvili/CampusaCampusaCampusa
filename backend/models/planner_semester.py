from django.db import models
from rest_framework import serializers


class PlannerSemester(models.Model):
    user_id = models.IntegerField()
    semesters = models.IntegerField()


class PlannerSemesterSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannerSemester
        fields = ['id', 'user_id', 'semesters']
