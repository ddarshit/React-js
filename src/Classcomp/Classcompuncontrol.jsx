import React from "react";
import { Component } from "react";

class Classcompuncontrol extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  login = (event) => {
    event.preventDefault();
    // console.log("login");
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <>
        <form onSubmit={(event) => this.login(event)} className="mx-5">
          <input type="text" ref={this.inputRef} />
          <input type="submit" value="login" />
        </form>
      </>
    );
  }
}

export default Classcompuncontrol;
