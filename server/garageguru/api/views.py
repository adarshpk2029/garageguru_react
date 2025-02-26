from django.shortcuts import render
from .serializers import CustomerSerializers,ServiceSerializer,UserSerializer
from .models import CustomerCard
from rest_framework.viewsets import ModelViewSet,ViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class UserViewset(ViewSet):
    def create(self,request,*args,**kwargs):
        ser=UserSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(data=ser.data,status=status.HTTP_201_CREATED)
        return Response(data=ser.errors,status=status.HTTP_406_NOT_ACCEPTABLE)


class CustomerModelViewSet(ModelViewSet):
    serializer_class=CustomerSerializers
    queryset=CustomerCard.objects.all()


    @action(methods=["POST"],detail=True)
    def add_service(self,request,*args,**kwargs):
        customer_id=kwargs.get('pk')
        customer_card_object=CustomerCard.objects.get(id=customer_id)
        service_ser=ServiceSerializer(data=request.data,context={"customer":customer_card_object})
        if service_ser.is_valid():
            service_ser.save()
            return Response(data=service_ser.data,status=status.HTTP_201_CREATED) 
        return Response(data=service_ser.data,status=status.HTTP_400_BAD_REQUEST) 