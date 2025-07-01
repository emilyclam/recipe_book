import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, InfoContainer, ImgContainer, RecipeImg, HeaderContainer,
  RecipeTitle, SaveIcon, DetailsContainer, RecipeDetail } from "./Styles";

const propTypes = {
  recipe: PropTypes.shape({
    recipe_id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
  }).isRequired,
}

const RecipeCard = ({ recipe }) => {
  const { savedRecipes, setSavedRecipes } = useOutletContext();

  const isSaved = (recipe) => {
    const saved = savedRecipes.some(r => r.url === recipe.url)
    return saved
  }

  const saveRecipe = () => {
    if (!isSaved(recipe)) {
      fetch(`http://localhost:8000/api/add`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access')}`,
        },
        body: JSON.stringify(recipe),
      })
        .then((res) => {
          if (res.ok) {
            setSavedRecipes([...savedRecipes, recipe])
          } else {
            throw new Error(`Delete failed with status ${res.status}`);
          }
        })
        .catch((err) => console.error(err))
    } else {
        fetch(`http://localhost:8000/api/delete/${recipe.recipe_id}`, {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
          }
        })
          .then((res) => {
            if (res.ok) {
              setSavedRecipes(savedRecipes => savedRecipes.filter(r => r.recipe_id !== recipe.recipe_id));
            } else {
              throw new Error(`Delete failed with status ${res.status}`);
            }
          })
          .catch((err) => console.error(err))
    }
  }

  return (
    <Card>
      <ImgContainer href={recipe.url} target="_blank">
        <RecipeImg src={recipe.img} />
      </ImgContainer>
      <InfoContainer>
        <HeaderContainer>
          <RecipeTitle href={recipe.url} target="_blank">
            {recipe.title}
          </RecipeTitle>
          <SaveIcon
            src={isSaved(recipe) ? "bookmark-filled.png" : "bookmark-outline.png"}
            alt="bookmark icon"
            onClick={saveRecipe}
          />
        </HeaderContainer>
        <DetailsContainer>
          <RecipeDetail>{recipe.rating}🌟</RecipeDetail>
          <RecipeDetail>{recipe.time} ⏲️</RecipeDetail>
          <RecipeDetail>{recipe.servings}🍽️</RecipeDetail>
        </DetailsContainer>
      </InfoContainer>
    </Card>
  );
};

RecipeCard.propTypes = propTypes;

export default RecipeCard;