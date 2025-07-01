import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderBar from '@components/HeaderBar';
import { BodyContainer } from '@components/ui';

const Recipe = () => {
  const [savedRecipes, setSavedRecipes] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/saved`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setSavedRecipes(data);
      })
      .catch((err) => console.error(err))
  }, []);

  return (
    <>
      <HeaderBar />
      <BodyContainer>
        <Outlet context={{ savedRecipes, setSavedRecipes }} />
      </BodyContainer>
    </>
  );
};

export default Recipe;