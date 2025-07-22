import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import { LoginContainer, SubTitle, MediumInput, Button } from "@components/ui";
import { font } from "styles";
import { login } from "@api/auth";

const Login = () => {
  const navigate = useNavigate();
  const [shaking, setShaking] = useState(false);
  const [loginValue, setLoginValue] = useState({'username': '', 'password': ''});
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(loginValue['username'], loginValue['password']);
    
    if (res.success) {
      navigate('/search');
    } else {
      setLoginValue({'username': '', 'password': ''});
      triggerShake();
      console.error(res.error)
    }
  }

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
    }, 2000);
  };
  
  return (
    <LoginContainer onSubmit={handleLogin}>
      <SubTitle>Login</SubTitle>
      <MediumInput
        type="text"
        value={loginValue['username']}
        onChange={(e) => setLoginValue(prev => ({
          ...prev,
          username: e.target.value
        }))}
        placeholder="Username"
        $shaking={shaking}
        autoFocus
      />
      <MediumInput
        type="password"
        value={loginValue['password']}
        onChange={(e) => setLoginValue(prev => ({
          ...prev,
          password: e.target.value
        }))}
        placeholder="Password"
        $shaking={shaking}
      />
      <ErrorText
        style={{ visibility: shaking ? 'visible' : 'hidden' }}>
        Username or password is incorrect. Please try again.
      </ErrorText>
      <Button type="submit">Login</Button>
      or <StyledLink to="/signup">Sign Up</StyledLink>
    </LoginContainer>
  );
}

const StyledLink = styled(Link)`
  color: black;
  ${font.size(15)}
  ${font.bold}
`;

const ErrorText = styled.p`
  color: red;
`;

export default Login;