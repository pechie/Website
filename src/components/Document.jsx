import React from "react";
import "./Document.css";

export default function Document() {
  const isMobile = (/Mobi|Android/i.test(navigator.userAgent));
  const resume_element = (isMobile)
    ? <p className="document-mobile">
        Resume not available for viewing on mobile, 
        but you can download it <a href="/Resume_12_31_20.pdf" download>here</a>
      </p>
    : <iframe
        className="document-pdf"
        src="/Resume_01_17_21.pdf"
        title="Resume"
      />;

  return (
    <div className="document-wrapper">
      <div className="document-container">
        <h1>Resume</h1>
        {resume_element}
      </div>
    </div>
  );
}
