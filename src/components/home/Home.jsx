import React, { useEffect } from "react";
import "./Home.css";
import dp from "../../assets/dp2222.jpg";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  // Download CV with file check
  const handleDownloadCV = async () => {
    try {
      const response = await fetch("public/DiluTharushika-cv.pdf");
      if (!response.ok) {
        alert("CV file is not available on the site.");
        return;
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "DiluTharushika-CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      // Optional success message
      // alert("CV downloaded successfully!");
    } catch (error) {
      alert("Error downloading the CV.");
    }
  };

  return (
    <div className="home" id="home">
      {/* Left Side Text */}
      <div className="home-text" data-aos="fade-right">
        <h1 data-aos="fade-up" data-aos-delay="100">
          Hi, I'm <span className="highlight">Dilu Tharushika</span>
        </h1>

        {/* Animated Positions */}
        <h2 data-aos="zoom-in" data-aos-delay="300">
          <ReactTyped
            strings={["UI/UX Engineer", "Mobile App Developer", "Web Developer"]}
            typeSpeed={80}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </h2>

        <p data-aos="fade-up" data-aos-delay="500">
          Passionate about creating modern, user-friendly web and mobile
          experiences. I love turning ideas into reality with clean design and
          efficient code.
        </p>

        {/* Download CV Button */}
        <button
          onClick={handleDownloadCV}
          className="btn"
          data-aos="flip-left"
          data-aos-delay="700"
        >
          Download CV
        </button>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/dilutharushika"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/DiluTharushika"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:dilutharushika02@gmail.com"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/DiluTharushika"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Side Photo */}
      <div className="photo" data-aos="fade-left" data-aos-delay="400">
        <img src={dp} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
