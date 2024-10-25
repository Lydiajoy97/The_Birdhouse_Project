from django.contrib import admin
from .models import Birdpost

@admin.register( Birdpost )
class BirdpostAdmin(admin.ModelAdmin):
    fields=(('title', 'owner', 'image', 'content', 'location', 'type_of_bird', 'approved'))
    list_display = (('type_of_bird', 'title'))
    list_filter = (('type_of_bird', 'approved'))
    ordering = (('updated_at', 'title'))

