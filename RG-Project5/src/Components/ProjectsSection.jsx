// ProjectsSection.js
import React from "react";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h1 className="titles"> MY PROJECTS </h1>
      <div className="project-box-container">
        <div className="project-box info-box">
        <h1>Calculator App</h1>
          <p>What our instructor wants from us is a simple calculator design.</p>
          <p>Languages Used: HTML, CSS</p>
          <div className="project-links">
            <a
              href="https://github.com/rabiagovez/Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          
        </div>
        
        <div className="project-box info-box">
          <h1>Library Automation</h1>
          <p>An application that allows people to easily find books in the library and reduces time loss in the library.</p>
          <p>Languages ​​Used: Java</p>
          <div className="project-links">
            <a
              href="https://github.com/rabiagovez/L"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-box info-box">
          <h1>Blog Site</h1>
          <p>What our instructor wants from us is a small blog page.</p>
          <p>Languages Used: HTML, CSS and JavaScript</p>
          <div className="project-links">
            <a
              href="https://github.com/rabiagovez/Project-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          
        </div>
        <br></br>
        <div className="project-box info-box">
          <h1>Random Art Gallery</h1>
          <p>A website that generates random images that our instructor asked us to do.</p>
          <p>Languages Used: HTML, CSS and JavaScript</p>
          <div className="project-links">
            <a
              href="https://github.com/rabiagovez/Project-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        
          </div>
        </div>
    </section>
  );
};

export default ProjectsSection;
