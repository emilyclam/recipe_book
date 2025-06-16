from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer

import requests
from bs4 import BeautifulSoup


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
    for link in links[:5]:  # only search first 5
        recipe = {'url': link['href']}
        response2 = requests.get(link['href'])
        soup2 = BeautifulSoup(response2.text, 'html.parser')
        img = soup2.find('div', id='photo-dialog__item_1-0').find('img')
        final_img = requests.get(img['data-src'], allow_redirects=True)
        recipe['img'] = final_img.url
        recipe['title'] = soup2.find('h1', class_='article-heading').get_text(strip=True)
        recipe['rating'] = float(soup2.find(id='mm-recipes-review-bar__rating_1-0').get_text(strip=True))

        time_label = soup2.find('div', class_='mm-recipes-details__label', string='Total Time:')
        time_value = time_label.find_next_sibling('div', class_='mm-recipes-details__value')
        recipe['time'] = time_value.get_text(strip=True)

        servings_label = soup2.find('div', class_='mm-recipes-details__label', string='Servings:')
        servings_value = servings_label.find_next_sibling('div', class_='mm-recipes-details__value')
        recipe['servings'] = servings_value.get_text(strip=True)
        
        recipe_objs.append(Recipe(**recipe)) 
    serializer = RecipeSerializer(recipe_objs, many=True)
    return Response(serializer.data)
