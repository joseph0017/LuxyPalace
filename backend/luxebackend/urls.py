from . import views
from django.urls import re_path, include
from django.contrib import admin

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    re_path('admin/', admin.site.urls),
    re_path('login/', views.login),
    re_path('signup/', views.signup),
    re_path('test_token/', views.test_token),
    re_path('', include('jewelry.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)