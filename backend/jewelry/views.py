from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import JewelrySerializer, ClientSerializer
from .models import Jewelry, Client


@api_view(['GET'])
def jewelry_list(request, *args, **kwargs):
    jewelries = Jewelry.objects.all().order_by('-id')
    serializer = JewelrySerializer(jewelries, many=True, context={"request": request})
    return Response(serializer.data)

@api_view(['GET'])
def client_list(request, *args, **kwargs):
    client = Client.objects.all().order_by('-id')
    serializer = ClientSerializer(client, many=True, context={"request": request})
    return Response(serializer.data)