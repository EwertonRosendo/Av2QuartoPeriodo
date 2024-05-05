from .test_setup import TestSetUp
from ..models import Password, Users

class PasswordModelTest(TestSetUp):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Password.objects.create(id=1, password='test1234', lenghtPassword=8, user_id=1)

    def test_password_user_id_label(self):
        password = Password.objects.get(id=1)
        field_label = password._meta.get_field('user_id').verbose_name
        self.assertEqual(field_label, 'user id')

    def test_password_length(self):
        password = Password.objects.get(id=1)
        max_length = password._meta.get_field('password').max_length
        self.assertEqual(max_length, 50)

    # Add more tests as needed

class UsersModelTest(TestSetUp):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Users.objects.create(user_id=1, username='testuser', email='test@example.com', password='password123')

    def test_users_username_label(self):
        user = Users.objects.get(user_id=1)
        field_label = user._meta.get_field('username').verbose_name
        self.assertEqual(field_label, 'username')

    def test_users_email_max_length(self):
        user = Users.objects.get(user_id=1)
        max_length = user._meta.get_field('email').max_length
        self.assertEqual(max_length, 50)

    # Add more tests as needed
