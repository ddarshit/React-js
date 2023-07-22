import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ClasscompMenu from "./ClasscompMenu";
import Classcompintro from "./Classcompintro";
import Classcompprops from "./Classcompprops";
import Classcompstate from "./Classcompstate";
import Classcompstatelife from "./Classcompstatelife";
import Classconditionrendaring from "./Classconditionrendaring";

class ClasscompRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<ClasscompMenu />}>
          <Route path="Classcompintro" element={<Classcompintro />} />
          <Route path="Classcompprops" element={<Classcompprops />} />
          <Route path="Classcompstate" element={<Classcompstate />} />
          <Route path="Classcompstatelife" element={<Classcompstatelife />} />
          <Route path="Classconditionrendaring" element={<Classconditionrendaring />} />
        </Route>
      </Routes>
    );
  }
}
export default ClasscompRoutes;
