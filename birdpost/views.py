from django.db.models import Count
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Birdpost
from .serializers import BirdpostSerializer
from the_birdhouse.permissions import IsOwnerOrReadOnly

# Code written from django rest framework walkthrough
class BirdpostList(generics.ListCreateAPIView):

    serializer_class = BirdpostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Birdpost.objects.annotate(
        comments_count= Count('comment', distinct=True)
    ).order_by('-updated_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'owner__profile',
    ]
    search_fields = [
        'owner__username',
        'title',
        'location',
    ]
    ordering_fields = [
        'comments_count'
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class BirdpostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = BirdpostSerializer
    queryset = Birdpost.objects.annotate(
        comments_count = Count('comment', distinct=True)
    ).order_by('-updated_at')

    