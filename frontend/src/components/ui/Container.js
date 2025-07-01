import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const LoginContainer = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  right: 40px;
  gap: 20px
`;

export const HeaderContainer = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;
`;

export const BodyContainer = styled.div`
  width: 80%;
  min-width: 1000px;
  margin: auto;
`;