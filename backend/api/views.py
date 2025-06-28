from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

import requests
from bs4 import BeautifulSoup

from .models import Recipe
from .serializers import RecipeSerializer


def index(request):
    return HttpResponse("Hello, world. You're at the api index.")

#TODO: make this code cleaner
@api_view(['GET'])
def search(request):
    inp = request.GET.get("input")
    formatted_input = '+'.join(inp.split())
    url = f"https://allrecipes.com/search?q={formatted_input}"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    cards = soup.find_all('a', class_='card')
    links = [
        card for card in cards
        if card.find('div', class_='mntl-recipe-card-meta')
    ]
    recipe_objs = []
    for link in links[:6]:  # only search first 6
        print(link['href'])
        recipe = {'url': link['href']}
        response2 = requests.get(link['href'])
        soup2 = BeautifulSoup(response2.text, 'html.parser')
        img = soup2.find('div', id='photo-dialog__item_1-0').find('img')
        final_img = requests.get(img['data-src'], allow_redirects=True)
        recipe['img'] = final_img.url
        recipe['title'] = soup2.find('h1', class_='article-heading').get_text(strip=True)
        try:
            recipe['rating'] = float(soup2.find(id='mm-recipes-review-bar__rating_1-0').get_text(strip=True))
        except:
            print('no reviews!')
            recipe['rating'] = 0

        time_label = soup2.find('div', class_='mm-recipes-details__label', string='Total Time:')
        time_value = time_label.find_next_sibling('div', class_='mm-recipes-details__value')
        recipe['time'] = time_value.get_text(strip=True)

        servings_label = soup2.find('div', class_='mm-recipes-details__label', string='Servings:')
        servings_value = servings_label.find_next_sibling('div', class_='mm-recipes-details__value')
        recipe['servings'] = servings_value.get_text(strip=True)
        if ' ' in recipe['servings']:
            recipe['servings'] = recipe['servings'].split()[0]
        # print(recipe)
        
        recipe_objs.append(Recipe(**recipe)) 
    serializer = RecipeSerializer(recipe_objs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_recipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_recipe(request):
    r = request.data
    recipe = Recipe(
        img=r['img'],
        title = r['title'],
        rating = r['rating'],
        time=r['time'],
        servings=r['servings'],
        url=r['url'],
    )
    recipe.save()
    return Response(recipe.id)

# edit as needed (why is there a separate pk param?)
@api_view(['DELETE'])
def delete_recipe(request, pk):
    try:
        recipe = Recipe.objects.get(pk=pk)
        recipe.delete()
        return Response({"message": "Deleted"}, status=status.HTTP_204_NO_CONTENT)
    except Recipe.DoesNotExist:
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)