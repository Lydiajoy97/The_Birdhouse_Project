from rest_framework import UserDetailSerializer
from rest_framework import serializers

class ProfileSerializer(serializers.ModelSerializer):
    person = serializers.ReadOnlyField(source='person.username')

    class Meta:
        model = Profile
        fields = [
            'id', 'person', 'display_name', 'about_me', 'image', 'favorite_bird', 'updated_at',
        ]