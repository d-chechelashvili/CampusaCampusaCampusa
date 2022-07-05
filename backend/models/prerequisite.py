from django.db import models
from rest_framework import serializers

from backend.models.subject import Subject


class Prerequisite(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='subject')
    prerequisite = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='prerequisite')


class PrerequisiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prerequisite
        fields = ['id', 'subject', 'prerequisite']
