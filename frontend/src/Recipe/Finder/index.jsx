import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";

const Finder = () => {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch}/>
      <RecipeList />
    </>
  );
};

export default Finder;