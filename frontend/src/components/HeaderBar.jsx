import React from "react";

import { HeaderContainer, Title, NavContainer, NavIcon, IconContainer } from "@components/ui";

const HeaderBar = () => {
 // should the nav be a separate component?
  return (
  <HeaderContainer>
    <Title>Recipe Book</Title>
    <NavContainer>
      <IconContainer to="/saved">
        <NavIcon src="book-icon.png" alt="bookmark icon" />
      </IconContainer>
      <IconContainer to="/search">
        <NavIcon src="search-icon.png" alt="search icon" />
      </IconContainer>
    </NavContainer>
  </HeaderContainer>
 );
};

export default HeaderBar;