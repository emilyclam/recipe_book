import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { LoginContainer, SubTitle, MediumInput, Button, StyledLink } from "@components/ui";

const SignUp = () => {
  const navigate = useNavigate();
  const [signupValue, setSignupValue] = useState({'username': '', 'email': '', 'password': ''});
  
  const signup = () => {
    fetch('http://localhost:8000/api/accounts/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupValue)
    })
      .then((res) => {
        if (!res.ok) {
          setSignupValue({'username': '', 'email': '', 'password': ''});
          // show text about username already being taken
          throw res;
        }
        return res.json();
      })
      .then((data) => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  }
  
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
      />
      <MediumInput
        type="email"
        value={signupValue['email']}
        onChange={(e) => setSignupValue(prev => ({
          ...prev,
          email: e.target.value
        }))}
        placeholder="Email"
      />
      <MediumInput
        type="password"
        value={signupValue['password']}
        onChange={(e) => setSignupValue(prev => ({
          ...prev,
          password: e.target.value
        }))}
        placeholder="Password"
      />
      <Button onClick={signup}>Sign Up</Button>
      or <StyledLink to="/">Login</StyledLink>
    </LoginContainer>
  );
}


export default SignUp;