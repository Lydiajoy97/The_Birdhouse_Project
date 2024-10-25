from django.db.models import Count
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Birdpost
from .serializers import BirdpostSerializer
from the_birdhouse.permissions import IsOwnerOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView

# Code written from django rest framework walkthrough
class BirdpostList(generics.ListCreateAPIView):

    serializer_class = BirdpostSerializer
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
        'content',
        'location',
    ]
    search_fields = [
        'content',
        'location',
    ]
    # https://www.youtube.com/watch?v=c-QsfbznSXI
    def perform_create(self, serializer):
        if serializer.is_valid(): 
            serializer.save(owner=self.request.user)
        else:
            print(serializer.errors)


class BirdpostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = BirdpostSerializer
    queryset = Birdpost.objects.annotate(
         posts_count = Count('owner__displayname', distinct=True)
            ).order_by('-updated_at')

# https://www.youtube.com/watch?v=k6ELzQgPHMM
class CreateBirdpostView(APIView):

    def post(self, request, format=None):
        pass