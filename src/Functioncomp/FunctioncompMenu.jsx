import React from "react";
import { Link, Outlet } from "react-router-dom";

const FunctioncompMenu = () => {
  return (
    <>
      {/* <div className="col-6"></div> */}
      <div className= "col-3 me-auto offset-8">
        <ul>
          <div>
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
            <li>
              <Link to="Usememo">
                <h3>Usememo</h3>
              </Link>
            </li>
            <li>
              <Link to="Usecallback">
                <h3>Usecallback</h3>
              </Link>
            </li>
            <li>
              <Link to="Usecontextone">
                <h3>Usecontextone</h3>
              </Link>
            </li>
            <li>
              <Link to="UsecontextHook">
                <h3>UsecontextHook</h3>
              </Link>
            </li>
            <li>
              <Link to="Usereducer">
                <h3>Usereducer</h3>
              </Link>
            </li>
            <li>
              <Link to="Useref">
                <h3>Useref</h3>
              </Link>
            </li>
            <li>
              <Link to="Api">
                <h3>Api</h3>
              </Link>
            </li>
            <li>
              <Link to="Apipost">
                <h3>Apipost</h3>
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default FunctioncompMenu;
