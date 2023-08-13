import React, { createContext } from "react";
import Compone from "./Compone";

const Firstname = createContext();
const Lastname = createContext();

const UsecontextHook = () => {
    const name = "Darshit"
    const Lname = "Dayala"
    // const obj = {
    //     age : 22,
    //     name : "dd"
    // }
  return (
    <>
      <Firstname.Provider value={name}>
      {/* <Firstname.Provider value={obj.age  +  obj.name}> */}
        <Lastname.Provider value={Lname}>
          <Compone />
        </Lastname.Provider>
      </Firstname.Provider>
    </>
  );
};

export default UsecontextHook;
export {Firstname}
export {Lastname}
