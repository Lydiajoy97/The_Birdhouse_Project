from rest_framework import serializers
from comments.models import Comment 

class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    
    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = Comment 
        fields = '__all__'

class CommentDetailSerializer(CommentSerializer):
    post = serializers.ReadOnlyField(source='post.id')