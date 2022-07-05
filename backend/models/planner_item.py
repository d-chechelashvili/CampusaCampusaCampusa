from django.db import models
from rest_framework import serializers


class PlannerItem(models.Model):
    user_id = models.IntegerField()
    subject_id = models.IntegerField()
    semester = models.IntegerField()
    grade = models.CharField(max_length=1)


class PlannerItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannerItem
        fields = ['id', 'user_id', 'subject_id', 'semester', 'grade']
