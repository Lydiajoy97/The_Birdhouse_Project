from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

# Built using code institute django rest framework walkthrough
class Profile(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=255, blank=True)
    about_me = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='../default_profile_qdjgyp')
    favorite_bird = models.TextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.owner}'s profile"

def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)

post_save.connect(create_profile, sender=User)