import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ClasscompMenu from "./ClasscompMenu";
import Classcompintro from "./Classcompintro";

class ClasscompRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<ClasscompMenu />}>
          <Route path="Classcompintro" element={<Classcompintro />} />
        </Route>
      </Routes>
    );
  }
}
export default ClasscompRoutes;
