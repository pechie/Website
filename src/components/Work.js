import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div className="work-container">
      <h1>Work Experience</h1>
      <div className="work-cards-container">
        <div className="work-card-item">
          <h1> item 1 </h1>
        </div>
        <div className="work-card-item">
          <h1> item 2 </h1>
        </div>
        <div className="work-card-item">
          <h1> item 3 </h1>
        </div>
      </div>
      <h1>Projects</h1>
      <div className="work-cards-container">
        <div className="work-card-item">
          <h1> item 1 </h1>
        </div>
        <div className="work-card-item">
          <h1> item 2 </h1>
        </div>
        <div className="work-card-item">
          <h1> item 3 </h1>
        </div>
      </div>
    </div>
  );
}
