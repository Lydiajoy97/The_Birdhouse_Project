from django.contrib import admin
from .models import Birdpost

class BirdpostAdmin(admin.ModelAdmin):
    pass

    fields=(('title', 'owner', 'image', 'content', 'location', 'type_of_bird', 'approved')),
    list_display = (('type_of_bird')),
    list_filter = (('type_of_bird')),
    ordering = (('updated_at', 'title'))

admin.site.register(Birdpost, BirdpostAdmin)