import React from "react";
import { Component } from "react";
import Chlidcompforclass from "./Childcompforclass";
import Classcompintro from "./Classcompintro";

class Compositionandinharitance extends Component {
  render() {
    return (
      <>
        <div className="mx-5">
          <h2>Compositionandinharitance</h2>
          <Chlidcompforclass name="darshit">
          {/* <h3>hello</h3>
          <h4>hallo</h4> */}
          <Classcompintro/>
          </Chlidcompforclass>
        </div>
      </>
    );
  }
}

export default Compositionandinharitance;
