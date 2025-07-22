import styled, { keyframes, css } from 'styled-components';


const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

export const Input = styled.input`
  padding: 15px;
  ${props =>
    props.$shaking &&
    css`
      animation: ${shake} 0.3s ease-in-out 0s 1;
      
    `}
`;

export const MediumInput = styled(Input)`
  width: 400px;
`;

export const WideInput = styled(Input)`
  width: 600px;
`;