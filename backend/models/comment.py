from django.db import models
from django.utils.timezone import now
from rest_framework import serializers


class Comment(models.Model):
    user_id = models.IntegerField()
    subject_id = models.IntegerField()
    nickname_id = models.IntegerField()
    comment = models.TextField()
    datetime = models.DateTimeField(blank=True, default=now)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user_id', 'subject_id', 'nickname_id', 'comment', 'datetime']
