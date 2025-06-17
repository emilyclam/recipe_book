import React from "react";

import { Header, Title, SavedIcon } from './Styles';

const HeaderBar = () => {
 return (
  <Header>
    <Title>Recipe Book</Title>
    <SavedIcon src="book-icon.png" alt="bookmark icon" />
  </Header>
 );
};

export default HeaderBar;