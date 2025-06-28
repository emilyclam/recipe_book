import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  right: 40px;
  gap: 20px
`;

export const IconContainer = styled(Link)`
  dispay: flex;
`;

export const NavIcon = styled.img`
  width: 40px;
`;