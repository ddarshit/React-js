import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class ClasscompMenu extends Component {
  render() {
    return (
      <>
      <div className="container mt-3 mx-auto"></div>
        <ul className="">
          <li>
            <Link to="Classcompintro">
              <h3>Classcompintro</h3>
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}
export default ClasscompMenu;
