import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderBar from "./HeaderBar";

const Recipe = () => {
  const [savedRecipes, setSavedRecipes] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/saved`)
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