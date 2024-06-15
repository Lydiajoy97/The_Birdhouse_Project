from django.http import Http404
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Birdpost
from rest_framework import serializers
from about.serializers import BirdpostSerializer
from the_birdhouse.permissions import IsOwnerOrReadOnly

# Code written from django rest framework walkthrough
class BirdpostList(APIView):

    serializer_class = BirdpostSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    def get(self, request):
        birdposts = Birdpost.objects.all()
        serializer = BirdpostSerializer(birdposts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BirdpostListSerializer(
            data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )

class BirdpostDetail(APIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = BirdpostSerializer

    def get_object(self, pk):
        try:
            post = Birpost.objects.get(pk=pk)
            self.check_object_permissions(self.request, birdpost)
            return birdpost
        except Birdpost.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        birdpost = self.get_object(pk)
        serializer = BirdpostSerializer(
            birdpost, context={'request': request}
        )
        return Response(serializer.data)

