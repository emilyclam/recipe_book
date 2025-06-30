import styled from 'styled-components';

import { font } from '../shared/utils/styles';

export const LoginContainer = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  `;

export const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 5px;
  ${font.size(40)}
  ${font.bold}
`;

export const Input = styled.input`
  padding: 15px;
  width: 400px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
`;