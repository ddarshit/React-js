import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
// import Classcompintro from "./Classcompintro";   

class ClasscompMenu extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="Classcompintro">Classcompintro</Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </>
    ) 
  }
}
export default ClasscompMenu;
