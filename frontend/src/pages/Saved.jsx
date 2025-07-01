import { useOutletContext } from 'react-router-dom';

import RecipeList from '@components/RecipeList';
import LoadingIcon from "../components/LoadingIcon";
import { SubTitle } from '@components/ui';

const Saved = () => {
  const { savedRecipes } = useOutletContext();
  return (
    <>
    <SubTitle>Saved Recipes</SubTitle>
      { savedRecipes ? <RecipeList recipes={savedRecipes} /> : <LoadingIcon /> }
    </>
  )
};

export default Saved;