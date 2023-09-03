import React from "react";
import { Route, Routes } from "react-router-dom";
import FunctioncompMenu from "./FunctioncompMenu";
import Functioncompintro from "./Functioncompintro";
import Usestate from "./Usestate";
import Functioncompprops from "./Functioncompprops";
import UseEffect from "./UseEffect";
import LayoutEffect from "./LauoutEffect";
import Usememo from "./Usememo";
import Usecallback from "./Usecallback";
import Usecontextone from "./Usecontextone";
import UsecontextHook from "./UsecontextHook";
import Usereducer from "./Usereducer";
import Useref from "./Useref";
import Api from "./Api";
import Apipost from "./Apipost";
import Custommycomp from "./Custommycomp";
import Customhook from "./Customhook";

const FunctioncompRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FunctioncompMenu />}>
        <Route path="Functioncompintro" element={<Functioncompintro />} />
        <Route path="Usestate" element={<Usestate />} />
        <Route path="Functioncompprops" element={<Functioncompprops />} />
        <Route path="UseEffect" element={<UseEffect />} />
        <Route path="LayoutEffect" element={<LayoutEffect />} />
        <Route path="Usememo" element={<Usememo />} />
        <Route path="Usecallback" element={<Usecallback />} />
        <Route path="Usecontextone" element={<Usecontextone />} />
        <Route path="UsecontextHook" element={<UsecontextHook />} />
        <Route path="Usereducer" element={<Usereducer />} />
        <Route path="Useref" element={<Useref />} />
        <Route path="Api" element={<Api />} />
        <Route path="Apipost" element={<Apipost />} />
        <Route path="Custommycomp" element={<Custommycomp />} />
        <Route path="Customhook" element={<Customhook />} />

      </Route>
    </Routes>
  );
};

export default FunctioncompRoutes;
