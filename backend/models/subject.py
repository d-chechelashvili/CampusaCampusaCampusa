from django.db import models
from rest_framework import serializers


class Subject(models.Model):
    name = models.CharField(max_length=100, unique=True)
    credits = models.IntegerField()
    syllabus_path = models.CharField(max_length=100)


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ["id", "name", "credits", "syllabus_path"]
