import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { font } from "styles";


export const StyledLink = styled(Link)`
  color: black;
  ${font.size(15)}
  ${font.bold}
`;