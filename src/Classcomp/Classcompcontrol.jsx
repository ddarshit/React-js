import React from "react";
import { Component } from "react";

class Classcompcontrol extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  login = (event) => {
    event.preventDefault();
    // console.log("login");
    console.log(this.state.name);
  };

  render() {
    return (
      <>
        <form onSubmit={(event) => this.login(event)} className="mx-5">
          <input
            type="text"
            onChange={(event) => this.setState({ name: event.target.value })}
            value={this.state.name}
          />
          <input type="submit" value="login" />
        </form>
      </>
    );
  }
}

export default Classcompcontrol;
