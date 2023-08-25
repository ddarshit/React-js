import React from 'react'
import Apichild from './Apichild';


const Api = () => {
    return ( 
        <>
        {/* application programming interface
        api calls to connect with external service to reciver send data.
        work as a mediator 
        apl connect backend and front-end 
        error code 402,403,404 front-end error 
        api always in json (javascript object natation) formate
        json formate :- one array have multiple object.[,,]
        api hs 3 request

        api get :- get data
        api post :- send data
        api put :- edit data

        get api using fetch after api fetch use promise then() */}

        <h1>API</h1>
        <Apichild/>
        </>
     );
}
 
export default Api;