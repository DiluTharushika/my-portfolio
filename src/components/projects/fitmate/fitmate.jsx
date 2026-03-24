import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./fitmate.css";

// Import project screenshot
import fitmatess from "../../../assets/fitmate.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7 },
});

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
            FitMate – Fitness Tracking App
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
            Empowering Your Fitness Journey Through Intuitive Design
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
                <strong>FitMate</strong> is a mobile fitness tracking application designed to help users monitor
                their daily physical activities, build consistent habits, and stay motivated through
                visually engaging progress indicators. The project was designed end-to-end in Figma,
                from wireframes to high-fidelity prototypes, with a focus on <strong>simplicity,
                motivation, and user engagement</strong>.
              </p>
            </section>

            {/* 2. Problem */}
            <section className="detail-section problem-section">
              <div className="section-number-tag">02</div>
              <h3>Problem</h3>
              <p>Many fitness apps fail to retain users over time. Key pain points identified through research:</p>
              <ul className="highlights-modern-list problem-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="problem-icon">⚠️</span> Users lose motivation quickly without visible, rewarding progress
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="problem-icon">⚠️</span> Interfaces are cluttered and too complex for daily use
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="problem-icon">⚠️</span> Progress tracking is not visually engaging or satisfying
                </motion.li>
              </ul>
            </section>

            {/* 3. Solution */}
            <section className="detail-section solution-section">
              <div className="section-number-tag">03</div>
              <h3>Solution</h3>
              <p>FitMate was designed to directly address these pain points with three core design strategies:</p>
              <ul className="highlights-modern-list solution-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="solution-icon">✅</span> <strong>Visual Activity Rings</strong> – Color-coded rings give instant, satisfying feedback on daily goals
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="solution-icon">✅</span> <strong>7-Day Streak System</strong> – Chart-based habit tracker motivates consistent daily activity
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="solution-icon">✅</span> <strong>Clean, Minimalist UI</strong> – Focused interface reduces cognitive load and speeds up action
                </motion.li>
              </ul>
            </section>

            {/* 4. Design Highlights */}
            <section className="detail-section">
              <div className="section-number-tag">04</div>
              <h3>Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Vibrant, color-coded activity rings for at-a-glance progress insights
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Clean dashboard with strong visual hierarchy for key metrics (steps, calories, hydration)
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  Modern card-based UI with soft shadows and glassmorphism accents
                </motion.li>
                <motion.li {...fadeUp(0.4)}>
                  Simple activity logging with both manual and auto-tracking modes
                </motion.li>
              </ul>
            </section>

            {/* 5. Key Screens */}
            <section className="detail-section">
              <div className="section-number-tag">05</div>
              <h3>Key Screens</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>Splash Screen &amp; Authentication (Sign In / Sign Up)</motion.li>
                <motion.li {...fadeUp(0.2)}>Main Dashboard – Metrics &amp; Activity Rings View</motion.li>
                <motion.li {...fadeUp(0.3)}>Add Activity Screen – Manual &amp; Auto Tracking</motion.li>
                <motion.li {...fadeUp(0.4)}>User Profile &amp; Personalized Goals Dashboard</motion.li>
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
                  <img src={fitmatess} alt="FitMate UI Screens" />
                </motion.div>
              </div>
            </section>

            {/* 7. Outcome */}
            <section className="detail-section outcome-section">
              <div className="section-number-tag">07</div>
              <h3>Outcome</h3>
              <p>
                Although FitMate is a conceptual design project, the following improvements
                were achieved through the design process:
              </p>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Improved usability through streamlined, distraction-free navigation
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Designed for higher engagement and user retention via habit-forming features
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  Delivered a smooth, intuitive mobile experience validated through high-fidelity prototyping
                </motion.li>
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
                <span>Wireframing</span>
                <span>Prototyping</span>
                <span>Mobile Design</span>
              </div>

              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">High-Fidelity Prototype</p>
            </div>

            <div className="sidebar-card">
              <h4>My Role</h4>
              <div className="tech-pills">
                <span>UX Research</span>
                <span>UI Design</span>
                <span>User Flow</span>
                <span>Prototyping</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Fitmate;
