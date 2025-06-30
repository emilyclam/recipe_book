import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { authFetch } from 'api/authFetch';
import HeaderBar from '@components/HeaderBar';

const Recipe = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const access = localStorage.getItem('access');

  useEffect(() => {
    fetch(`http://localhost:8000/api/saved`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access')}`,
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
      <Outlet context={{ savedRecipes, setSavedRecipes }} />
    </>
  );
};

export default Recipe;