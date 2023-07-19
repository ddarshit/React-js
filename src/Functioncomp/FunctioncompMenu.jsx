import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import "./FunctioncompMenu.css";

class FunctioncompMenu extends Component {
  render() {
    return (
      <>
        <div className="container mt-3 mx-auto"></div>
        <div className="">
          <ul className="func-intro">
            <div className="margin">
              <li>
                <Link to="Functioncompintro">
                  <h3>Functioncompintro</h3>
                </Link>
              </li>
            </div>
          </ul>
          <Outlet></Outlet>
        </div>
      </>
    );
  }
}
export default FunctioncompMenu;
