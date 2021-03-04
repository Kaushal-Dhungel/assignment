from django.urls import path
from .views import *

urlpatterns = [
    path('students/',StudentView.as_view(),name="addstudent"),
    path('rollview/',GetRollView.as_view(),name="rollview"),

] 