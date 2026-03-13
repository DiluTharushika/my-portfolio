import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import demoVideo from "../../../assets/note.mp4";
import "./noteapp.css";

const NoteApp = () => {
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
          <HiOutlineArrowLeft /> Back to Project Collection
        </Link>

        {/* Hero Section */}
        <header className="detail-hero">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            NOTE SYNC APP
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
            Elegant Note-Taking with Real-time Persistence
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
              <h3>Overview</h3>
              <p>
                Note Sync is a streamlined mobile extension designed for high-efficiency capture. 
                Built with React Native and Expo, the app provides a distraction-free 
                environment for documenting thoughts, task lists, and creative sparks.
              </p>
              <p>
                Leveraging Firebase Firestore, every note is instantly preserved with high 
                integrity, ensuring your digital notebook is always up to date and accessible.
              </p>
            </section>

            <section className="detail-section">
              <h3>Demo Showcase</h3>
              <div className="video-showcase-professional">
                <motion.div 
                  className="video-container-v2 mobile-video-frame"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <video controls className="detail-video-player">
                    <source src={demoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </section>

            <section className="detail-section">
              <h3>Technical Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Optimized CRUD Operations with Instant UI Updates
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Automated Timestamping & Content Versioning
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Robust Real-time Backend via Firebase Firestore
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  Lightweight Mobile Architecture via Expo
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
              <h4>Documentation</h4>
              <div className="detail-action-links">
                <a 
                  href="https://github.com/DiluTharushika/note-app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-link-btn github-dark"
                >
                  <FiGithub /> View on GitHub
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Stats</h4>
              <p className="role-tag">Full-Stack Mobile Dev</p>
              <h4>Status</h4>
              <p className="status-tag">Production Ready</p>
              <h4>Technologies</h4>
              <div className="tech-pills">
                <span>React Native</span>
                <span>Firestore</span>
                <span>Expo SDK</span>
                <span>JavaScript</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NoteApp;
