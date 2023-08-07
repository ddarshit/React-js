import React from "react";
// import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import "./FunctioncompMenu.css";

const FunctioncompMenu = () => {
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
              <li>
                <Link to="Usestate">
                  <h3>Usestate</h3>
                </Link>
              </li>
              <li>
                <Link to="Functioncompprops">
                  <h3>Functioncompprops</h3>
                </Link>
              </li>
              <li>
                <Link to="UseEffect">
                  <h3>UseEffect</h3>
                </Link>
              </li>
              <li>
                <Link to="LayoutEffect">
                  <h3>LayoutEffect</h3>
                </Link>
              </li>
            </div>
          </ul>
          <Outlet></Outlet>
        </div>
      </>
   );
}
 
export default FunctioncompMenu;
