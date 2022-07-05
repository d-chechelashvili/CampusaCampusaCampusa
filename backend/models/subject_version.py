from django.db import models
from rest_framework import serializers

from backend.models.faculty import Faculty
from backend.models.subject import Subject


class SubjectVersion(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    year = models.IntegerField()
    semester = models.CharField(max_length=100)


class SubjectVersionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectVersion
        fields = ['id', 'subject', 'faculty', 'year', 'semester']
