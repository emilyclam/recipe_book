import React, { useState } from "react";
import styled from 'styled-components';

import { WideInput, Button, SubTitle } from "@components/ui";
import RecipeList from "@components/RecipeList";
import LoadingIcon from "@components/LoadingIcon";

const Search = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setLoading(true);
    fetch(`http://localhost:8000/api/recipes/search?input=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };  

  return (
    <>
      <SubTitle>Search</SubTitle>
      <Bar>
        <WideInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search a recipe!"
          autoFocus
        />
        <Button onClick={handleSearch}>🔎</Button>
      </Bar>
      { loading && <LoadingIcon /> }
      { recipes && !loading && <RecipeList recipes={recipes} />}
    </>
  );
};

export const Bar = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export default Search;