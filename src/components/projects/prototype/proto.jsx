import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import demoVideo from "../../../assets/ux design.mp4";
import "./proto.css";

const Proto = () => {
  return (
    <motion.div 
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="detail-bg-overlay"></div>
      
      <div className="detail-container">
        {/* Navigation */}
        <Link to="/#projects" className="back-btn-professional">
          <HiOutlineArrowLeft /> Back to Project UI Designs
        </Link>

        {/* Hero Section */}
        <header className="detail-hero">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            SWIPEFLOW PROTOTYPE
          </motion.h1>
          <motion.div 
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Gesture-Based Interaction & Smooth User Transitions
          </motion.p>
        </header>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Left: Detail Card */}
          <motion.div 
            className="detail-main-card"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <section className="detail-section">
              <h3>Design Concept</h3>
              <p>
                SwipeFlow is an interactive prototype exploration focused on 
                <strong> gesture-driven user experiences</strong>. The project showcases how 
                smooth swipe animations and seamless screen transitions can significantly 
                improve the perceived performance and delight of a mobile application.
              </p>
            </section>

            <section className="detail-section">
              <h3>Video Demonstration</h3>
              <div className="video-showcase-professional">
                <motion.div 
                  className="video-container-v2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <video autoPlay muted loop playsInline className="detail-video-player">
                    <source src={demoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-glass-overlay"></div>
                </motion.div>
              </div>
            </section>

            <section className="detail-section">
              <h3>Interaction Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Smooth Multi-Axis Swipe Transitions
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Natural Gesture Response & Feedback
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  User-Centered Navigation Architecture
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  High-Fidelity Interaction Prototyping
                </motion.li>
              </ul>
            </section>
          </motion.div>

          {/* Right: Sidebar / Meta */}
          <motion.div 
            className="detail-sidebar"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="sidebar-card">
              <h4>Direct Access</h4>
              <div className="detail-action-links">
                <a 
                  href="https://www.figma.com/proto/U0dZKUyBwmct3ZVBxnBG5L/Untitled" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-link-btn figma-brand"
                >
                  <FiFigma /> Run Figma Prototype
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Specifications</h4>
              <p className="role-tag">UI/UX Designer</p>
              <h4>Status</h4>
              <p className="status-tag">Research Prototype</p>
              <h4>Focus Areas</h4>
              <div className="tech-pills">
                <span>Micro-interactions</span>
                <span>User Flow</span>
                <span>Visual Rhythm</span>
                <span>Gesture Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Proto;
