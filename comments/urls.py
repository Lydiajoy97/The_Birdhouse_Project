from django.urls import path
from comments import views 

urlpatterns = [
    path('comments/', views.CommentList.as_view()),
    path('git comments/<int:pk>', views.CommentDetail.as_view())
]