import React from "react";
import { Component } from "react";

class Stateliftingsecond extends Component {
  render() {
    return (
      <>
        <h3>Stateliftingsecond</h3>
        <p>{this.props.name}</p>
        <button onClick={() => this.props.btn("name")}>Hit me</button>
      </>
    );
  }
}

export default Stateliftingsecond;
