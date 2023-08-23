import React from "react";
import { useState } from "react";


const Functioncount = () => {
  const num = 0;
  const [count, setcount] = useState(num);
  return (
    <>
      <div className="col-6"></div>
      <div className="col-6">
        <button  onClick={() => setcount(count + 1)}>
          add : {count}
        </button>
      </div>
    </>
  );
};

export default Functioncount;
