import React, { useContext } from "react";
import { Firstname } from "./UsecontextHook";

const Compthree = () => {
  const whatever = useContext(Firstname);
  return (
    <>
      <h1>{whatever}</h1>
    </>
  );
};

export default Compthree;
