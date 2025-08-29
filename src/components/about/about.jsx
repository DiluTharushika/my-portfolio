import React, { useEffect } from "react";
import "./about.css";
import dp from "../../assets/dp.jpeg"; // your profile image
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation speed
      once: false,    // trigger animations each time
      mirror: true,   // animate again on scroll up
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">

        

        {/* Right side: text */}
        <div className="about-text" data-aos="fade-left" data-aos-delay="200">
          <h2 data-aos="fade-up" data-aos-delay="400">About Me</h2>
          <p data-aos="fade-up" data-aos-delay="600">
            Hi, I’m <strong>Dilu Tharushika</strong>, and I have completed a Higher National Diploma in IT with a strong academic record. I am a motivated and self-driven learner, passionate about technology and development. I have skills in mobile application development, web development, and UI design, and I enjoy exploring new technologies to improve my expertise.
          </p>
          <p data-aos="fade-up" data-aos-delay="800">
            My goal is to secure an internship where I can apply my skills, gain practical experience, and grow as a professional in the IT industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
