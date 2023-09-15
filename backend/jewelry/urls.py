from . import views
from django.urls import re_path, include

urlpatterns = [
    re_path('jewelry-list/', views.jewelry_list),
    re_path('client-list/', views.client_list),
]
