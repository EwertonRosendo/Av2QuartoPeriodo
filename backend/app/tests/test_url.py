from django.test import TestCase
from django.urls import reverse, resolve
from app.views import UserView, PasswordView, Login, User

class TestUrls(TestCase):
    def test_users_url_resolves(self):
        url = reverse('users')
        self.assertEquals(resolve(url).func.view_class, UserView)

    def test_password_url_resolves(self):
        url = reverse('password')
        self.assertEquals(resolve(url).func.view_class, PasswordView)

    def test_login_url_resolves(self):
        url = reverse('login')
        self.assertEquals(resolve(url).func.view_class, Login)

    

    
