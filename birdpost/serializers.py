from rest_framework import serializers
from birdpost.models import Birdpost

# from Youtube video
class BirdpostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')

    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_updated_at(self, obj):
        return naturaltime(obj.updated_at)
        
    class Meta:
        model = Birdpost
        fields = 'title', 'image', 'content', 'location', 'id', 'owner', 'updated_at', 'is_owner','profile_id', 'type_of_bird', 'approved',