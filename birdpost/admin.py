from django.contrib import admin
from .models import Birdpost

class BirdpostAdmin(admin.ModelAdmin):
    pass
    
admin.site.register(Birdpost, BirdpostAdmin)