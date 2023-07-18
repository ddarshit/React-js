import React, { Children,Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Example from "./Example";
import Header from "./Com-comp/Header";

const ClasscompRoutes = React.lazy(()=> import("./Classcomp/ClasscompRoutes"))
const FunctioncompRoutes = React.lazy(()=> import("./Functioncomp/FunctioncompRoutes"))


const  Mainrouter = createBrowserRouter ([
     
    {
        path : "/",
        element : <><Header/></>
    },
    {
        path : "/Home",
        element : <><Header/><Home/></>
    },
    {
        path : "/About",
        element : <><Header/><About/></>
    },
    {
        path : "/Contact",
        element : <><Header/><Contact/></>
    },
    {
        path : "/Example",
        element : <><Header/><Example/></>,
        Children:[
            {
                path: "Classcomp/*",
                element  : <Suspense fallback={<h2>Loading..</h2>}><ClasscompRoutes/></Suspense>
            },
            {
                path: "Functioncomp/*",
                element:<Suspense fallback={<h2>Loading..</h2>}><FunctioncompRoutes/></Suspense>
            }
        ]
    }

]);

export default Mainrouter;