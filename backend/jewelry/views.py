from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import JewelrySerializer
from .models import Jewelry
from django.http import Http404


@api_view(['GET'])
def jewelry_list(request, *args, **kwargs):
    jewelries = Jewelry.objects.all().order_by('-id')
    serializer = JewelrySerializer(jewelries, many=True, context={"request": request})
    return Response(serializer.data)

@api_view(['GET'])
def jewelry_detail(request, pk, *args, **kwargs):
    try:
        jewelry = Jewelry.objects.get(pk=pk)
    except Jewelry.DoesNotExist:
        raise Http404("Jewelry does not exist")
    serializer = JewelrySerializer(jewelry, context={"request": request})
    return Response(serializer.data)