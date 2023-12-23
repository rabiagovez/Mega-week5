// AboutMe.js
import React from "react";

const AboutMe = () => {
  const openJava = () => {
    
    window.open(
      "https://www.java.com/tr/"
    );
  };

  const openPython = () => {
    
    window.open("https://www.python.org/", "_blank");
  };

  const openHtml = () => {
    
    window.open("https://www.w3schools.com/html/", "_blank");
  };
  const openCss = () => {
    
    window.open("https://www.w3schools.com/css/", "_blank");
  };
  const openSql = () => {
    
    window.open("https://www.w3schools.com/sql/", "_blank");
  };
  const openOffice = () => {
    
    window.open("https://www.microsoft.com/tr-tr/microsoft-365/microsoft-office", "_blank");
  };
  const openJs = () => {
    
    window.open("https://www.w3schools.com/js/", "_blank");
  };
  const openReact = () => {
    
    window.open("https://en.wikipedia.org/wiki/Digital_image_processing", "_blank");
  };
  const openImage = () => {
    
    window.open("https://en.wikipedia.org/wiki/Digital_image_processing", "_blank");
  };
  return (
    <section className="aboutme">
      <h1 className="biggest">WHO AM I?</h1>
      <h2 className="biggest2">Hello, I am Rabia Gövez. I am a 3rd year Computer Engineering student. Since my interest in software has been going on for a long time, I decided to study computer engineering. I was generally interested in the Front-end field. I did some work on HTML, CSS and JavaScript and did my internship in this field. I did some small-scale work with Python and Java. Also, lastly, T.R. I applied for the artificial intelligence training initiated by the Ministry of Industry and Technology. I want to improve myself and progress in this sector. While I was working on all these plans, I saw that the React.js course, which I always wanted to learn about Front-end, was opened in cooperation with Mega Software Academy and Uretken Academy. Thanks to this course, I want to improve my React knowledge and define myself as a full Front-end developer. I am also interested in image processing and office applications.</h2>
      <h3 className="biggest3">MY SKILLS</h3>
      <p className="aboutme-text">
      WHAT IS MEGA? It is a known basic fact that in order to progress and make progress in terms of social life, it is possible with the experience and knowledge that one generation will pass on to the next generation. Today, there is a need to raise individuals who can acquire increasingly complex knowledge and skills and keep up with the rapid change of this information. In this context, the NEW GENERATION EDUCATION PROJECT is a "new" study that will respond to the differing educational expectations of the "new generation", that is, Generation Z and Generation Alpha, who were born and raised in a digital age, as well as realize the cultural transfer of previous generations and strengthen intergenerational communication. Character education of individuals will be carried out in partnership with basic education, secondary education, higher education institutions, non-governmental organizations and professional associations. MEGA Software is a new generation software academy created by MEGA. With this Academy, React.js training is provided and employment is provided. WHAT IS URETKEN ACADEMY? Start Your Career in Digital from Scratch By participating in the URETKEN Academy programs, you can start your career by learning software from scratch or start your own company by learning entrepreneurship.
      </p>
      <div className="buttons">
        <button className="java-button" onClick={openJava}>
          Java
        </button>
        <button className="python-button" onClick={openPython}>
          Python
        </button>
        <button className="html-button" onClick={openHtml}>
          HTML
        </button>
        <button className="css-button" onClick={openCss}>
          CSS
        </button>
        <button className="sql-button" onClick={openSql}>
          Microsoft SQL
        </button>
        <button className="office-button" onClick={openOffice}>
          Microsoft 365
        </button>
        <button className="js-button" onClick={openJs}>
          JavaScript
        </button>
        <button className="react-button" onClick={openReact}>
          React.js
        </button>
        <button className="image-button" onClick={openImage}>
         Image Processing
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
