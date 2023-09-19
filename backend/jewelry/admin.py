from django.contrib import admin
from .models import Jewelry, StripePayment

# Register your models here.
admin.site.register(Jewelry)
admin.site.register(StripePayment)