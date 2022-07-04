from django.db import models
from rest_framework import serializers


class SubjectVersion(models.Model):
    subject_id = models.IntegerField()
    faculty_id = models.IntegerField()
    year = models.IntegerField()
    semester = models.CharField(max_length=100)


class SubjectVersionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectVersion
        fields = ['id', 'subject_id', 'faculty_id', 'year', 'semester']
