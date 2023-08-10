import React from "react";
import { memo } from "react";

function Callchild() {
  return console.log("called");
}

export default memo(Callchild);
