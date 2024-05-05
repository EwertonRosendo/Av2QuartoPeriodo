from django.urls import path
from .views import UserView, PasswordView,Login,User, DeletePassword, User

urlpatterns = [
    path('users/', UserView.as_view(), name='users'),
    path('password/',PasswordView.as_view(), name='password'),
    path('login/', Login.as_view(), name='login'),
    path('user/<str:usuario>/', User.as_view(), name='user'),
    path('password/<int:id>/', DeletePassword.as_view(),)
    #path('stores/', StoresView.as_view())
    
]