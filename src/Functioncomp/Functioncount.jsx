import React from "react";
import { useState } from "react";
import "./FunctioncompMenu.css";

const Functioncount = () => {
    const num = 0
  const [count , setcount] = useState(num);
  return (
    <>
      <div className="func-intro">
        <button className="margin3" onClick={() => setcount(count + 1)}>add : {count}</button>
      </div>
    </>
  );
};

export default Functioncount;
