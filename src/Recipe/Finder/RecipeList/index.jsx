import React from "react";
import RecipeCard from "./RecipeCard";
import { List } from "./Styles";

const RecipeList = () => {
  const recipes = [
    {
      img: "https://www.allrecipes.com/thmb/pTGS0SZsSQK85sV_RQE_K6ZfoN4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/26460-quick-and-easy-chicken-noodle-soup-allrecipes-1x1-1-b88125437574471db3e114c40bc6928e.jpg",
      title: "Quick and Easy Chicken Noodle Soup",
      rating: 4.8,
      time: 40,
      servings: 6,
      url: "https://www.allrecipes.com/recipe/26460/quick-and-easy-chicken-noodle-soup/",
    },
    {
      img: "https://www.allrecipes.com/thmb/UCdWKbRI2i58L4nUfaTLoUMB_8w=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/68436-vegan-brownies-DDMFS-009-4x3-14a979b3c3ab4a89a62a29cf8400f67f.jpg",
      title: "Vegan Brownies",
      rating: 4.5,
      time: 55,
      servings: 15,
      url: "https://www.allrecipes.com/recipe/68436/vegan-brownies/",
    },
  ];
  return (
    <List>
      <RecipeCard 
        recipe={recipes[0]}
        index={0}
      />
      <RecipeCard 
        recipe={recipes[1]}
        index={1}
      />
    </List>
  );
};

export default RecipeList;