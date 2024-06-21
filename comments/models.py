from django.db import models
from django.contrib.auth.models import User
from birdpost.models import Birdpost

class Comment(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Birdpost, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

    class Meta: 
        ordering = ['-updated_at']
    def __str__(self):
        return self.content

