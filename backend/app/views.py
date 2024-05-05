from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .serializers import UserSerializer, PasswordSerializer
from django.core import serializers
from drf_spectacular.utils import extend_schema
from .models import Password, Users


from password_generator import PasswordGenerator
from django.shortcuts import get_object_or_404

""".@method_decorator(name="get", decorator=swagger_auto_schema(
    manual_parameters=[
        'post_slug', openapi.IN_QUERY,
        description=("A unique string value identifying requested post")
        type=openapi.TYPE_STRING,
        enum=[ps.value for ps in PostStatus],
        required=True
    ]    
)),"""


class UserView(APIView):
    #select * from users
    @extend_schema(responses=UserSerializer)
    def get(self, request, *args, **kwargs):

        users = Users.objects.all()
        data = {'users':[
            
        ]}
        
        for user in users:
            data['users'].append({'id':user.user_id, 'email':user.email, 'username':user.username, 'password':user.password})
        
        if len(data['users'])==0:
            return Response(data, status=status.HTTP_204_NO_CONTENT)
        
        return Response(data, status=status.HTTP_200_OK)
    
    #insert into users (username, email, password) values (?, ?, ?)
    @extend_schema(responses=UserSerializer)
    def post(self, request, *args, **kwargs):
        
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid() and serializer.validate_user(request.data['username'], request.data['email']):
            serializer.save()
            return Response({'status':'conta criada'},status=status.HTTP_201_CREATED)
        
        return Response({'error':'email  ou username já cadastrados anteriormente, ou campos vazios'}, status=status.HTTP_400_BAD_REQUEST)
    
    # select * from users where id = ?
    @extend_schema(responses=UserSerializer)
    def put(self, request, *args, **kwargs):
        if request.data:
            data = request.data
        else:
            data = {
                    "email":"Luquinhas@com",
                    "username":"luquinhas123morango",
                    "password":"manobrown"
}       
        
        user = Users.objects.get(user_id=data['id'])
        serializer = UserSerializer(instance=user, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'deu bom'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # delete from users where id = ?
    @extend_schema(responses=UserSerializer)
    def delete(self, request, *args, **kwargs):
        user = Users.objects.get(id=request.data['id'])
        user.delete()
        return Response({'status':'deletado com sucesso'}, status=status.HTTP_202_ACCEPTED)
    
class PasswordView(APIView):
    #select user_id, password from passwords
    @extend_schema(responses=PasswordSerializer)
    def get(self, request, *args, **kwargs):
        passwords = Password.objects.all()
        data = {'passwords':[
            
        ]}
        for password in passwords:
            data['passwords'].append({'user_id':password.user_id, 'password':password.password, 'lenght':password.lenghtPassword})

        return Response(data)
    #insert into passwords (user_id, lenghtPassword, password) values (?, ?, ?)
    @extend_schema(responses=PasswordSerializer)
    def post(self, request, *args, **kwargs):

        lenPassword, username = request.data['lenghtPassword'], request.data['username']
        
        user = Users.objects.filter(username=username).first()
        id_user = user.user_id

        #print(id_user, user.email, user.password)
        
        PG = PasswordGenerator()
        PG.minlen = int(lenPassword)
        PG.maxlen = int(lenPassword)
        password = PG.generate()
        
        serializer = PasswordSerializer(data={'lenghtPassword':lenPassword, 'password':password, 'user_id':id_user})

        
        if serializer.is_valid():
            data = {'password':password, 'status':'deu bom'}
            serializer.save()
            return Response(data, status=status.HTTP_201_CREATED)
        
        return Response(data, status=status.HTTP_401_UNAUTHORIZED)
        
    def put(self, request, *args, **kwargs):
        #'lenghtPassword','password', 'id'
        username = request.data['username']
        user = Users.objects.filter(username=username).first()
        print(user)
        id_user = user.user_id
        data = {'lenghtPassword':request.data['lenghtPassword'],'password':request.data['password'], 'user_id':id_user}
        
        password = Password.objects.get(id=request.data['id'])
        serializer = PasswordSerializer(instance=password, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'deu bom'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class Login(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']
        
        user = Users.objects.filter(username=username).first()
        
        if user and password==user.password:
            # Se o usuário existe e a senha corresponde, considere o login bem-sucedido
            return Response({'status': 'Login bem-sucedido','username':user.username})
        else:
            # Caso contrário, retorne uma resposta indicando falha no login
            return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
        
class User(APIView):
    def get(self, request, usuario, *args, **kwargs):
        user = Users.objects.filter(username=usuario).first()
        id_user = user.user_id
        passwords = Password.objects.filter(user_id=id_user)
        data = {'passwords':[
            
        ]}
        for password in passwords:
            data['passwords'].append({'id':password.id, 'password':password.password, 'lenght':password.lenghtPassword})

        
        return Response(data)
    
class DeletePassword(APIView):
    def delete(self, request,id,  *args, **kwargs):

            password = Password.objects.get(id=id)
            password.delete()
            return Response({'status':'deletado com sucesso'}, status=status.HTTP_202_ACCEPTED)