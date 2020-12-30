import React from "react";
import "./Cards.css";
import { Scrollbars } from "react-custom-scrollbars";

export default function Cards() {
  return (
    <div className="cards-container">
      <Scrollbars
        className="scrollbar"
        hideTracksWhenNotNeeded="true"
        renderTrackVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: "white",
              right: "0px",
              bottom: "2px",
              top: "2px",
              borderRadius: "3px",
              width: "8px",
            }}
          />
        )}
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              width: "4px",
              borderRadius: "4px",
              top: "2px",
              left: "2px",
              backgroundColor: "#082d3b",
            }}
          />
        )}
      >
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
      </Scrollbars>
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
