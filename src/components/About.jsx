import React from "react";
import "./About.css";
import Cards from "./Cards";

export default function About() {
  return (
    <div className="main-container">
      <div className="about-container">
        <h1>About me</h1>
        <p>
          Hi, I'm Nick. I am currently a Senior at Northeastern University, and
          I will be graduating this upcoming May with a B.S. in Computer
          Engineering and a minor in Computer Science. Throughout my time at
          college, I completed three internships in software engineering which
          gave me a total of 2 years of working experience. I am seeking full
          time employment upon graduation, ideally doing back end development
          using Javascript or Java, but I am open to any and all opportunities.
          Outside of software engineering, I am an avid basketball and soccer
          fan, and I enjoy music, reading, cooking, and just about anything else
          that will keep me off of Twitter. Please feel free to reach out to
          learn more about me!
        </p>
      </div>
      <div className="skills-container">
        <h1>Skills</h1>
        <Cards />
      </div>
    </div>
  );
}
