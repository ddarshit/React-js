import React from "react";
import { useState } from "react";

const Customcount = () => {
        const [count , setCount] = useState(0)

    return (
        <>
             <button onClick={() => setCount(count + 1)}>{count} : count</button>
        </>
     );
}

export default Customcount;
