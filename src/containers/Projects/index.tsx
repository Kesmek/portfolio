import { useState } from "react";
import Puncher from "src/assets/punches_screen.png";
import "./styles.css";

const Projects = () => {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <h1>Projects</h1>
      <h2 style={{ margin: 0 }}>Puncher</h2>
      <div className="projectItem">
        <a
          href="https://github.com/Kesmek/Puncher"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className="overlay"
            style={{
              backgroundColor: hover ? "rgba(0,0,0,0.5)" : "transparent",
            }}
          />
          <img src={Puncher} alt="Puncher App" className="appImage" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
