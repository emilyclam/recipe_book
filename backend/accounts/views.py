from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from django.utils.timezone import localtime


from .serializers import UserSerializer

@api_view(['POST'])
def signup(request):
	serializer = UserSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PATCH'])
@permission_classes([IsAuthenticated])
def accountDetails(request):
	user = request.user

	if request.method == 'GET':
		formatted_date = localtime(user.date_joined).strftime('%B %d, %Y')
		return JsonResponse({
			'username': user.username,
			'email': user.email,
			'date_joined': formatted_date
		})
	
	elif request.method == 'PATCH':
		serializer = UserSerializer(user, data=request.data, partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response({'detail': 'Profile updated successfully'})
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
