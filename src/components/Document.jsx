import React from "react";
import "./Document.css";

export default function Document() {
  function isMobile() {
    try { 
      document.createEvent("TouchEvent"); return true; 
    }
    catch(e) { 
      return false; 
    }
  }
  const resume_element = (isMobile)
    ? <p className="document-mobile">
        Resume not available for viewing on mobile, 
        but you can download it <a href="/Resume_12_31_20.pdf" download>here</a>
      </p>
    : <iframe
        className="document-pdf"
        src="/Resume_12_31_20.pdf"
        title="Resume"
      />;

  const transcript_element = (isMobile)
    ? <p className="document-mobile">
        Transcript not available for viewing on mobile, 
        but you can download it <a href="/Academic_Transcript.pdf" download>here</a>
      </p>
    : <iframe
        className="document-pdf"
        src="/Academic_Transcript.pdf"
        title="Transcript"
      />;
  return (
    <div className="document-wrapper">
      <div className="document-container">
        <h1>Resume</h1>
        {resume_element}
      </div>
      <div className="document-container">
        <h1>Transcript</h1>
        {transcript_element}
      </div>
    </div>
  );
}
