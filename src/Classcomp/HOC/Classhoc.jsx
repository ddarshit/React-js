import React from "react";
import { Component } from "react";
import Clickcounter from "./Clickcounter";
import Hovercounter from "./Hovercounter";

class Classhoc extends Component {
  render() {
    return (
      <>
        <div className="mx-5">
          <h2>highr-order-component</h2>
          <Clickcounter/>
          <Hovercounter/>
        </div>
      </>
    );
  }
}

export default Classhoc;
