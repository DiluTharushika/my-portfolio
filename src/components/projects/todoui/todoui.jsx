import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./todoui.css";

// Import project screenshot
import todoss from "../../../assets/todoss.png";

const TodoUI = () => {
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
            TODO APP UI
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
            Visual Storytelling for Daily Productivity
          </motion.p>
        </header>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Left: Design Card */}
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
                The Todo App UI project focuses on creating a <strong>minimalist and high-performance 
                interface</strong> for task management. The design logic centers around 
                reducing cognitive load while providing all necessary tools for efficient 
                organization.
              </p>
              <p>
                Every interaction was prototyped in <strong>Figma</strong> to ensure that the 
                transition from screen to screen feels natural and fluid on mobile devices.
              </p>
            </section>

            <section className="detail-section">
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Clean Typography & High Visual Contrast
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Styled Category Badges & Priority Matrices
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Task Status Visual Indicators
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  Optimized Touch Targets for Mobile Interaction
                </motion.li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>Design Showcase</h3>
              <div className="single-screenshot-display">
                <motion.div 
                  className="screenshot-wrapper-v2 design-frame-mobile"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={todoss} alt="Todo UI Design Case" />
                </motion.div>
              </div>
            </section>
          </motion.div>

          {/* Right: Sidebar / Specs */}
          <motion.div 
            className="detail-sidebar"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="sidebar-card">
              <h4>Design Tools</h4>
              <div className="detail-action-links">
                <a 
                  href="https://www.figma.com/design/Jz0IBwM9iBvkCn31umsvNN/Untitled" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-link-btn figma-brand"
                >
                  <FiFigma /> View Figma Canvas
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Meta</h4>
              <p className="role-tag">UI Designer</p>
              <h4>Tech Implementation</h4>
              <div className="tech-pills">
                <span>React Native</span>
                <span>Expo SDK</span>
                <span>Figma Prototyping</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">Completed & Prototyped</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TodoUI;
