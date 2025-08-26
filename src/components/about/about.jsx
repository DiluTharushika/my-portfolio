import React from "react";
import "./about.css";
import dp from "../../assets/dp.jpeg"; // your profile image

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Right side: text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I’m <strong>Dilu Tharushika</strong>,and I have 
            completed a Higher National Diploma in IT with a strong
             academic record. I am a motivated and self-driven learner,
              passionate about technology and development.
               I have skills in mobile application development, 
               web development, and UI design, and I enjoy exploring 
               new technologies to improve my expertise.
          </p>
          <p>
           My goal is to secure an internship where I can apply my skills, gain practical experience, and grow as a professional in the IT industry.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default About;
