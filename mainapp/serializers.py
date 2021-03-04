from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):
    get_total_marks = serializers.ReadOnlyField()

    class Meta:
        model = Student
        fields = "__all__"