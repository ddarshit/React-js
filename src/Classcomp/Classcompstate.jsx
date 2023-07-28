import React from "react";
import { Component } from "react";

class Classcompstate extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "",
    };
  }
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ name: (this.state.name = "you do Increment") });
    // this.setState({ name: (this.state.name = "Darshit") });
    // console.log("Increment")
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
    this.setState({ name: (this.state.name = "you do Decrement") });
    // console.log("Decrement")
  };

  render() {
    return (
      <>
        <div className="mx-5">
          <h1>{this.state.count}</h1>
          <button onClick={this.Increment} className="mx-3">
            Increment
          </button>
          <button onClick={this.Decrement}>Decrement</button>
        </div>
      </>
    );
  }
}

export default Classcompstate;
