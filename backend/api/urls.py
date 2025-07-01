from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    path('token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path("", views.index, name="index"),
    path("search", views.search, name="search"),
    path("saved", views.get_recipes, name="saved"),
    path("add", views.add_recipe, name="add"),
    path("delete/<str:recipe_id>", views.delete_recipe, name="delete"),
]
