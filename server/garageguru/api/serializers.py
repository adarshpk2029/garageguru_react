from rest_framework import serializers
from .models import CustomerCard,Service
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["email","username","password"]
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model=Service
        fields="__all__"
        read_only=["id","customer_card"]
    def create(self, validated_data):
        # return super().create(validated_data)
        customer=self.context.get('customer')
        return Service.objects.create(customercard=customer,**validated_data)
    
class CustomerSerializers(serializers.ModelSerializer):
    services=ServiceSerializer(many=True,read_only=True)
    total_amount=serializers.CharField(read_only=True)
    class Meta:
        model=CustomerCard
        fields="__all__"
        read_only=["id","status","added_date"]