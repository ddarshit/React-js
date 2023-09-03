import React from 'react'
import { useState,useEffect } from 'react'
import Usemymaincostomhook from './Usemymaincostomhook'

const CustommycompTwo = () => {
    const [count , setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // },[count])
    Usemymaincostomhook(count)
     
    return ( 
        <>
        <h1>my comp:2</h1>
        <button onClick={() => setCount(count + 1)}>{count} : count</button>
        </>
     );
}
 
export default CustommycompTwo;