import React, { useContext } from "react";
import { Firstname, ages } from "./UsecontextHook";

const Compthree = () => {
  const whatever = useContext(Firstname);
  const what = useContext(ages);
  return (
    <>
      <h1>{whatever}</h1>
      <h1>{what}</h1>
    </>
  );
};

export default Compthree;
