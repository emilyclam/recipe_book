import React, { useState } from "react";
import styled from 'styled-components';

import { WideInput, Button, SubTitle } from "@components/ui";
import RecipeList from "@components/RecipeList";
import LoadingIcon from "@components/LoadingIcon";
import api from "@api/api";

const Search = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    api.get(`/api/recipes/search?input=${inputValue}`)
      .then((res) => {
        setRecipes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setRecipes(null);
        setError(true);
      });
  };  

  return (
    <>
      <SubTitle>Search</SubTitle>
      <Bar onSubmit={handleSearch}>
        <WideInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search a recipe!"
          autoFocus
        />
        <Button type="submit">🔎</Button>
      </Bar>
      { loading && <LoadingIcon /> }
      { recipes && !loading && <RecipeList recipes={recipes} />}
      { error &&
        <ErrorText>Oops, there was an issue on our end! Try searching for something else.</ErrorText>}
    </>
  );
};

const Bar = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const ErrorText = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export default Search;