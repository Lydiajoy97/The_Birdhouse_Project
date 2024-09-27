from django.urls import path
from birdpost import views

urlpatterns = [
    path('birdpost', views.BirdpostList.as_view()),
    path('birdpost/<int:pk>', views.BirdpostDetail.as_view())
]