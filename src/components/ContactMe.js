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
        <CardItem title="Email" text="pechie717@gmail.com" />
        <CardItem title="Phone" text="774-452-2647" />
      </div>
    </div>
  );
}

function CardItem(props) {
  return (
    <div className="contact-card-item">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}
