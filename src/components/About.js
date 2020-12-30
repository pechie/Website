import React from "react";
import "./About.css";
import Cards from "../components/Cards";

export default function About() {
  return (
    <div className="main-container">
      <div className="about-container">
        <h1>About me</h1>
        <p>
          Hi, I'm Nick. Write a few sentences about myself here, I go to
          Northeastern University. After choosing Computer Engineering, I began
          to shift my focus towards the software side of things. After trying
          embedded software, now prepared to do software development full time.
          I'm looking for a job, please hire me. Outside of software
          engineering, some of my hobbies include playing and watching
          basketball, cooking, listening to music, and something else that's
          interesting about me.
        </p>
      </div>
      <div className="skills-container">
        <h1>Skills</h1>
        <Cards />
      </div>
    </div>
  );
}
