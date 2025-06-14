import React from "react";
import { Outlet } from 'react-router-dom';

import HeaderBar from "./HeaderBar";

const Recipe = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};

export default Recipe;