from django.urls import path
from about import views

urlpatterns = [
    path('about/', views.BirdpostList.as_view()),
    path('about/<int:pk>/', views.BirdpostDetail.as_view())
]