from rest_framework import serializers
from .models import Jewelry


class JewelrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Jewelry
        fields = ['id', 'name', 'price', 'image', 'description', 'category', 'created_at', 'updated_at']
