import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./fitmate.css";

// Import project screenshot
import fitmatess from "../../../assets/fitmate.png";

const Fitmate = () => {
  return (
    <motion.div
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="detail-bg-overlay fitmate-bg"></div>

      <div className="detail-container">
        {/* Navigation */}
        <Link to="/#projects" state={{ activeTab: "UI/UX" }} className="back-btn-professional">
          <HiOutlineArrowLeft /> Back to Projects
        </Link>

        {/* Hero Section */}
        <header className="detail-hero">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            FitMate WORKOUT APP
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
            Empowering Your Fitness Journey Through Design
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
                The FitMate UI/UX project was designed to create an engaging and encouraging environment
                for users to track their daily fitness progress. The emphasis is on a
                <strong> clean and robust</strong> visual hierarchy, utilizing vivid performance metrics
                like steps, calories, and hydration levels.
              </p>
              <p>
                A core feature is the <em>7-Day Streak</em> motivational chart, which helps users
                stay consistent in their fitness goals, with high-fidelity screens prototyped
                in <strong>Figma</strong> for a seamless mobile experience.
              </p>
            </section>

            <section className="detail-section">
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Vibrant, Color-Coded Activity Rings
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Intuitive Activity Logging System
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Comprehensive User Profile Dashboards
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  Soft Shadows and Modern Card Interfaces
                </motion.li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>App Screens Include</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Splash Screen & Authentication (Sign In/Sign Up)
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Main Dashboard Metrics View
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Add Activity Form (Auto & Manual Tracking)
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
                  <img src={fitmatess} alt="FitMate UI Screens" />
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
                  href="https://www.figma.com/design/4z2IwZNSVundppIcjrw14w/Untitled?node-id=0-1&t=4fQvZViJIhMAG17V-1"
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
              <p className="role-tag">UI/UX Designer</p>
              <h4>Tech Implementation</h4>
              <div className="tech-pills">
                <span>Figma</span>
                <span>Mobile Design</span>
                <span>Prototyping</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">High-Fidelity Prototype</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Fitmate;
