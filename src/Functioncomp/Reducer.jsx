import React from "react";

const Reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "MULTY") {
    return state * 2;
  }
};

export default Reducer;
