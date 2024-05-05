from rest_framework.test import APITestCase
from django.urls import reverse

class TestSetUp(APITestCase):
    
    def setUp(self):
        self.users_url = reverse('users')
        self.password_url = reverse('password')
        self.login_url = reverse('login')
        #self.user_url = reverse('user')
        
        self.data = {
            'email':'email@email.com',
            'username':'email',
            'password':'password'
        }
        
        return super().setUp()

    def tearDown(self):
        return super().tearDown()
    
    

