import { useState } from "react";

import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";
import Intro from "./components/Intro.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TransitionEffect from "./components/TransitionEffect.tsx";
import Navbar from "./components/Navbar.tsx";
import Cons from "./components/Cons.tsx";
import Credential from "./components/Credential.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Cons />,
    children: [
      { path: "", element: <Intro /> },
      { path: "about", element: <Credential /> },
    ],
  },
]);

export default function App() {
  const [curId, setCurId] = useState("#intro");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return <RouterProvider router={router} />;
}
