import React from "react";
import PropTypes from 'prop-types';

import { Card, InfoContainer, ImgContainer, RecipeImg, RecipeTitle, DetailsContainer, RecipeDetail } from "./Styles";

const propTypes = {
  recipe: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

const RecipeCard = ({ recipe, index }) => {
  return (
    <Card href={recipe.url}>
      <ImgContainer>
        <RecipeImg src={recipe.img} />
      </ImgContainer>
      <InfoContainer>
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <DetailsContainer>
          <RecipeDetail>{recipe.rating}🌟</RecipeDetail>
          <RecipeDetail>{recipe.time} mins⏲️</RecipeDetail>
          <RecipeDetail>{recipe.servings}🍽️</RecipeDetail>
        </DetailsContainer>
      </InfoContainer>
    </Card>
  );
};

RecipeCard.propTypes = propTypes;

export default RecipeCard;