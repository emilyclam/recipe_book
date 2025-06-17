import React, { useState } from "react";

import { Bar, Input, Button } from "./Styles";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    onSearch(inputValue);
  }

  return (
    <Bar>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search a recipe!"
        autoFocus
      />
      <Button onClick={handleClick}>🔎</Button>
    </Bar>
  );
};

export default SearchBar;