from django.urls import path
from .views import UserView, PasswordView,Login,User, DeletePassword

urlpatterns = [
    path('users/', UserView.as_view()),
    path('password/',PasswordView.as_view()),
    path('login/', Login.as_view()),
    path('user/<str:usuario>/', User.as_view()),
    path('password/<int:id>/', DeletePassword.as_view())
    #path('stores/', StoresView.as_view())
    
]