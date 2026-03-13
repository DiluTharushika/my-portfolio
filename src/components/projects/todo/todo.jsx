import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import "./todo.css";

// Import project screenshot
import todoss from "../../../assets/todoss.png";

const Todo = () => {
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
            TODO MOBILE APP
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
            Efficient Task Management Powered by React Native & Firebase
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
                The To-Do Mobile Application is a productivity powerhouse designed for the 
                modern user. Built with React Native (Expo), it offers a seamless, high-performance 
                experience that helps users organize their chaotic schedules into clear, 
                actionable tasks.
              </p>
              <p>
                By integrating Firebase, the app ensures that your data is always in sync across 
                all your devices, providing a reliable backbone for your daily productivity.
              </p>
            </section>

            <section className="detail-section">
              <h3>Core Features</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Intuitive Task Operations (CRUD) with Clean UI
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Real-time Synchronization via Firebase
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Categorization, Priority Levels, and Due Dates
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  High-Performance Experience with Expo Workflow
                </motion.li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>Interface Preview</h3>
              <div className="single-screenshot-display">
                <motion.div 
                  className="screenshot-wrapper-v2 mobile-frame"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={todoss} alt="To-Do App Mobile Interface" />
                </motion.div>
              </div>
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
              <h4>Project Code</h4>
              <div className="detail-action-links">
                <a href="https://github.com/DiluTharushika/todo-app" target="_blank" rel="noopener noreferrer" className="action-link-btn github-dark">
                  <FiGithub /> View on GitHub
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Type</h4>
              <p className="role-tag">Mobile Application</p>
              <h4>Status</h4>
              <p className="status-tag">Live / Milestone V1</p>
              <h4>Technologies</h4>
              <div className="tech-pills">
                <span>React Native</span>
                <span>Expo</span>
                <span>Firebase</span>
                <span>JavaScript</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Todo;
