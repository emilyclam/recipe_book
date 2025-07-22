import React, { useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { LoginContainer, SubTitle, MediumInput, Button, StyledLink } from "@components/ui";
import api from "@api/api";

const SignUp = () => {
  const navigate = useNavigate();
  const [shaking, setShaking] = useState(false);
  const [signupValue, setSignupValue] = useState({'username': '', 'email': '', 'password': ''});
  
  const signup = () => {
    api.post('/api/accounts/signup', signupValue)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        setSignupValue({'username': '', 'email': '', 'password': ''});
        triggerShake();
      });
  }

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
    }, 2000);
  };
  
  return (
    <LoginContainer>
      <SubTitle>Sign Up</SubTitle>
      <MediumInput
        type="text"
        value={signupValue['username']}
        onChange={(e) => setSignupValue(prev => ({
          ...prev,
          username: e.target.value
        }))}
        placeholder="Username"
        autoFocus
        $shaking={shaking}
      />
      <MediumInput
        type="email"
        value={signupValue['email']}
        onChange={(e) => setSignupValue(prev => ({
          ...prev,
          email: e.target.value
        }))}
        placeholder="Email"
        $shaking={shaking}
      />
      <MediumInput
        type="password"
        value={signupValue['password']}
        onChange={(e) => setSignupValue(prev => ({
          ...prev,
          password: e.target.value
        }))}
        placeholder="Password"
        $shaking={shaking}
      />
      <ErrorText
        style={{ visibility: shaking ? 'visible' : 'hidden' }}>
        Invalid username or email. Please try again.
      </ErrorText>
      <Button onClick={signup}>Sign Up</Button>
      or <StyledLink to="/">Login</StyledLink>
    </LoginContainer>
  );
}

const ErrorText = styled.div`
  color: red;
`;

export default SignUp;