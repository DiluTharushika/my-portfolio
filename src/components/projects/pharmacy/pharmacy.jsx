import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./pharmacy.css";

const Pharmacy = () => {
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
            PHARMACY SYSTEM
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
            Full-Stack Management & Prescription Tracking
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
                A comprehensive Pharmacy Management System designed to bridge the gap between users 
                and administrators. The platform enables patients to securely upload 
                prescriptions while providing pharmacists with a robust backend for order 
                processing and pricing.
              </p>
              <p>
                Built with a focus on usability and data integrity, the system leverages 
                Firebase for real-time data persistence and Cloudinary for optimized medical 
                document storage.
              </p>
            </section>

            <section className="detail-section">
              <h3>Technical Features</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Multi-Role Auth (Admin vs User Dashboards)
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Secure Prescription Upload via Cloudinary
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Real-time Order Status & Price Management
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  Dynamic Database Integration with Firebase
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
              <h4>Project Links</h4>
              <div className="detail-action-links">
                <a href="https://lnkd.in/er7beMhr" target="_blank" rel="noopener noreferrer" className="action-link-btn github-link">
                  <FiGithub /> Source Code
                </a>
                <a href="https://www.linkedin.com/posts/dilutharushika_webdevelopment-javascript-firebase-activity-7353720801738530816-IvT2" target="_blank" rel="noopener noreferrer" className="action-link-btn linkedin">
                  <FiLinkedin /> Project Demo
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Type</h4>
              <p className="role-tag">Full Stack Development</p>
              <h4>Tech Stack</h4>
              <div className="tech-pills">
                <span>JavaScript</span>
                <span>Firebase</span>
                <span>Cloudinary</span>
                <span>CSS3</span>
                <span>HTML5</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Status</h4>
              <p className="status-tag">Completed / V1.0</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pharmacy;
