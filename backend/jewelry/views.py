from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import JewelrySerializer
from .models import Jewelry, StripePayment
from django.http import Http404


from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

import stripe
import json


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

@csrf_exempt
def payment_view(request):
    stripe.api_key = settings.STRIPE_SECRET_KEY
    data = json.loads(request.body)
    token = data['token']
    amount= data['amount']
    email = data['email']
    name = data['name']
    address_city = data['address_city']
    address_country = data['address_country']
    try:
        charge = stripe.Charge.create(
            amount=amount,
            currency='usd',
            source=token,
            description='LUXYPALACE Payment'
        )
        StripePayment.objects.create(
            charge_id=charge.id,
            amount=charge.amount,
            name=name,
            email=email,
            address_city=address_city,
            address_country=address_country,
        )
        print(data)
        print(request.body)
    except stripe.error.CardError as err:
        raise Http404('Card Payment Failed')
    return JsonResponse({'message': 'Payment Successful'}, status=201)
