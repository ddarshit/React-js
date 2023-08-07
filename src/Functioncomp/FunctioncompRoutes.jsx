import React from "react";
import { Route, Routes } from "react-router-dom";
import FunctioncompMenu from "./FunctioncompMenu";
import Functioncompintro from "./Functioncompintro";
import Usestate from "./Usestate";
import Functioncompprops from "./Functioncompprops";
import UseEffect from "./UseEffect";
import LayoutEffect from "./LauoutEffect";

const FunctioncompRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FunctioncompMenu />}>
        <Route path="Functioncompintro" element={<Functioncompintro />} />
        <Route path="Usestate" element={<Usestate />} />
        <Route path="Functioncompprops" element={<Functioncompprops />} />
        <Route path="UseEffect" element={<UseEffect />} />
        <Route path="LayoutEffect" element={<LayoutEffect />} />
      </Route>
    </Routes>
  );
};

export default FunctioncompRoutes;
