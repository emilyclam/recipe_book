import React, { useEffect, useState } from "react";
import RecipeList from "../../shared/components/RecipeList";
import LoadingIcon from "../../shared/components/LoadingIcon";

const Saved = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  // on load: GET recipes from database
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/api/saved`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      { loading && <LoadingIcon /> }
      { recipes && !loading && <RecipeList recipes={recipes} />}
    </>
  )
};

export default Saved;