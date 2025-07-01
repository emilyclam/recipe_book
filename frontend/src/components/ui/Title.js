import styled from 'styled-components';

import { font } from '../../styles';

export const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 5px;
  ${font.size(40)}
  ${font.bold}
`;

export const SubTitle = styled.h2`
  text-transform: uppercase;
  font-style: italic;
  ${font.size(30)}
  ${font.bold}
`;