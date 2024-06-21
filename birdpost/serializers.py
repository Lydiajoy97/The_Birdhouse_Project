from rest_framework import serializers
from birdpost.models import Birdpost

# from Youtube video
class BirdpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Birdpost
        fields = 'title', 'image', 'content', 'location', 'id',

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)