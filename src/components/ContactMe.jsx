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
            either use to link below, or send me an email at
            pechie717@gmail.com, and I will respond as soon as I can.
          </p>
          <a href="mailto:pechie717@gmail.com" target="_blank" rel="noreferrer">
            <button className="email-button" type="button">
              Send me an Email
            </button>
          </a>
        </div>
        <div className="contact-card-item">
          <h1>Phone</h1>
          <p>
            My cell phone number is below, send me a text at any hour of the
            day, or give me a call/leave a message if I am not able to talk at
            the moment.
          </p>
          <button className="phone-button" type="button">
            <i className="fas fa-phone-square-alt"></i>
            <a href="tel:+1-774-452-2647">(774)-452-2647</a>
          </button>
        </div>
      </div>
    </div>
  );
}
