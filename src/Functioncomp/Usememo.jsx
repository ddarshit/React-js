import React, { useMemo, useState } from "react";
import Usestate from "./Usestate";

const Usememo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);
  const multicountwithmemo = useMemo(function multicount() {
    console.log("multicount");
    return count * 2;
  },[count]);
  return (
    <>
      <div className="col-6"></div>
      <div className="col-6">
        <h1>usememo</h1>
        <h2>{count}</h2>
        <h2>{item}</h2>
        <h2>{multicountwithmemo}</h2>
        <button onClick={() => setCount(count + 1)}>Count btn</button>
        <button onClick={() => setItem(item * 4)}>Item btn</button>
      </div>
    </>
  );
};

export default Usememo;
