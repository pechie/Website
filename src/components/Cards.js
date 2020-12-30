import React from "react";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards-container">
      <CardItem
        src="/images/nodejs-logo.png"
        title="NodeJS"
        text="9 months of experience with NodeJS at Integrity Security Services, 
              and another six months on my senior project"
      />
      <CardItem
        src="/images/react-logo.png"
        title="React"
        text="Self taught in React through following tutorials on YouTuber, 
              culminating in creating this website"
      />
      <CardItem
        src="/images/react-logo.png"
        title="React"
        text="Self taught in React through following tutorials on YouTuber, 
              culminating in creating this website"
      />
      <CardItem
        src="/images/react-logo.png"
        title="React"
        text="Self taught in React through following tutorials on YouTuber, 
              culminating in creating this website"
      />
      <CardItem
        src="/images/nodejs-logo.png"
        title="NodeJS"
        text="9 months of experience with NodeJS at Integrity Security Services, 
              and another six months on my senior project"
      />
      <CardItem
        src="/images/nodejs-logo.png"
        title="NodeJS"
        text="9 months of experience with NodeJS at Integrity Security Services, 
              and another six months on my senior project"
      />
    </div>
  );
}

function CardItem(props) {
  return (
    <div className="card-item">
      <div className="img-container">
        <img src={props.src} alt="Skill logo" />
      </div>
      <div className="txt-container">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
