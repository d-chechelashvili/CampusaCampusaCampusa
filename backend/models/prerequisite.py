from django.db import models
from rest_framework import serializers


class Prerequisite(models.Model):
    subject_id = models.IntegerField()
    prerequisite_subject_id = models.IntegerField()


class PrerequisiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prerequisite
        fields = ['id', 'subject_id', 'prerequisite_subject_id']
