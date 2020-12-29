import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/background-video.mp4" autoPlay loop muted />
      <div className="text-container">
        <h1>Nikolas Pechie</h1>
        <p>Software Engineer - Boston, MA</p>
        <p>Northeastern University Class of 2021</p>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="image-container">
        <img src="/images/headshot_2.jpg" alt="Headshot"></img>
      </div>
    </div>
  );
}
