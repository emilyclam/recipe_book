from django.db import models

class Recipe(models.Model):
	img = models.URLField("thumbnail image url")
	title = models.CharField(max_length=150)
	rating = models.DecimalField(max_digits=2, decimal_places=1)
	time = models.PositiveIntegerField("time in minutes")
	servings = models.PositiveIntegerField()
	url = models.URLField()

	def __str__(self):
		return self.title