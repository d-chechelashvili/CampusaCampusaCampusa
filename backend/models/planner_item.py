from django.db import models
from rest_framework import serializers

from backend.models.user import User
from backend.models.subject import Subject


class PlannerItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    semester = models.IntegerField()
    grade = models.CharField(max_length=1)


class PlannerItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannerItem
        fields = ['id', 'user', 'subject', 'semester', 'grade']
