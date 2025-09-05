import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { font } from "styles";


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  ${font.size(15)}
  ${font.bold}

  &:hover {
    text-decoration: underline;
  }
`;