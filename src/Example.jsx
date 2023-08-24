import React from "react";
import { Link, Outlet } from "react-router-dom";

const Example = () => {
  return (
    <>
      <div className="container-fluid my-2 "></div>
      {/* <h1 className="text-center">Example of class component and function component</h1> */}
      <div className="row mt-1 bg-info bg-opacity-10 bg-gradient">
        <div className="col text-center">
          <h3>
            <Link to="/Example/Classcomp">Class component</Link>
          </h3>
        </div>
        <div className="col text-center">
          <h3>
            <Link to="/Example/Functioncomp">Functional component</Link>
          </h3>
        </div>
        <div className="row my-5">
          <div className="col-md-12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
