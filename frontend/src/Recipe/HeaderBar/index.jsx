import React from "react";
import { Link } from "react-router";

import { Header, Title, SavedIcon } from './Styles';

const HeaderBar = () => {
 return (
  <Header>
    <Title>Recipe Book</Title>
    <Link to="/saved" style={{display: "flex"}}>
      <SavedIcon src="book-icon.png" alt="bookmark icon" />
    </Link>
  </Header>
 );
};

export default HeaderBar;