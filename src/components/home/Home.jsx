import React from "react";
import "./Home.css";
import dp from "../../assets/dp2222.jpg";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"; // ✅ icons

const Home = () => {
  return (
    <div className="home" id="home">
      {/* Left Side Text */}
      <div className="home-text">
        <h1>Hi, I'm Dilu Tharushika</h1>

        {/* Animated Positions */}
        <h2>
          <ReactTyped
            strings={[
              "UI/UX Engineer",
              "Mobile App Developer",
              "Web Developer",
            ]}
            typeSpeed={100}
            backDelay={1500}
            loop
          />
        </h2>

        <p>
          Passionate about creating modern, user-friendly web and mobile
          experiences. I love turning ideas into reality with clean design and
          efficient code.
        </p>

        {/* Download CV Button */}
        <a href="/cv.pdf" download className="btn">
          Download CV
        </a>

        {/* ✅ Social Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/dilutharushika" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/DiluTharushika" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:dilutharushika02@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://twitter.com/DiluTharushika" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Side Photo */}
      <div className="photo">
        <img src={dp} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
