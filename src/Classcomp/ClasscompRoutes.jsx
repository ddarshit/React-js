import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ClasscompMenu from "./ClasscompMenu";
import Classcompintro from "./Classcompintro";
import Classcompprops from "./Classcompprops";
import Classcompstate from "./Classcompstate";
import Classcompstatelife from "./Classcompstatelife";
import Classconditionrendaring from "./Classconditionrendaring";
import Classcompuncontrol from "./Classcompuncontrol";
import Classcompcontrol from "./Classcompcontrol";
import Classlistandkeys from "./Classlistandkeys";
import Stateliftingone from "./Statelifting/Stateliftingone";
// import Stateliftingsecond from "./Statelifting/Stateliftingsecond";

class ClasscompRoutes extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<ClasscompMenu />}>
          <Route path="Classcompintro" element={<Classcompintro />} />
          <Route path="Classcompprops" element={<Classcompprops />} />
          <Route path="Classcompstate" element={<Classcompstate />} />
          <Route path="Classcompstatelife" element={<Classcompstatelife />} />
          <Route
            path="Classconditionrendaring"
            element={<Classconditionrendaring />}
          />
          <Route path="Classcompuncontrol" element={<Classcompuncontrol />} />
          <Route path="Classcompcontrol" element={<Classcompcontrol />} />
          <Route path="Classlistandkeys" element={<Classlistandkeys />} />
          <Route path="Stateliftingone" element={<Stateliftingone />} />
          {/* <Route path="Stateliftingsecond" element={<Stateliftingsecond />} /> */}
        </Route>
      </Routes>
    );
  }
}
export default ClasscompRoutes;
