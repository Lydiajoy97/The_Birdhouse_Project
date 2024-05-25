from django.contrib import admin
from .models import Category, Birdpost

class CategoryAdmin(admin.ModelAdmin):
    pass

class BirdpostAdmin(admin.ModelAdmin):
    pass

admin.site.register(Category, CategoryAdmin)
admin.site.register(Birdpost, BirdpostAdmin)