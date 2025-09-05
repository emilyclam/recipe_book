import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterText>
      made by <StyledLink href="https://github.com/emilyclam/" target="_blank">emily</StyledLink>
    </FooterText>
  );
};

const FooterText = styled.div`
  text-align: right;
  font-weight: bold;
  font-family: arial;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;