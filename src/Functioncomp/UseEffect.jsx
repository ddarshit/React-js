import React, { useState } from "react";
import { useEffect } from "react";
import User from "./User";

const UseEffect = () => {
  const [count, setCount] = useState(0);


//   useEffect(() => {
//     prompt("how old are you");
//     // console.log("called");
//   },[count]);


  return (
    <>
      <div className="func-intro">
        <h1 className="margin2">UseEffect</h1>
        <button onClick={() => setCount (count + 1)}>update</button>
        {/* <h2>{count}</h2> */}
        <User count={count}/>
      </div>
    </>
  );
};

export default UseEffect;
