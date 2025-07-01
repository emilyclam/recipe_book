import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { font } from "styles";

import { LoginContainer, SubTitle, MediumInput, Button } from "@components/ui";

const Login = () => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState({'username': '', 'password': ''});
  
  const login = () => {
    fetch('http://localhost:8000/api/accounts/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'username': loginValue['username'], 'password': loginValue['password']})
    })
      .then((res) => {
        if (!res.ok) {
          setLoginValue({'username': '', 'password': ''});
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        navigate('/search');
      })
      .catch((err) => console.error(err));
  }
  
  return (
    <LoginContainer>
      <SubTitle>Login</SubTitle>
      <MediumInput
        type="text"
        value={loginValue['username']}
        onChange={(e) => setLoginValue(prev => ({
          ...prev,
          username: e.target.value
        }))}
        placeholder="Username"
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
      />
      <Button onClick={login}>Login</Button>
      or <StyledLink to="/signup">Sign Up</StyledLink>
    </LoginContainer>
  );
}

const StyledLink = styled(Link)`
  color: black;
  ${font.size(15)}
  ${font.bold}
`;

export default Login;