import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import demoVideo from "../../../assets/ux design.mp4";
import "./proto.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7 },
});

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
            UX Research & Prototyping
          </motion.p>
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
            {/* 1. Project Overview */}
            <section className="detail-section">
              <div className="section-number-tag">01</div>
              <h3>Project Overview</h3>
              <p>
                <strong>SwipeFlow</strong> is an interactive prototype exploration focused on
                <strong> gesture-driven user experiences</strong>. The project showcases how
                smooth swipe animations and seamless screen transitions can significantly
                improve the perceived performance and delight of a mobile application.
              </p>
            </section>

            {/* 2. Problem */}
            <section className="detail-section problem-section">
              <div className="section-number-tag">02</div>
              <h3>Problem</h3>
              <p>Mobile users often face friction with static, rigid navigation systems:</p>
              <ul className="highlights-modern-list problem-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="problem-icon">⚠️</span> Jarring screen transitions that break the user's flow.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="problem-icon">⚠️</span> Lack of tactile, interactive feedback during navigation.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="problem-icon">⚠️</span> Over-reliance on tap-based buttons instead of natural gestures.
                </motion.li>
              </ul>
            </section>

            {/* 3. Solution */}
            <section className="detail-section solution-section">
              <div className="section-number-tag">03</div>
              <h3>Solution</h3>
              <p>The prototype explores a gesture-first approach to mobile interaction:</p>
              <ul className="highlights-modern-list solution-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="solution-icon">✅</span> <strong>Natural Gestures</strong> – Implementation of swiping as a primary navigation method.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="solution-icon">✅</span> <strong>Dynamic Feedback</strong> – Real-time visual response to user movement.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="solution-icon">✅</span> <strong>Smooth Transitions</strong> – Multi-axis animations that connect screens fluidly.
                </motion.li>
              </ul>
            </section>

            {/* 4. UI Design Highlights */}
            <section className="detail-section">
              <div className="section-number-tag">04</div>
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Smooth multi-axis swipe transitions between content cards.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Natural gesture response and tactile feedback loops.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  User-centered navigation architecture based on thumb-reach.
                </motion.li>
                <motion.li {...fadeUp(0.4)}>
                  High-fidelity interaction prototyping using advanced Figma features.
                </motion.li>
              </ul>
            </section>

            {/* 5. Video Demonstration */}
            <section className="detail-section">
              <div className="section-number-tag">05</div>
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

            {/* 6. Key Screens Designed */}
            <section className="detail-section">
              <div className="section-number-tag">06</div>
              <h3>Key Screens Designed</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>Interactive Home Dashboard with animated card stacks.</motion.li>
                <motion.li {...fadeUp(0.2)}>Detailed Analytics View with swipe-to-dismiss gesture.</motion.li>
                <motion.li {...fadeUp(0.3)}>Gesture-controlled side navigation & menu system.</motion.li>
                <motion.li {...fadeUp(0.4)}>Confirmation & Feedback modals for completed actions.</motion.li>
              </ul>
            </section>

            {/* 7. Outcome */}
            <section className="detail-section outcome-section">
              <div className="section-number-tag">07</div>
              <h3>Outcome</h3>
              <p>
                SwipeFlow successfully demonstrates the power of micro-interactions in mobile design:
              </p>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Increased user delight through smooth, organic animations.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Higher perceived performance due to instantaneous visual feedback.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  A more intuitive and ergonomic mobile experience for power users.
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
              <h4>Project Meta</h4>
              <p className="role-tag">UI/UX Designer</p>
              <h4>Tech Implementation</h4>
              <div className="tech-pills">
                <span>Micro-interactions</span>
                <span>User Flow</span>
                <span>Visual Rhythm</span>
                <span>Gesture Design</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">Research Prototype</p>
            </div>

            <div className="sidebar-card">
              <h4>My Focus</h4>
              <div className="tech-pills">
                <span>Motion Design</span>
                <span>Tactile Feedback</span>
                <span>Tactical UX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Proto;
