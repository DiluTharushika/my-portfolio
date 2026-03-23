import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaBehance } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand & Catchphrase */}
          <div className="footer-section brand" data-aos="fade-up">
            <h3 className="footer-logo">Dilu <span>Tharushika</span></h3>
            <p className="footer-bio">
              Crafting high-performance web and mobile solutions with a focus on clean code and exceptional user experience.
            </p>
          </div>

          {/* Useful Links */}
          <div className="footer-section links" data-aos="fade-up" data-aos-delay="100">
            <h4>Quick Links</h4>
            <ul>
              <li><Link smooth to="/#home">Home</Link></li>
              <li><Link smooth to="/#about">About</Link></li>
              <li><Link smooth to="/#skills">Skills</Link></li>
              <li><Link smooth to="/#projects">Projects</Link></li>
              <li><Link smooth to="/#certificates">Certificates</Link></li>
              <li><Link smooth to="/#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="footer-section contact-info" data-aos="fade-up" data-aos-delay="200">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <FaEnvelope className="footer-icon" />
              <span>dilutharushika02@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="footer-icon" />
              <span>Sri Lanka</span>
            </div>
            <div className="footer-social-v2">
              <a href="https://www.linkedin.com/in/dilutharushika" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/DiluTharushika" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://twitter.com/DiluTharushika" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.behance.net/dilutharushika" target="_blank" rel="noopener noreferrer">
                <FaBehance />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Dilu Tharushika. Built for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
