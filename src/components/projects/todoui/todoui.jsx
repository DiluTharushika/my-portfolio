import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import todoScreenshot from "../../../assets/todoss.png";
import "./todoui.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7 },
});

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
            TO-DO APP UI DESIGN
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
            Eliminating Clutter with Minimalist Productivity Systems
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
            {/* 1. Project Overview */}
            <section className="detail-section">
              <div className="section-number-tag">01</div>
              <h3>Project Overview</h3>
              <p>
                The <strong>To-Do App UI</strong> design focuses on creating a focused environment where
                users can stay organized without the typical digital noise. By featuring color-coded
                task categories and simple interactive check-offs, the goal was to <strong>eliminate
                  clutter</strong> and create a frictionless productivity experience.
              </p>
            </section>

            {/* 2. Problem */}
            <section className="detail-section problem-section">
              <div className="section-number-tag">02</div>
              <h3>Problem</h3>
              <p>Productivity apps often fail because they become sources of stress rather than organization:</p>
              <ul className="highlights-modern-list problem-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="problem-icon">⚠️</span> Cluttered interfaces that overwhelm the user's focus.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="problem-icon">⚠️</span> Lack of visual hierarchy for task prioritization.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="problem-icon">⚠️</span> Complex logging systems that deter frequent use.
                </motion.li>
              </ul>
            </section>

            {/* 3. Solution */}
            <section className="detail-section solution-section">
              <div className="section-number-tag">03</div>
              <h3>Solution</h3>
              <p>The design addresses these issues through radical simplification:</p>
              <ul className="highlights-modern-list solution-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="solution-icon">✅</span> <strong>Color-Coded Categories</strong> – Immediate visual feedback on task types.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="solution-icon">✅</span> <strong>Minimalist Interactions</strong> – Simple check-off system that feels rewarding.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="solution-icon">✅</span> <strong>Clean Dashboard</strong> – A unified view focusing only on the next important step.
                </motion.li>
              </ul>
            </section>

            {/* 4. UI Design Highlights */}
            <section className="detail-section">
              <div className="section-number-tag">04</div>
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Vibrant, color-coded activity rings for daily progress visualization.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Simple and intuitive activity logging system with zero friction.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  Soft shadows and card-based UI for a modern, airy feel.
                </motion.li>
                <motion.li {...fadeUp(0.4)}>
                  Personalized user dashboard showing streaks and consistency.
                </motion.li>
              </ul>
            </section>

            {/* 5. App Screens Included */}
            <section className="detail-section">
              <div className="section-number-tag">05</div>
              <h3>App Screens Included</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>Splash & Authentication Flow.</motion.li>
                <motion.li {...fadeUp(0.2)}>Main Dashboard with metrics and priority view.</motion.li>
                <motion.li {...fadeUp(0.3)}>Quick-Add Activity & Task Logging Screen.</motion.li>
                <motion.li {...fadeUp(0.4)}>User Profile with historical consistency charts.</motion.li>
              </ul>
            </section>

            {/* 6. Design Showcase */}
            <section className="detail-section">
              <div className="section-number-tag">06</div>
              <h3>Design Showcase</h3>
              <div className="single-screenshot-display">
                <motion.div
                  className="design-frame-mobile"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={todoScreenshot} alt="To-Do App UI Showcase" />
                </motion.div>
              </div>
            </section>

            {/* 7. Outcome */}
            <section className="detail-section outcome-section">
              <div className="section-number-tag">07</div>
              <h3>Outcome</h3>
              <p>
                The final UI design creates a motivating environment for habit-building:
              </p>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Improved usability through a radically simplified navigation model.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Enhanced user retention driven by visual progress feedback.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  A consistent and professional productivity tool for the modern worker.
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
              <h4>Design Tools</h4>
              <div className="detail-action-links">
                <a
                  href="https://www.figma.com/design/LveAt386qre69u3266qLq3/Untitled?node-id=0-1&t=a3XwpDijhqtIIjSW-1"
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
                <span>Productivity UX</span>
                <span>Visual Systems</span>
                <span>Interaction Design</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">Completed Concept</p>
            </div>

            <div className="sidebar-card">
              <h4>My Focus</h4>
              <div className="tech-pills">
                <span>Clutter Elimination</span>
                <span>Visual Feedback</span>
                <span>Habit Building</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TodoUI;
