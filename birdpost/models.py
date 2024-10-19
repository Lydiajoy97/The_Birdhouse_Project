from django.db import models
from django.contrib.auth.models import User

# https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
BIRD_CHOICES = (
    ('owl','OWL'),
    ('eagle', 'EAGLE'),
    ('heron','HERON'),
    ('passerine','PASSERINE'),
    ('other','OTHER'),
    ('unknown','UNKNOWN'),
)

# Create your models here.
class Birdpost(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='displayname')
    title = models.CharField(max_length=255)
    image = models.ImageField(
        upload_to='images/', default='../default_profile_qdjgyp'
    )
    location = models.TextField(blank=True)
    content = models.TextField(blank=True)
    Type_of_bird = models.CharField(max_length=60, choices=BIRD_CHOICES, default='unknown')
    updated_at = models.DateTimeField(auto_now=True)
    uploaded_by = models.CharField(max_length=255, default='name')
    approved = models.BooleanField(default=False)