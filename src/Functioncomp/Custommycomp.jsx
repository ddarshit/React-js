import React, { useEffect, useState } from 'react'
import Usemymaincostomhook from './Usemymaincostomhook'
import Customcount from './Customcount'

const Custommycomp = () => {
    const [count , setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // },[count])

    Usemymaincostomhook(count)
    // Customcount(count)

    return ( 
        <>
        <h1>my comp</h1>
        <button onClick={() => setCount(count + 1)}>{count} : count</button>
        </>
     );
}
 
export default Custommycomp;