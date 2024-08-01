from django.urls import path
from birdpost import views

urlpatterns = [
    path('/posts', views.BirdpostList.as_view()),
    path('/posts/<int:pk>', views.BirdpostDetail.as_view())
]