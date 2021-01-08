import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div className="work-container">
      <h1>Work Experience</h1>
      <div className="job-cards-container">
        <div className="job-card-item">
          <div className="job-header-container">
            <img src="/images/bose-logo.png" alt="Bose Logo" />
            <div className="job-header-text-container">
              <h1>Bose Corporation</h1>
              <p>Software Development Co-op</p>
              <p>Framingham, MA</p>
              <p>January - August 2018</p>
            </div>
          </div>
          <div className="job-body-container">
            <ul>
              <li>
                Developed and continuously updated an iOS application using
                Swift to test the different features and firmware versions of a
                product.
              </li>
              <li>
                Integrated iOS Snapshot Test Case into our project, created unit
                tests to ensure that accidental UI changes were automatically
                detected.
              </li>
            </ul>
          </div>
        </div>
        <div className="job-card-item">
          <div className="job-header-container">
            <img src="/images/qinetiq-logo.png" alt="Qinetiq Logo" />
            <div className="job-header-text-container">
              <h1>QinetiQ - NA</h1>
              <p>Robotics Software Development Co-op</p>
              <p>Waltham, MA</p>
              <p>January - June 2019</p>
            </div>
          </div>
          <div className="job-body-container">
            <ul>
              <li>
                Developed code in C++ to translate gravity force measurements
                from three sensors on an autonomous robot to radial coordinates
                to be displayed in a 3D model.
              </li>
              <li>
                Integrated TeamCity builds with Coverity and automated a report
                generation process.
              </li>
              <li>
                Created Python scripts to add different header statements to
                thousands of files within a project depending on the file type.
              </li>
            </ul>
          </div>
        </div>
        <div className="job-card-item">
          <div className="job-header-container">
            <img src="/images/iss-logo.jpg" alt="ISS Logo" />
            <div className="job-header-text-container">
              <h1>Integrity Security Services</h1>
              <p>Software Engineering Co-op</p>
              <p>Boston, MA</p>
              <p>December 2019 - August 2020</p>
            </div>
          </div>
          <div className="job-body-container">
            <ul>
              <li>
                Refactored Javascript code using the NodeJS framework to improve
                performance and readability of our code base.
              </li>
              <li>
                Implemented AWS Simple Queue Service and AWS Lambda, and
                deployed Lambda code to handle messages from multiple FIFO
                queues.
              </li>
              <li>
                Developed a REST API to handle customer requests for
                certificates.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1>Projects</h1>
      <div className="project-cards-container">
        <div className="project-card-item">
          <div className="project-card-text">
            <h1>Project Name</h1>
            <p>
              Say a bunch of things about this project, 
              how long it took, when I did it, what I learned, etc
            </p>
          </div>
          <div className="project-card-gif">
            <img src="/images/aws-logo.png" alt="AWS" />
          </div>
        </div>
        <div className="project-card-item">
          <div className="project-card-text">
            <h1>Project Name</h1>
            <p>
              Say a bunch of things about this project, 
              how long it took, when I did it, what I learned, etc
            </p>
          </div>
          <div className="project-card-gif">
            <img src="/images/aws-logo.png" alt="AWS" />
          </div>
        </div>
        <div className="project-card-item">
          <div className="project-card-text">
            <h1>Project Name</h1>
            <p>
              Say a bunch of things about this project, 
              how long it took, when I did it, what I learned, etc
            </p>
          </div>
          <div className="project-card-gif">
            <img src="/images/aws-logo.png" alt="AWS" />
          </div>
        </div>
      </div>
    </div>
  );
}
