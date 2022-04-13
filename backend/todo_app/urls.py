from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("task-lists", TaskListViewSet, "task-list")
router.register("tasks", TaskViewSet, "task")
router.register("users", UserViewSet, "user")

urlpatterns = [
    path("", include(router.urls)),
    path("login/", handle_login),
    path("logout/", handle_logout),
    path('special/', include('rest_framework.urls', namespace='rest_framework'))
]