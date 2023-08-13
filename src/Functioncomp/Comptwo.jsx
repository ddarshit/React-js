import React, { useContext } from 'react'
import Compthree from './Compthree';
import { Lastname } from './UsecontextHook';


const Comptwo = () => {

    const whatisthis = useContext (Lastname)
    return ( 
        <>
        <h1>{whatisthis}</h1>
        <Compthree/>
        </>
     );
}
 
export default Comptwo;