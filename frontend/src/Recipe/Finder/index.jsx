import React, { useState } from "react";

import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import { LoadingContainer, LoadingIcon } from "./Styles"

const Finder = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleSearch = (value) => {
    setLoading(true);
    fetch(`http://localhost:8000/api/search?input=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      { loading &&
        <LoadingContainer>
          <LoadingIcon src="/load-icon.png" alt="loading icon" />
        </LoadingContainer>
      }
      { recipes && !loading && <RecipeList recipes={recipes} />}
    </>
  );
};

export default Finder;