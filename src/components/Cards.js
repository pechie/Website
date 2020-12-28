import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Some of my skills...</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Travel through the islands of Bali on a private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="/images/img-5.jpg"
              text="Do something else"
              label="Cash"
              path="/services"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="Apply for jobs"
              label="DogeCoin"
              path="/services"
            />
            <CardItem
              src="/images/img-1.jpg"
              text="Deploy this website to Github"
              label="Broke"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
