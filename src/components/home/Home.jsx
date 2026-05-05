import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import homeVideo from "../../assets/homeVideo.mp4";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaBehance, FaBriefcase, FaFolderOpen, FaArrowRight } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
import SpaceRobot from "./SpaceRobot.jsx";

const Home = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const homeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% is visible
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div className="home" id="home" ref={homeRef}>
      {/* Robot with cursor - only visible in Home section */}
      {isHomeVisible && <SpaceRobot />}

      {/* Left Side Text */}
      <div className="home-text" data-aos="fade-right">
        <h1 data-aos="fade-up" data-aos-delay="100">
          Hi, I'm <span className="highlight">Dilu Tharushika</span>
        </h1>

        <h2 data-aos="zoom-in" data-aos-delay="300">
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
              "UI/UX Engineer",
              "Mobile App Developer",
              "Web Developer",
            ]}
            typeSpeed={80}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </h2>

        <h3 className="roles-subtitle" data-aos="fade-up" data-aos-delay="400">
          I build end-to-end web and mobile solutions — from UI/UX to robust backends.
        </h3>

        <p data-aos="fade-up" data-aos-delay="500">
          Passionate about creating modern, user-friendly web and mobile
          experiences. I love turning ideas into reality with clean design,
          scalable architecture, and efficient code.
        </p>

        {/* CTA Buttons */}
        <div className="home-cta-group" data-aos="fade-up" data-aos-delay="700">
          <Link
            smooth
            to="/#contact"
            className="home-btn home-btn--primary"
          >
            <FaBriefcase className="home-btn__icon" />
            <span>Hire Me</span>
          </Link>

          <Link
            smooth
            to="/#projects"
            className="home-btn home-btn--secondary"
          >
            <FaFolderOpen className="home-btn__icon" />
            <span>See My Works</span>
            <FaArrowRight className="home-btn__arrow" />
          </Link>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/dilutharushika"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link-home"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/DiluTharushika"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link-home"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:dilutharushika02@gmail.com"
            className="email-link-home"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/DiluTharushika"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-link-home"
            data-aos="fade-up"
            data-aos-delay="1100"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.behance.net/dilutharushika"
            target="_blank"
            rel="noopener noreferrer"
            className="behance-link-home"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <FaBehance />
          </a>
        </div>
      </div>

      {/* Right Side Photo + Motion Design */}
      <div className="photo" data-aos="fade-left" data-aos-delay="400">

        <video
          src={homeVideo}
          className="home-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default Home;
