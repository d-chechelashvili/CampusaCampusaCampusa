from django.db import models
from rest_framework import serializers


class Nickname(models.Model):
    nickname = models.CharField(max_length=100, unique=True)


class NicknameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nickname
        fields = ['id', 'nickname']
