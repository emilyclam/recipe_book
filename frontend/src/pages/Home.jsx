import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { authFetch } from 'api/authFetch';
import HeaderBar from '@components/HeaderBar';

const Recipe = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await authFetch('api/saved');
        if (!res.ok) throw new Error('Failed to fetch protected data.');
        
        const json = await res.json();
        console.log('fetching saved recipes')
        console.log(json)
        setSavedRecipes(json);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <HeaderBar />
      <Outlet context={{ savedRecipes, setSavedRecipes }} />
    </>
  );
};

export default Recipe;