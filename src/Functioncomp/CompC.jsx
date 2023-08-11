import React from "react";
import { Kuchbhi } from "./Usecontextone";

const CompC = () => {
  return (
    <>
      <h1>Usecontextone</h1>
      <Kuchbhi.Consumer>
        {(Kuchbhi) => {
            return <h1>Hello {Kuchbhi}</h1>;
        }}
      </Kuchbhi.Consumer>
    </>
  );
};

export default CompC;
