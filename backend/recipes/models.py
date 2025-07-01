from django.db import models
from django.contrib.auth.models import User

class Recipe(models.Model):
	recipe_id = models.IntegerField()
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='saved_recipes')
	img = models.URLField("thumbnail image url", max_length=2048)
	title = models.CharField(max_length=150)
	rating = models.DecimalField(max_digits=2, decimal_places=1)
	time = models.CharField(max_length=25)
	servings = models.PositiveIntegerField()
	url = models.URLField(unique=True)

	def __str__(self):
		return self.title

	class Meta:
		unique_together = ('recipe_id', 'user')
