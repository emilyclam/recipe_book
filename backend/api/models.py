from django.db import models

class Recipe(models.Model):
	id = models.IntegerField(unique=True, primary_key=True)
	img = models.URLField("thumbnail image url", max_length=2048)
	title = models.CharField(max_length=150)
	rating = models.DecimalField(max_digits=2, decimal_places=1)
	time = models.CharField(max_length=25)
	servings = models.PositiveIntegerField()
	url = models.URLField(unique=True)

	def __str__(self):
		return self.title