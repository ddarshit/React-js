import React from "react";
import { Component } from "react";
import Updatecounter from "./Hoc";

class Clickcounter extends Component {
    // constructor() {
    //     super()
    //     this.state ={
    //         count : 0
    //     }
    //   }
    //   incnumber = () => {
    //     this.setState({count : this.state.count + 2})
    //   }
    
  render() {
    const {count , incnumber , decnumber} = this.props
    return (
      <>
        <h2>Clickcounter</h2>
        <button onClick={incnumber} className="mb-3"> + </button>
        <p>{count}</p>
        <button onClick={decnumber} className="mb-3"> - </button>
      </>
    );
  }
}

export default Updatecounter(Clickcounter);
