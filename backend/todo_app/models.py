from django.db import models
from django.contrib.auth.models import User

class TaskList(models.Model):
    name = models.CharField(max_length=64)
    description = models.CharField(max_length=255)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="lists", default=1)
    #tasks

    def is_completed(self):
        return all([task.is_completed for task in self.tasks.all()])

    def __str__(self):
        return f"LIST: {self.name}"

class Task(models.Model):
    task = models.CharField(max_length=64)
    list = models.ForeignKey(TaskList, on_delete=models.CASCADE, related_name="tasks")
    due_date = models.DateField()
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return f"TASK: {self.task}"
