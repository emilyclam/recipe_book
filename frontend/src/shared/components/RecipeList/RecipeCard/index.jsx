import React from "react";
import PropTypes from 'prop-types';

import { Card, InfoContainer, ImgContainer, RecipeImg, RecipeTitle, DetailsContainer, RecipeDetail } from "./Styles";

const propTypes = {
  recipe: PropTypes.shape({
    url: PropTypes.string.isRequired,
    img: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

const RecipeCard = ({ recipe, index }) => {
  return (
    <Card href={recipe.url} target="_blank">
      <ImgContainer>
        <RecipeImg src={recipe.img} />
      </ImgContainer>
      <InfoContainer>
        <RecipeTitle>{recipe.title}</RecipeTitle>
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