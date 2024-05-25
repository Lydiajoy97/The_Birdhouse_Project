from django.db import models
from django.contrib.auth.models import User

# Category model from realpython.com 
class Category(models.Model):
    name = models.CharField(max_length=30)

# Create your models here.
class Birdpost(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField("Category", related_name="posts")
