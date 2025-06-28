import React from "react";

import { Header, Title, NavContainer, NavIcon, IconContainer } from './Styles';

const HeaderBar = () => {
 // should the nav be a separate component?
  return (
  <Header>
    <Title>Recipe Book</Title>
    <NavContainer>
      <IconContainer to="/saved">
        <NavIcon src="book-icon.png" alt="bookmark icon" />
      </IconContainer>
      <IconContainer to="/search">
        <NavIcon src="search-icon.png" alt="search icon" />
      </IconContainer>
    </NavContainer>
  </Header>
 );
};

export default HeaderBar;