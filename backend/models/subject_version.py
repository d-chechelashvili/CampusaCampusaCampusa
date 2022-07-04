from django.db import models
from rest_framework import serializers


class SubjectVersion(models.Model):
    subject_id = models.IntegerField()
    faculty_id = models.IntegerField()
    year = models.IntegerField()
    semester_id = models.IntegerField()


class SubjectVersionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectVersion
        fields = ['id', 'subject_id', 'faculty_id', 'year', 'semester_id']
