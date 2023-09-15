from rest_framework import serializers
from .models import Jewelry, Client


class JewelrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Jewelry
        fields = ['id', 'name', 'price', 'image', 'description', 'category', 'created_at', 'updated_at', 'owner']

class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = '__all__'