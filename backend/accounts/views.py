from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .serializers import SignUpSerializer

@api_view(['POST'])
def signup(request):
	serializer = SignUpSerializer(data=request.data)
	if serializer.is_valid():
		user = serializer.save()
		return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)