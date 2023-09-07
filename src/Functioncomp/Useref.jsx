import React, { useRef } from "react";

const Useref = () => {
  const inputref = useRef(null);

  function inputFunction() {
    // inputref.current.value = "100"
    // inputref.current.focus() 
    inputref.current.style.color = "blue" 
    // inputref.current.value.toUpperCase()
  }
  return (
    <>
      <h1>usref</h1>
      <input type="text" ref={inputref} />
      <button onClick={inputFunction}>btn</button>
    </>
  );
};

export default Useref;
