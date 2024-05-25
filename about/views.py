from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Birdpost
from .serializers import BirdpostSerializer


class BirdpostList(APIView):

    def get(self, request):
        birdposts = Birdpost.objects.all()
        serializer = BirdpostSerializer(birdposts, many=True)
        return Response(serializer.data)