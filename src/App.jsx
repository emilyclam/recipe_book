import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Recipe from './Recipe';
import Finder from './Recipe/Finder';

// https://github.com/oldboyxx/jira_clone/blob/master/client/src/App/Routes.jsx
function App() {

  return (
    <>
      <BrowserRouter>
        <Navigate to="/search" />
        <Routes>
          <Route path="/" Component={Recipe}>
            <Route path="search" Component={Finder} />
          </Route>   
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
