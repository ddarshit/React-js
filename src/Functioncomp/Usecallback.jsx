import React, { useCallback, useState } from "react";
import Callchild from "./Callchild";

const Usecallback = () => {
    const [count , setCount] = useState (2)
    const loadingwithcallback = useCallback (function loading () {

    },[]) 
    
  return (
    <>
      <div className="col-6"></div>
      <div className="col-6">
        <h1>usecallback</h1>
        <Callchild loading={loadingwithcallback}/>
        <h1>{count}</h1>
        <button onClick={() => setCount(count * 4)}>count btn</button>

      </div>
    </>
  );
};

export default Usecallback;
