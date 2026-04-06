import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./smartwater.css";

// Import project screenshot
import waterAppImg from "../../../assets/waterappimg.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7 },
});

const SmartWater = () => {
  return (
    <motion.div
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="detail-bg-overlay smartwater-bg"></div>

      <div className="detail-container">
        {/* Navigation */}
        <Link to="/#projects" state={{ activeTab: "UI/UX" }} className="back-btn-professional">
          <HiOutlineArrowLeft /> Back to Projects
        </Link>

        {/* Hero Section */}
        <header className="detail-hero">
          <motion.p
            className="case-study-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            UI/UX Case Study
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Smart Water Management App
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
            Empowering households to track, manage, and plan water usage effectively.
          </motion.p>
        </header>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Left: Main Content */}
          <motion.div
            className="detail-main-card"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >

            {/* 1. Project Overview */}
            <section className="detail-section">
              <div className="section-number-tag">01</div>
              <h3>Project Overview</h3>
              <p>
                The <strong>Smart Water Management App</strong> is a mobile application designed to help 
                households in Sri Lanka manage and plan water usage during irregular supply schedules. 
                With water supply limited to certain days and times, people often struggle to track 
                and plan their usage. This app provides a meaningful, real-world solution to bring 
                clarity and convenience to urban households.
              </p>
            </section>

            {/* 2. Problem */}
            <section className="detail-section problem-section">
              <div className="section-number-tag">02</div>
              <h3>Problem Statement</h3>
              <p>Irregular water supply creates uncertainty that leads to wasted resources and unexpected shortages. Key pain points:</p>
              <ul className="highlights-modern-list problem-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="problem-icon">⚠️</span> Users don't know exactly when water will arrive or resume.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="problem-icon">⚠️</span> Lack of visibility into how much water is actually left in their tanks.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="problem-icon">⚠️</span> Inability to properly plan heavy water usage activities.
                </motion.li>
              </ul>
            </section>

            {/* 3. Research Insights */}
            <section className="detail-section">
              <div className="section-number-tag">03</div>
              <h3>Research & Target Users</h3>
              <p>Designed primarily for <strong>urban households in Sri Lanka, families relying on water tanks, and apartment residents</strong>.</p>
              <p>Based on user interviews and observations, the following insights shaped the design:</p>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  "Users check water levels manually by climbing up to the tank."
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  "People frequently forget scheduled refill days leading to missed collections."
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  "There is no centralized way to predict if current water will last until the next supply."
                </motion.li>
              </ul>
            </section>

            {/* 4. Solution */}
            <section className="detail-section solution-section">
              <div className="section-number-tag">04</div>
              <h3>Proposed Solution</h3>
              <p>The app directly tackles the uncertainty by providing real-time tracking and scheduling functionalities:</p>
              <ul className="highlights-modern-list solution-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="solution-icon">✅</span> <strong>Real-Time Tracking</strong> – Keep track of tank water levels and exact remaining liters.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="solution-icon">✅</span> <strong>Arrival Schedules</strong> – Provide up-to-date water arrival schedules.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="solution-icon">✅</span> <strong>Activity Planner</strong> – Allow planning activities (laundry, cooking) based on water availability.
                </motion.li>
              </ul>
            </section>

            {/* 5. Key Features & Design Thinking */}
            <section className="detail-section">
              <div className="section-number-tag">05</div>
              <h3>Key Features</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}><strong>Dashboard:</strong> Large percentage displays for quick readability and remaining capacity.</motion.li>
                <motion.li {...fadeUp(0.2)}><strong>Schedule View:</strong> Water arrival calendar using card designs for easy scanning.</motion.li>
                <motion.li {...fadeUp(0.3)}><strong>Smart Planner:</strong> Manage household chores and activities based on water tank capacity.</motion.li>
                <motion.li {...fadeUp(0.4)}><strong>Profile Setup:</strong> Custom tank capacity and usage habits for accurate predictions.</motion.li>
                <motion.li {...fadeUp(0.5)}><strong>Alerts & Reminders:</strong> Push notifications for refill times and low water warnings.</motion.li>
              </ul>
              
              <h3 style={{ marginTop: '30px' }}>Design Thinking</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.6)}><strong>Color Psychology:</strong> Primary blue tones to represent water, clarity, and trust.</motion.li>
                <motion.li {...fadeUp(0.7)}><strong>Typography:</strong> Large, bold numerical percentages for instant scanning.</motion.li>
                <motion.li {...fadeUp(0.8)}><strong>Layout:</strong> Card-based components to logically separate data chunks.</motion.li>
              </ul>
            </section>

            {/* 6. Design Showcase */}
            <section className="detail-section">
              <div className="section-number-tag">06</div>
              <h3>Design Showcase</h3>
              <div className="single-screenshot-display">
                <motion.div
                  className="screenshot-wrapper-v2 design-frame-mobile"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={waterAppImg} alt="Smart Water Management UI Screens" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600/020813/2C99D8?text=Image+Pending..."; }} />
                </motion.div>
              </div>
            </section>

            {/* 7. Challenges & Future Improvements */}
            <section className="detail-section outcome-section">
              <div className="section-number-tag">07</div>
              <h3>Challenges & Future Vision</h3>
              <p>Designing the app presented interesting challenges, primarily around <strong>designing for different tank sizes</strong> and <strong>making complex data easy to understand</strong> without overwhelming the user.</p>
              
              <h4 style={{ color: '#2C99D8', marginTop: '20px', marginBottom: '15px' }}>Future Improvements</h4>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>Hardware IoT integration (real-time tank sensors vs manual input).</motion.li>
                <motion.li {...fadeUp(0.2)}>Official integration with government water schedule APIs.</motion.li>
                <motion.li {...fadeUp(0.3)}>Usage analytics and AI-driven smart recommendations.</motion.li>
              </ul>
            </section>

          </motion.div>

          {/* Right: Sidebar */}
          <motion.div
            className="detail-sidebar"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="sidebar-card">
              <h4>Design Tools</h4>
              <div className="detail-action-links">
                <a
                  href="https://www.figma.com/design/Lv7HHiKl31Zueo8Q0EdOrA/Untitled?node-id=0-1&t=2G95eaGa2xG1KCI6-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link-btn figma-brand"
                  style={{ width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <FiFigma /> Figma Design
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Meta</h4>
              <p className="role-tag">UI/UX Designer</p>

              <h4>Highlights</h4>
              <div className="tech-pills">
                <span>Real-world Problem</span>
                <span>Mobile Design</span>
                <span>User Research</span>
                <span>Data Visualization</span>
              </div>

              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">High-Fidelity UI</p>
            </div>

            <div className="sidebar-card">
              <h4>My Focus</h4>
              <div className="tech-pills">
                <span>UX Research</span>
                <span>UI Design</span>
                <span>Problem Solving</span>
                <span>Visual Hierarchy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SmartWater;
