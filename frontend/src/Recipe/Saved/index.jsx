import { useOutletContext } from 'react-router-dom';

import RecipeList from "../../shared/components/RecipeList";
import LoadingIcon from "../../shared/components/LoadingIcon";

const Saved = () => {
  const { savedRecipes } = useOutletContext();
  return (
    <>
      { savedRecipes ? <RecipeList recipes={savedRecipes} /> : <LoadingIcon /> }
    </>
  )
};

export default Saved;