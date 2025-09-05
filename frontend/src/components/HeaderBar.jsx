import React from "react";
import styled from "styled-components";

import { HeaderContainer, Title, NavContainer, NavIcon, IconContainer } from "@components/ui";

const HeaderBar = () => {
 // should the nav be a separate component?
  return (
  <HeaderContainer>
    <Center>
      <Title>Recipe Book</Title>
    </Center>
    <NavContainer>
      <IconContainer to="/search">
        <NavIcon src="search-icon.png" alt="search icon" />
      </IconContainer>
      <IconContainer to="/saved">
        <NavIcon src="book-icon.png" alt="bookmark icon" />
      </IconContainer>
      <IconContainer to="/profile">
        <NavIcon src="user-icon.jpg" alt="user icon" />
      </IconContainer>
    </NavContainer>
  </HeaderContainer>
 );
};

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export default HeaderBar;