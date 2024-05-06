from .test_setup import TestSetUp
from ..serializers import UserSerializer

class TestViews(TestSetUp):

    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.users_url)
        #import pdb
        #pdb.set_trace()
        self.assertEqual(res.status_code, 400)

    def test_user_can_register_correctly(self):
        res = self.client.post(self.users_url, self.data, format='json')
        #import pdb
        #pdb.set_trace()
        self.assertEqual(res.status_code, 201)
    
    def test_user_can_be_listed(self):
        
        res = self.client.post(self.users_url, self.data, format='json')
        res = self.client.get(self.users_url)
        self.assertEqual(res.status_code, 200)

    
    def test_user_cannot_be_listed_because_there_isnot_content(self):
        data = {
            'email':'',
            'username':'email',
            'password':'password'
        }
        self.client.post(self.users_url, data, format='json')
        res = self.client.get(self.users_url)
        self.assertEqual(res.status_code, 204)

    def test_password_can_be_added(self):
        self.client.post(self.users_url, self.data, format='json')
        data = {
            'lenghtPassword':8,
            'username':'email'
        }

        res = self.client.post(self.password_url, data, format='json')
        self.assertEqual(res.status_code, 201)

    def test_user_flow(self):
        resCadastro = self.client.post(self.users_url, self.data, format='json')

        if resCadastro.status_code == 201:
            data = {'username':'email',
                    'password':'password'}
            resLogin = self.client.post(self.login_url, data, format='json')

            if resLogin.status_code != 201:
                data = {
                    'lenghtPassword':8,
                    'username':'email'
                    }
                
                resData = self.client.post(self.password_url, data, format='json')

        self.assertEqual(resData.status_code, 201)

