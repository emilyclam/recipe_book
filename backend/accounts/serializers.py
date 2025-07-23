from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  
  class Meta:
    model = User
    fields = ['username', 'email', 'password']

  def create(self, validated_data):
    user = User.objects.create_user(
      username=validated_data['username'],
      email=validated_data.get('email'),
      password=validated_data['password']
    )
    return user

  def update(self, instance, validated_data):
    password = validated_data.pop('password', None)

    for attr, value in validated_data.items():
      setattr(instance, attr, value)
    
    if password:
      instance.set_password(password)
    
    instance.save()
    return instance
