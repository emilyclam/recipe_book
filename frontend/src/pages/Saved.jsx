import { useOutletContext } from 'react-router-dom';

import RecipeList from '@components/RecipeList';
import LoadingIcon from "../components/LoadingIcon";

const Saved = () => {
  const { savedRecipes } = useOutletContext();
  return (
    <>
      { savedRecipes ? <RecipeList recipes={savedRecipes} /> : <LoadingIcon /> }
    </>
  )
};

export default Saved;