import React from "react";
import { Component } from "react";
import Updatecounter from "./Hoc";

class Hovercounter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   incnumber = () => {
//     this.setState({ count: this.state.count + 2 });
//   };

  render() {
    const {count , incnumber , decnumber} = this.props
    return (
      <>
        <h2>Hovercounter</h2>
        <h3 onMouseOver={incnumber}> + </h3>
        <br />
        <p>{count}</p>
        <br />
        <h3 onMouseOver={decnumber}> - </h3>
      </>
    );
  }
}

export default Updatecounter(Hovercounter);
