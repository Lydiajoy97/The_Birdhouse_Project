from django.db.models import Count
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Profile
from .serializers import ProfileSerializer
from the_birdhouse.permissions import IsOwnerOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView


# From code insitutes Django rest framework walkthrough
class BirdpostList(generics.ListCreateAPIView):

    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Birdpost.objects.annotate(
        posts_count=Count('owner__displayname', distinct=True)
    ).order_by('-updated_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'display_name',
        'about_me',
        'favorite_bird',
    ]
    search_fields = [
        'display_name',
    ]
    # https://www.youtube.com/watch?v=c-QsfbznSXI
    def perform_create(self, serializer):
        if serializer.is_valid(): 
            serializer.save(owner=self.request.user)
        else:
            print(serializer.errors)

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ProfileSerializer
    queryset = Profile.objects.annotate(
         posts_count = Count('owner__displayname', distinct=True)
            ).order_by('-updated_at')