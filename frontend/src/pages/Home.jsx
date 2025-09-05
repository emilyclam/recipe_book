import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderBar from '@components/HeaderBar';
import Footer from '@components/Footer';
import { BodyContainer } from '@components/ui';
import api from '@api/api';

const Recipe = () => {
  const [savedRecipes, setSavedRecipes] = useState(null);

  useEffect(() => {
    api.get('/api/recipes/saved')
      .then((res) => {
        setSavedRecipes(res.data);
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <>
      <HeaderBar />
      <BodyContainer>
        <Outlet context={{ savedRecipes, setSavedRecipes }} />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default Recipe;