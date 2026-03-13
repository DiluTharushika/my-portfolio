import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma, FiLinkedin } from "react-icons/fi";
import "./filmhall.css";

const Filmhall = () => {
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
          <HiOutlineArrowLeft /> Back to Projects
        </Link>

        {/* Hero Section */}
        <header className="detail-hero">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            CINETIME
          </motion.h1>
          <motion.div 
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Your Next Cinema Experience
          </motion.p>
        </header>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Left: Info Card */}
          <motion.div 
            className="detail-main-card"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <section className="detail-section">
              <h3>Overview</h3>
              <p>
                CINETIME is a clean and user-friendly film hall interface designed to revolutionize 
                how users interact with cinema services. It allows for seamless seat booking 
                and snack pre-ordering through a streamlined, high-fidelity experience.
              </p>
              <p>
                Designed entirely in Figma, this concept focuses on delivering a smooth and 
                intuitive movie booking flow with a modern visual language that priorities 
                clarity and user engagement.
              </p>
            </section>

            <section className="detail-section">
              <h3>Key Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Interactive Seat Selection Interface
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Integrated Snack Bar Ordering System
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Seamless, Fully Responsive Mobile UI
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  High-Fidelity Prototyping in Figma
                </motion.li>
              </ul>
            </section>
          </motion.div>

          {/* Right: Sidebar / Links */}
          <motion.div 
            className="detail-sidebar"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="sidebar-card">
              <h4>Project Assets</h4>
              <div className="detail-action-links">
                <a href="https://lnkd.in/er7beMhr" target="_blank" rel="noopener noreferrer" className="action-link-btn figma">
                  <FiFigma /> View Figma Design
                </a>
                <a href="https://www.linkedin.com/posts/dilutharushika_uidesign-uxdesign-figma-activity-7358474687212912640-136c" target="_blank" rel="noopener noreferrer" className="action-link-btn linkedin">
                  <FiLinkedin /> View on LinkedIn
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Role</h4>
              <p className="role-tag">UI/UX Designer</p>
              <h4>Status</h4>
              <p className="status-tag">Completed Concept</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Filmhall;
