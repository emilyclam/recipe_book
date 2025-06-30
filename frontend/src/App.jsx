import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Recipe from './Recipe';
import Finder from './Recipe/Finder';
import Saved from './Recipe/Saved';

// https://github.com/oldboyxx/jira_clone/blob/master/client/src/App/Routes.jsx
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={Login} />
          <Route path="/" Component={Recipe}>
            <Route path="search" Component={Finder} />
            <Route path="saved" Component={Saved} />
          </Route>   
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
