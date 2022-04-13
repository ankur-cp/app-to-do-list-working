from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet
from .serializers import *
import json
from django.contrib.auth import login, logout, authenticate, get_user
#from rest_framework.authentication import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication


class TaskListViewSet(ModelViewSet):
    #queryset = TaskList.objects.all()
    # authentication_classes = [SessionAuthentication]
    # permission_classes = [IsAuthenticated]
    serializer_class = TaskListSerializer

    def create(self, request, *args, **kwargs):
        print("/////////////////////////1 req data", request.data)
        request.data["creator"] = request.user.username
        print("/////////////////////////1 req data", request.data)
        print("/////////////////////////1 req user", request.user)
        return super().create(request, *args, **kwargs)

    def get_queryset(self):
        print("/////////////////////////2 req user", self.request.user)
        return TaskList.objects.filter(creator=self.request.user.id)          

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ["post"] # limit to post only


def error_on_request(error_msg):
    return JsonResponse({ "error": error_msg }, status=400)

def bad_request():
    return error_on_request("bad request")

@csrf_exempt
def handle_login(request):    
    if request.method != "POST":
        return bad_request()

    try:
        data = json.loads(request.body)
        username = data.get("username")
        password = data.get("password")

        user = authenticate(username=username, password=password)
        if user and user.is_active:
            login(request, user)
            print("//////////////////////////////// after login:", request.user)
            print(request.session)
            return JsonResponse({ "username": user.username }, status=200)
    except Exception as e:
        print(e)
    
    return error_on_request("login failed")

@csrf_exempt
def handle_logout(request):
    if request.method != "POST":
        return bad_request()

    try:
        print(get_user(request))
        print(request.user) 
        print(request.session)
        logout(request)
        return JsonResponse({ "status": "logged out successfully" }, status=200)
    except:
        pass
    
    return error_on_request("login failed")