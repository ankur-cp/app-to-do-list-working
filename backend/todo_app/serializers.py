from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import *



class TaskListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskList
        fields = ["id", "name", "description", "is_completed", "tasks"]

    is_completed = serializers.SerializerMethodField(read_only=True)
    #tasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    def get_is_completed(self, instance):
        return instance.is_completed()

    def create(self, validated_data):
        try: 
            something = super().create(validated_data)
            print("/////// som:", something)
            return something
        except Exception as e:
            print("/////// err:", e)

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "task", "list", "due_date", "is_completed"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)


