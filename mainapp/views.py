from django.shortcuts import render
from rest_framework import response
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class StudentView(APIView):

    def get(self,request,*args,**kwargs):
        students = Student.objects.all().order_by('-percentage')
        student_serialized = StudentSerializer(students,many = True)
        return Response(student_serialized.data, status = status.HTTP_200_OK)

    def post(self,request,*args,**kwargs):
        print("hello")
        print(request.data)
        try:
            serializer = StudentSerializer(data = request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            
            return Response({"Addition Successful"},status = status.HTTP_201_CREATED)

        except Exception as e:
            print(e)
            return Response({"Couldn't perform the addition operation."},status = status.HTTP_500_INTERNAL_SERVER_ERROR)

class GetRollView(APIView):
    def get(self,request,*args,**kwargs):
        roll = request.query_params.get('roll')

        try:
            Student.objects.get(roll_no = roll)
            return Response({"True"},status = status.HTTP_200_OK)
        
        except:
            return Response({"False"},status = status.HTTP_200_OK)
