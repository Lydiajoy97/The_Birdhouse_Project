from rest_framework import serializers
from about.models import Birdpost
from django.contrib.humanize.templatetags.humanize import naturaltime

class BirdpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Birdpost
        fields = ['title', 'image', 'location', 'content', 'updated_at', 'uploaded_by', 'categories',]
        updated_at = serializers.SerializersMethodField()
        
    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)
        

