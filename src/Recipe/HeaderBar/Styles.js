import styled from 'styled-components';
import { font } from '../../shared/utils/styles';

export const Header = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 5px;
  ${font.size(50)}
  ${font.bold}
`;