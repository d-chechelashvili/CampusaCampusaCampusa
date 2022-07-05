from django.db import models
from django.utils.timezone import now
from rest_framework import serializers

from backend.models.user import User
from backend.models.subject import Subject
from backend.models.nickname import Nickname


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    nickname = models.ForeignKey(Nickname, on_delete=models.CASCADE)
    comment = models.TextField()
    datetime = models.DateTimeField(blank=True, default=now)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'subject', 'nickname', 'comment', 'datetime']
