import React, { useReducer, useState } from "react";
import Reducer from "./Reducer";

const initialstate = 0;

const Usereducer = () => {
  const [state, dispatch] = useReducer(Reducer, initialstate);
  // const [const , setCount] = useState(0)

  // const increment = () => {
  //     setCount (count + 1)
  // }
  // const decrement = () => {
  //     setCount (count - 1)
  // }

  return (
    <>
      <h1>Usereducer</h1>
      <h2>{state}</h2>
      <Reducer/>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button onClick={() => dispatch({ type: "MULTY" })}>decrement</button>
    </>
  );
};

export default Usereducer;
