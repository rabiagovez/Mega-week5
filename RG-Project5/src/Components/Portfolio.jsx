// Portfolio.js
import React from "react";
import Menu from "./Menu";
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import "./Portfolio.css";

const Portfolio = () => {
  const skills = ["Reading books", "Listen to music", "Coding", "Watching series", "to cook food"];

  const handleEmailClick = () => {
  
    window.location.href = "mailto:rabiagovez@gmail.com";
  };

  const handleLinkedInClick = () => {
    
    window.open("https://www.linkedin.com/in/rabia-g%C3%B6vez-b23404255/");
  };

  const handleGitHubClick = () => {
    
    window.open("https://github.com/rabiagovez");
  };

  return (
    <div className="portfolio-container">
      <Menu />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection skills={skills} />
      <ContactSection
        handleEmailClick={handleEmailClick}
        handleLinkedInClick={handleLinkedInClick}
        handleGitHubClick={handleGitHubClick}
      />
      <Footer />
    </div>
  );
};

export default Portfolio;
