import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>References</h2>
            <Link
              to={{ pathname: "https://github.com/pechie/profile" }}
              target="_blank"
            >
              Source code
            </Link>
            <Link
              to={{ pathname: "https://www.youtube.com/watch?v=-MKapbz0GIo" }}
              target="_blank"
            >
              Background video
            </Link>
            <Link
              to={{
                pathname: "https://youtu.be/I2UBjN5ER4s",
              }}
              target="_blank"
            >
              <p>Tutorial that helped create this site</p>
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Nikolas Pechie
            </Link>
          </div>
          <small className="updated-tag">Updated 01/10/2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link email"
              to={{ pathname: "mailto:pechie717@gmail.com" }}
              target="_blank"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </Link>
            <Link
              className="social-icon-link github"
              to={{
                pathname: "https://www.github.com/pechie",
              }}
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to={{
                pathname:
                  "https://www.linkedin.com/in/nikolas-pechie-483712139/",
              }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
