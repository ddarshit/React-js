import React from "react";
import { Component } from "react";
import Stateliftingsecond from "./Stateliftingsecond";

class Stateliftingone extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  Clickone = (beta) => {
    console.log("Clickone", beta);
    this.setState({
      teta: beta,
    });
  };
  render() {
    return (
      <>
        <div className="mx-5">
          <h3>Stateliftingone</h3>
          {/* <Stateliftingsecond btn={this.Clickone} name="dhyansh" /> */}
          <Stateliftingsecond btn={this.Clickone} />
        </div>
      </>
    );
  }
}

export default Stateliftingone;
