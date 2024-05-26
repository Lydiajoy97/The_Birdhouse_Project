from rest_framework import serializers
from about.models import Birdpost


class BirdpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Birdpost
        fields = ['title', 'image', 'location', 'content', 'updated_at', 'uploaded_by', 'categories',]
