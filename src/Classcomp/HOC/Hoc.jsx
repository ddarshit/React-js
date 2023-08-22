import React from "react";
import { Component } from "react";

const Updatecounter = (Originalcompnent) => {
    class Newcomp extends Component {
      constructor() {
          super()
          this.state = {
              count : 0
          }
        }
        incnumber = () => {
          this.setState({count : this.state.count + 2})
        }
        decnumber = () => {
          this.setState({count : this.state.count - 2})
        }
      
    render() {
      return (
        <>
          <div className="mx-5">
            <Originalcompnent incnumber={this.incnumber} decnumber={this.decnumber} count={this.state.count}/>
          </div>
        </>
      );
    }
  }
  return Newcomp
};

export default Updatecounter;
