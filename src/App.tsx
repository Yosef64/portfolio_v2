import { useState } from "react";

import AboutMe from "./components/AboutMe.tsx";
import Contact from "./components/Contact.tsx";
import Intro from "./components/Intro.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Project.tsx";
import TransitionEffect from "./components/TransitionEffect.tsx";
import Navbar from "./components/Navbar.tsx";
const pages = [
  { href: "#intro", page: "Home" },
  { href: "#about", page: "About" },
  { href: "#skills", page: "Skill" },
  { href: "#project", page: "Project" },
  { href: "#contact", page: "Contact" },
];

export default function App() {
  const [curId, setCurId] = useState("#intro");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <TransitionEffect />
      {/* AppBar */}
      <Navbar />

      {/* Spacer to prevent content overlap */}
      <div className="md:h-16"></div>

      {/* Main Content */}
      <div className="overflow-x-hidden">
        <div id="intro">
          <Intro />
        </div>
        {/* <div id="about">
          <AboutMe />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div> */}
      </div>
    </>
  );
}
