from django.db import models
from rest_framework import serializers

SEMESTER_FALL = 'fall'
SEMESTER_SPRING = 'spring'
SEMESTER_BOTH = 'both'


class Semester(models.Model):
    semester = models.CharField(max_length=6, unique=True)


class SemesterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Semester
        fields = ['id', 'semester']
