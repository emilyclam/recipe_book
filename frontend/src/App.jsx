import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Login from './pages/Login';
import Recipe from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Profile from 'pages/Profile';
import SignUp from 'pages/SignUp';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/" Component={Recipe}>
            <Route path="signup" Component={SignUp} />
            <Route path="search" Component={Search} />
            <Route path="saved" Component={Saved} />
            <Route path="profile" Component={Profile} />
          </Route>   
        </Routes>
      </BrowserRouter>
    </Layout>
  );

}

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default App;
