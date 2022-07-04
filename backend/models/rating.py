from django.db import models
from rest_framework import serializers


class Rating(models.Model):
    user_id = models.IntegerField()
    subject_id = models.IntegerField()
    rating = models.IntegerField()


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['id', 'user_id', 'subject_id', 'rating']
