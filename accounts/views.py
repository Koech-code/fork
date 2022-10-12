from lib2to3.pgen2 import token
from urllib import response
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from .serializers import RegistrationSerializer, LoginSerializer
from .models import User
import jwt, datetime
from django.conf import settings

# My accounts views

class RegisterView(APIView):
    def post(self, request):
        serializers = RegistrationSerializer(data=request.data)

        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return Response(serializers.data,
            status=status.HTTP_201_CREATED)
        else:
            return Response(serializers.errors, 
            status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(user=self.request.user)

        if user is None:
            raise AuthenticationFailed('User not found!')
        
        # check if the user passwords match
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id':user.id,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat':datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
        
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt':token
        }
        
        return response

class UserView(APIView):
    '''
    Get an authenticated user
    '''
    def get(self, request):
        # Get the cookie to retrieve the user
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()

        serializer = RegistrationSerializer(user)

        return Response(serializer.data)

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'Successfully logged out!'
        }

        return response