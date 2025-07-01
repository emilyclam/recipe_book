from django.urls import path

from . import views

urlpatterns = [
    path("search", views.search, name="search"),
    path("saved", views.get_recipes, name="saved"),
    path("add", views.add_recipe, name="add"),
    path("delete/<str:recipe_id>", views.delete_recipe, name="delete"),
]
