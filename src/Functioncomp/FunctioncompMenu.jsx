import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class FunctioncompMenu extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="Functioncompintro">Functioncompintro</Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </>
    ) 
  }
}
export default FunctioncompMenu;
