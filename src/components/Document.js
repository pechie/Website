import React from "react";
import "./Document.css";

export default function Document() {
  return (
    <div className="document-wrapper">
      <video src="/videos/background-video.mp4" autoPlay loop muted />
      <div className="document-container">
        <h1>Resume</h1>
        <iframe
          className="document-pdf"
          src="/Resume_12_31_20.pdf"
          title="Resume"
        />
      </div>
      <div className="document-container">
        <h1>Transcript</h1>
        <iframe
          className="document-pdf"
          src="/Academic_Transcript.pdf"
          title="Transcript"
        />
      </div>
    </div>
  );
}
