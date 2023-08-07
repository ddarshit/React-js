import React from 'react'
import { useEffect } from 'react';


const User = (props) => {

    useEffect(() => {
        prompt("how old are you");
        // console.log("called");
      },[props.count]);
    
    return ( 
        <>
        <h1>user data</h1>
        <h2>{props.count}</h2>
        </>
     );
}
 
export default User;