import React from "react";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class ClasscompMenu extends Component {
  render() {
    return (
      <>
        <div className="container mt-3 mx-auto"></div>
        <ul className="">
          <li className="mx-5">
            <Link to="Classcompintro">
              <h3>Classcompintro</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Classcompprops">
              <h3>Classcompprops</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Classcompstate">
              <h3>Classcompstate</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Classcompstatelife">
              <h3>Classcompstatelife</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Classconditionrendaring">
              <h3>Classconditionrendaring</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Classcompuncontrol">
              <h3>Classcompuncontrol</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Classcompcontrol">
              <h3>Classcompcontrol</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Classlistandkeys">
              <h3>Classlistandkeys</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Stateliftingone">
              <h3>Stateliftingone</h3>
            </Link>
          </li>
          {/* <li className="mx-5">
            <Link to="Stateliftingsecond">
              <h3>Stateliftingsecond</h3>
            </Link>
          </li> */}
          <li className="mx-5">
            <Link to="Compositionandinharitance">
              <h3>Compositionandinharitance</h3>
            </Link>
          </li>
          <li className="mx-5">
            <Link to="Classhoc">
              <h3>Classhoc</h3>
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}
export default ClasscompMenu;
