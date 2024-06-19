from rest_framework import serializers
from birdpost.models import Birdpost

class BirdpostSerializer(serializers.ModelSerializer):
    class Meta:
        owner = serializers.ReadOnlyField(source='owner.username')
        is_owner = serializers.SerializerMethodField()
        profile_id = serializers.ReadOnlyField(source='owner.profile.id')
        like_id = serializers.SerializerMethodField()
        likes_count = serializers.ReadOnlyField()
        comments_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)

    class Meta:
        model = Birdpost
        fields = [
            'id', 'owner', 'profile_id',
            'created_at', 'updated_at',
            'title', 'content', 'image',
            'like_id', 'likes_count', 'comments_count',]