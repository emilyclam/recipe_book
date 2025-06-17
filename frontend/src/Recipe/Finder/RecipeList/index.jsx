import React from "react";
import PropTypes from 'prop-types';

import RecipeCard from "./RecipeCard";
import { ListContainer, List } from "./Styles";

const propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    img: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
  }))
}

const RecipeList = ({ recipes }) => {

  return (
    <ListContainer>
      <List>
        {recipes.map((recipe, index) => (
          <RecipeCard 
            recipe={recipe}
            index={index}
          />
        ))}
      </List>
    </ListContainer>
  );
};

RecipeList.propTypes = propTypes;

export default RecipeList;