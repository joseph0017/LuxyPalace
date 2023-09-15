from django.db import models
from django.contrib.auth.models import User

class Client(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username

class Jewelry(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='naomi/')
    description = models.TextField()
    category = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    owner = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='jewelries')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'image'
        verbose_name_plural = 'images'