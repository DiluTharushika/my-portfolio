import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Dilu Tharushika. All Rights Reserved.</p>
        
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
