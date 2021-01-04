import React from "react";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="contact-main-container">
      <div className="contact-text-container">
        <h1>Contact Me</h1>
        <p>Please feel free to reach out with any questions you may have.</p>
      </div>
      <div className="contact-cards-container">
        <div className="contact-card-item">
          <h1>Email</h1>
          <p>
            Feel free to reach out with any questions you may have, you can
            either use to link below, or send me an email at pechie717@gmail.com
          </p>
          <a href="mailto:pechie717@gmail.com" target="_blank" rel="noreferrer">
            <button className="email-button" type="button">
              Send me an Email
            </button>
          </a>
        </div>
        <div className="contact-card-item">
          <h1>Call me beep me</h1>
        </div>
      </div>
    </div>
  );
}
