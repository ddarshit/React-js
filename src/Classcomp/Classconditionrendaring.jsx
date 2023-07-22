import React from "react";
import { Component } from "react";

class Classconditionrendaring extends Component {
    
    constructor () {
        super()
        this.state={
            isloging : true
        }
    }


    render() {
          
       return this.state.isloging && <h1>heyy</h1> 


        // return this.state.isloging ?
        // <div><h1>heyy</h1></div> :
        // <div><h1>byy</h1></div>
        
        
        // let msg 

        // if(this.state.isloging){
        //     msg = <><div><h1>heyy</h1></div></>
        // }
        // else {
        //     msg = <><div><h1>byy</h1></div></>
        // }
        // return msg


    // return (
    //   <>
    //     <div className="mx-5">
    //       <h1>hey</h1>
    //       <h1>byy</h1>
    //     </div>
    //   </>
    // );
  }
}

export default Classconditionrendaring;
