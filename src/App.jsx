import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Recipe from './Recipe';

// https://github.com/oldboyxx/jira_clone/blob/master/client/src/App/Routes.jsx
function App() {

  return (
    <>
      <BrowserRouter>
        <Navigate to="/recipe" />
        <Routes>
          <Route path="/recipe" Component={Recipe} />       
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
