import React, { createContext } from "react";
import Compone from "./Compone";

const Firstname = createContext();
const Lastname = createContext();
const ages = createContext();

const UsecontextHook = () => {
  const name = "Darshit";
  const Lname = "Dayala";
  const age = "22";
  // const obj = {
  //     age : 22,
  //     name : "dd"
  // }
  return (
    <>
      <Firstname.Provider value={name}>
        {/* <Firstname.Provider value={obj.age  +  obj.name}> */}
        <Lastname.Provider value={Lname}>
          <ages.Provider value={age}>
            <Compone />
          </ages.Provider>
        </Lastname.Provider>
      </Firstname.Provider>
    </>
  );
};

export default UsecontextHook;
export { Firstname };
export { Lastname };
export { ages };
