from rest_framework import serializers
from .models import Profile 

# from code insitute drf_api walkthrough

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    posts_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
       request = self.context['request']
       return request.user == obj.owner

    class Meta:
        model = Profile
        fields = (
            'id', 'person', 'posts_count', 'display_name', 'about_me', 'image', 'favorite_bird', 'updated_at',
        )