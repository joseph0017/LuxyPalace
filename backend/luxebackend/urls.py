from . import views
from django.urls import re_path
from django.contrib import admin

urlpatterns = [
    re_path('admin/', admin.site.urls),
    re_path('login', views.login),
    re_path('signup', views.signup),
    re_path('test_token', views.test_token),
    re_path('jewelries/', views.jewelry_list, name='jewelry_list'),
    re_path('jewelries/<int:pk>/', views.jewelry_detail, name='jewelry_detail'),
]