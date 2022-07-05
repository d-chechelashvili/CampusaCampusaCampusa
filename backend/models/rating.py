from django.db import models
from rest_framework import serializers

from backend.models.user import User
from backend.models.subject import Subject


class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    rating = models.IntegerField()


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['id', 'user', 'subject', 'rating']
