from rest_framework import serializers
from about.models import Birdpost


class BirdpostSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    class Meta:
        model = Birdpost
        fields = ['id', 'owner', 'is_owner',]
