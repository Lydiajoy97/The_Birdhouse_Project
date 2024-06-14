from rest_framework import UserDetailSerializer
from rest_framework import serializers

class UserDetailSerializer(serializers.ModelSerializer):
    person = serializers.ReadOnlyField(source='person.username')

    class Meta(UserDetailSerializer.Meta):
        model = Profile
        fields = UserDetailSerializer.Meta.fields + (
            'id', 'person', 'display_name', 'about_me', 'image', 'favorite_bird', 'updated_at',
        )