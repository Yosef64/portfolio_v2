import Contact from "./components/Contact.tsx";
import Intro from "./components/Intro.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cons from "./components/Cons.tsx";
import Credential from "./components/Credential.tsx";
import Projects from "./components/Project.tsx";
import Blog from "./components/Blog.tsx";
import { motion } from "framer-motion";
import Offering from "./components/Offereing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cons />,
    children: [
      { path: "", element: <Intro /> },
      { path: "about", element: <Credential /> },
      { path: "works", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "service", element: <Offering /> },
    ],
  },
]);
const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export default function App() {
  return (
    <>
      {/* <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      > */}
        <RouterProvider router={router} />
      {/* </motion.div> */}
    </>
  );
}
