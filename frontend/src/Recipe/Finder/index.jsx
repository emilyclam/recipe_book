import React, { useState } from "react";

import SearchBar from "./SearchBar";
import RecipeList from "../../shared/components/RecipeList";
import LoadingIcon from "../../shared/components/LoadingIcon";

const Finder = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

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
      { loading && <LoadingIcon /> }
      { recipes && !loading && <RecipeList recipes={recipes} />}
    </>
  );
};

export default Finder;