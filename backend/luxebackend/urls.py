from . import views
from django.urls import re_path
from django.contrib import admin

urlpatterns = [
    re_path('admin/', admin.site.urls),
    re_path('login/', views.login),
    re_path('signup/', views.signup),
    re_path('test_token/', views.test_token),
]
