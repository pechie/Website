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
              backgroundColor: "rgba(122, 149, 159, 0.5)",
              right: "0px",
              bottom: "2px",
              top: "2px",
              borderRadius: "3px",
              width: "8px",
              marginTop: "10px",
              marginBottom: "10px",
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
          text="Developed a project using NodeJS for 9 months at Integrity Security Services,
                spent another 6 months with NodeJS for my senior project."
        />
        <CardItem
          src="/images/react-logo.png"
          title="React"
          text="Taught myself React during December of 2020 in order to create this website."
        />
        <CardItem
          src="/images/aws-logo.png"
          title="AWS"
          text="Utilized multiple AWS technologies during my most recent internship, 
                as well as for my senior project. Specifically, Lambda, DynamoDB, 
                SQS, API Gateway, CloudWatch, S3, IAM, and EC2."
        />
        <CardItem
          src="/images/git-logo.png"
          title="Git"
          text="Familiar with git through using both Github and Bitbucket, 
                very comfortable using git to contribute to large projects."
        />
        <CardItem
          src="/images/jira-logo.png"
          title="Jira"
          text="Used Jira for Agile development on two of my three internships, 
                as well as for multiple project based classes."
        />
        <CardItem
          src="/images/jenkins-logo.png"
          title="Jenkins"
          text="Learned the basics of Jenkins while working at Bose, 
                had a more hands-on experience configuring Jenkins tests at ISS."
        />
        <CardItem
          src="/images/teamcity-logo.png"
          title="TeamCity"
          text="Continuously created automated tests in TeamCity while working at Qinetiq, 
                and had sole responsibility of their maintenence."
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
