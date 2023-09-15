from rest_framework import serializers
from .models import Client, Jewelry
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ['id', 'username', 'password', 'email']


class JewelrySerializer(serializers.ModelSerializer):
    owner = ClientSerializer()  

    class Meta:
        model = Jewelry
        fields = ('id', 'name', 'price', 'image', 'description', 'category', 'created_at', 'updated_at', 'owner')