from rest_framework import serializers

class RecipeSerializer(serializers.Serializer):
	recipe_id = serializers.IntegerField()
	img = serializers.URLField()
	title = serializers.CharField(max_length=150)
	rating = serializers.FloatField()
	time = serializers.CharField(max_length=25)
	servings = serializers.IntegerField()
	url = serializers.URLField()