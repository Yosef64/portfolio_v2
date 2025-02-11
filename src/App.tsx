import { useState } from "react";
import Contact from "./components/Contact.tsx";
import Intro from "./components/Intro.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import Cons from "./components/Cons.tsx";
import Credential from "./components/Credential.tsx";
import Projects from "./components/Project.tsx";
import LoadingEffect from "./components/TransitionEffect.tsx";
import { AnimatePresence } from "framer-motion";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Cons />,
    children: [
      { path: "", element: <Intro /> },
      { path: "about", element: <Credential /> },
      { path: "works", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
