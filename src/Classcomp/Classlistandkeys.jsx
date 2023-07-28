import React from "react";
import { Component } from "react";

class Classlistandkeys extends Component {
  constructor() {
    super();
    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }
  add = () => {
    // console.log("add");
    this.setState ({
        items: [0,1, 2, 3, 4, 5, 6, 7, 8, 9],
        // items: [1, 2, 3, 4, 5, 6, 7, 8, 9,10],
        
    })
  };
  render() {
    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const itemlist = this.state.items.map((item) => <li key={item.toString()}>{item}</li>);

    return (
      <>
        <ul>{itemlist}</ul>
        <button onClick={() => this.add()}>Add-Items</button>
      </>
    );
  }
}

export default Classlistandkeys;
