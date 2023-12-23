// ContactSection.js
import React from "react";

const ContactSection = ({ handleEmailClick, handleLinkedInClick, handleGitHubClick }) => {
  return (
    <section className="contact-section">
      <h1 className="titles">Places where you can contact me</h1>
      <div className="contact-buttons">
        <button className="email-button" onClick={handleEmailClick}>
          Email
        </button>
        <button className="linkedin-button" onClick={handleLinkedInClick}>
          LinkedIn
        </button>
        <button className="GitHub-button" onClick={handleGitHubClick}>
          GitHub
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
