import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0%   { transform: rotate(0deg); }

  100%  { transform: rotate(360deg); }   /* quick deceleration */
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const LoadingIcon = styled.img`
  width: 200px;
  height: 200px;
  animation: ${spin} 1.5s ease infinite;
  margin: auto;
`;
