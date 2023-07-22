import React, { children, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Example from "./Example";
import Header from "./Com-comp/Header";

// const Classcomp = React.lazy(() => import("./Classcomp/ClasscompRoutes"));
const Classcompo = lazy(() => import("./Classcomp/ClasscompRoutes"));
const FunctioncompRoutes = lazy(() => import("./Functioncomp/FunctioncompRoutes"));

const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
      </>
    )
  },
  {
    path: "/Home",
    element: (
      <>
        <Header />
        <Home />
      </>
    )
  },
  {
    path: "/About",
    element: (
      <>
        <Header />
        <About />
      </>
    )
  },
  {
    path: "/Contact",
    element: (
      <>
        <Header />
        <Contact />
      </>
    )
  },
  {
    path: "/Example",
    element: (
      <>
        <Header />
        <Example />
      </>
    ),
    children: [
      {
        path: "Classcomp/*",
        element: (
          <Suspense fallback={<h2>Loading..</h2>}>
            <Classcompo />
          </Suspense>
        )
      },
      {
        path: "Functioncomp/*",
        element: (
          <Suspense fallback={<h2>Loading..</h2>}>
            <FunctioncompRoutes />
          </Suspense>
        )
      }
    ]
  }
]);

export default Mainrouter;
