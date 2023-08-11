import React, { createContext } from "react";
import CompA from "./CompA";

const Kuchbhi = createContext()

const Usecontextone = () => {
  return (
    <>
    <Kuchbhi.Provider value="darshit">
      <CompA/>
    </Kuchbhi.Provider>
    </>
  );
};

export default Usecontextone;
export {Kuchbhi}
