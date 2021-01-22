import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div className="work-container">
      <h1>Work Experience</h1>
      <div className="job-cards-container">
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
      </div>
      <h1>Projects</h1>
      <div className="project-cards-container">
        <div className="project-card-item">
          <div className="project-card-text">
            <h1>Plant Pod</h1>
            <p>
              This was my Senior project, which I worked on with a group of four other students.
              We decided to build a self-sufficient plant growth pod that could be monitored from
              a mobile application. My responsibilities for this project were creating our back end using NodeJS 
              and multiple AWS services, as well as working on our mobile application in React Native with 
              one of my group members. The AWS Services I used for this project were DynamoDB, Lambda, API Gateway,
              Cloudwatch, S3, and IAM.
            </p>
          </div>
          <div className="project-card-media">
            <img src="/images/plant-pod.gif" alt="Plant Pod" />
          </div>
        </div>
        <div className="project-card-item">
          <div className="project-card-text">
            <h1>Twitter Bot</h1>
            <p>
              Inspired by the account <a href="https://twitter.com/artdecider">@ArtDecider on Twitter</a>, 
              I decided that I wanted to learn how to create my own bot that could reply to tweets on command. 
              I did this by creating a developer account which gave me access to Twitter's API, 
              and then creating a NodeJS project that constantly checks if the account has been mentioned in a tweet,
              which will cause the account to like that tweet and reply with a random message. 
              I then deployed my project to Heroku so that it can run constantly.
              You can view <a href="https://twitter.com/boldandbrashbot">@BoldAndBrashBot on Twitter</a>, 
              or see the source code on <a href="https://github.com/pechie/TwitterBot">my Github</a>.
            </p>
          </div>
          <div className="project-card-media">
            <img src="/images/bold-and-brash-bot.png" alt="Twitter Bot" />
          </div>
        </div>
        <div className="project-card-item">
          <div className="project-card-text">
            <h1>Sir Vive</h1>
            <p>
              In the Winter of 2018, I wanted my own introduction to game development in Unity,
              so I created a one level game titled Sir Vive, which resembles a simple Mario game.
              All of the assets from the game were either created or imported in Unity, and the scripts
              for the objects were written in C#. 
            </p>
          </div>
          <div className="project-card-media">
            <video src="/videos/sir-vive-gameplay.mp4" autoPlay loop muted playsInline/>
          </div>
        </div>
      </div>
    </div>
  );
}
