import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Recipe from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={Login} />
          <Route path="/" Component={Recipe}>
            <Route path="search" Component={Search} />
            <Route path="saved" Component={Saved} />
          </Route>   
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
