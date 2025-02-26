import Contact from "./components/Contact.tsx";
import Intro from "./components/Intro.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cons from "./components/Cons.tsx";
import Credential from "./components/Credential.tsx";
import Projects from "./components/Project.tsx";
import Blog from "./components/Blog.tsx";
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
