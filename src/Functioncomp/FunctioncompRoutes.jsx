import React, {Component} from "react";
import { Route, Routes } from "react-router-dom";
import FunctioncompMenu from "./FunctioncompMenu";
import Functioncompintro from "./Functioncompintro";

class FunctioncompRoutes extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<FunctioncompMenu />}>
            <Route path="Functioncompintro" element={<Functioncompintro />} />
          </Route>
        </Routes> 
    )
  }
}
export default FunctioncompRoutes;
