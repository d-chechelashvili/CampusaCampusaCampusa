from django.db import models
from rest_framework import serializers


class Plan(models.Model):
    user_id = models.IntegerField()
    subject_id = models.IntegerField()
    semester_id = models.IntegerField()
    grade = models.CharField(max_length=1)


class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = ['id', 'user_id', 'subject_id', 'semester_id', 'grade']
