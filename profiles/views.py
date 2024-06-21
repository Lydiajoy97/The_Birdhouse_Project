from django.db.models import Count
from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from the_birdhouse.permissions import IsOwnerOrReadOnly
from .models import Profile
from .serializer import ProfileSerializer

# From code insitutes Django rest framework walkthrough
class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.annotate (
        posts_count=Count('owner__name', distinct=True)
    ).order_by('-updated_at')
    serializer_class = ProfileSerializer
    filter_backends = [
        filters.OrderingFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'owner__profile',
    ]

class ProfileDetail(generics.RetrieveUpdateAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.annotate(
        posts_count=Count('owner__displayname',distint=True)
    ).order_by('updated_at')
    serializer_class = ProfileSerializer