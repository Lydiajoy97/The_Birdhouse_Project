from django.db.models import Count
from rest_framework import generics, permissions, filters
from .models import Birdpost
from birdpost.serializers import BirdpostSerializer
from the_birdhouse.permissions import IsOwnerOrReadOnly

# Code written from django rest framework walkthrough
class BirdpostList(generics.ListCreateAPIView):

    serializer_class = BirdpostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Post.objects.annotate(
        comments_count= Count('comment', distinct=True)
    ).order_by('-updated_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter, 
    ]
    search_fields = [
        'owner__username',
        'title',
    ]
    ordering_fields = [
        'comments_count'
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class BirdpostDetail(APIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = BirdpostSerializer

    def get_object(self, pk):
        try:
            post = Birdpost.objects.get(pk=pk)
            self.check_object_permissions(self.request, post)
            return post
        except Birdpost.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        post = self.get_object(pk)
        serializer = BirdpostSerializer(
            post, context={'request': request}
        )
        return Response(serializer.data)
    
    
    def put(self, request, pk):
        post = self.get_object(pk)
        serializer = PostSerializer(
            post, data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        post = self.get_object(pk)
        post.delete()
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )

