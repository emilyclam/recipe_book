import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { LoginContainer, Title, Input, Button } from "./Styles";

const Login = () => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState({'username': '', 'password': ''});
  
  const handleClick = () => {
    fetch('http://localhost:8000/api/token', {
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
      <Title>Login</Title>
      <Input
        type="text"
        value={loginValue['username']}
        onChange={(e) => setLoginValue(prev => ({
          ...prev,
          username: e.target.value
        }))}
        placeholder="Username"
        autoFocus
      />
      <Input
        type="password"
        value={loginValue['password']}
        onChange={(e) => setLoginValue(prev => ({
          ...prev,
          password: e.target.value
        }))}
        placeholder="Password"
      />
      <Button onClick={handleClick}>Login</Button>
    </LoginContainer>
  );
}

export default Login;