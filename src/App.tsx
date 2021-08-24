import "./App.css";
import Home from "src/containers/Home";
import profile from "src/assets/profile-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Anchor from "./components/Anchor";
import About from "./containers/About";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Resume from "./containers/Resume";
import NextButton from "./components/nextButton";
import Projects from "./containers/Projects";
import { useEffect, useRef, useState } from "react";

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const resumeRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const [focused, setFocused] = useState<string>();

  const handleScroll = () => {
    const aboutPos = aboutRef.current?.getBoundingClientRect();
    const resumePos = resumeRef.current?.getBoundingClientRect();
    const projectsPos = projectsRef.current?.getBoundingClientRect();

    if (aboutPos && resumePos && projectsPos) {
      if (
        window.scrollY >
        projectsPos.y - projectsPos.height / 2 + window.scrollY
      ) {
        setFocused("projects");
      } else if (
        window.scrollY >
        resumePos.y - resumePos.height / 2 + window.scrollY
      ) {
        setFocused("resume");
      } else if (
        window.scrollY >
        aboutPos.y - aboutPos.height / 2 + window.scrollY
      ) {
        setFocused("about");
      } else {
        setFocused("home");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <aside>
        <img src={profile} className="profileImage" alt="Profile of myself" />
        <div className="column center">
          <h3 className="navLink">
            <Anchor href="#home" target="_self" focused={focused === "home"}>
              Home
            </Anchor>
          </h3>
          <h3 className="navLink">
            <Anchor href="#about" target="_self" focused={focused === "about"}>
              About
            </Anchor>
          </h3>
          <h3 className="navLink">
            <Anchor
              href="#resume"
              target="_self"
              focused={focused === "resume"}
            >
              Resume
            </Anchor>
          </h3>
          <h3 className="navLink">
            <Anchor
              href="#projects"
              target="_self"
              focused={focused === "projects"}
            >
              Projects
            </Anchor>
          </h3>
          <div className="row center" style={{ marginTop: "5%" }}>
            <Anchor href="https://github.com/Kesmek">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Anchor>
            <Anchor href="https://www.linkedin.com/in/justin-scopelleti-5b023a180/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Anchor>
          </div>
          <div className="row center" style={{ marginTop: "5%" }}>
            <Anchor href="mailto:justin.scopelleti@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </Anchor>
            <Anchor href="tel:+1514-754-1427">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </Anchor>
          </div>
        </div>
      </aside>
      <header id="home" className="section header">
        <Home />
        <NextButton nextSection="about" />
      </header>
      <section id="about" className="section" ref={aboutRef}>
        <About />
      </section>
      <section id="resume" className="section" ref={resumeRef}>
        <Resume />
      </section>
      <section id="projects" className="section" ref={projectsRef}>
        <Projects />
      </section>
    </div>
  );
}

export default App;
