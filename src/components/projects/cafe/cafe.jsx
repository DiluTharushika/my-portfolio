import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./cafe.css";

// Import project screenshots
import c1 from "../../../assets/c1.png";
import c2 from "../../../assets/c2.png";
import c3 from "../../../assets/c3.png";
import c4 from "../../../assets/c4.png";
import c5 from "../../../assets/c5.png";
import c6 from "../../../assets/c6.png";
import c7 from "../../../assets/c7.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7 },
});

const Cafe = () => {
  const screenshots = [c1, c2, c3, c4, c5, c6, c7];

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
            Café Management System
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
            Streamlining Operations with Intuitive Desktop UI Design
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
            {/* 1. Project Overview */}
            <section className="detail-section">
              <div className="section-number-tag">01</div>
              <h3>Project Overview</h3>
              <p>
                The <strong>Cafe Management System</strong> is a comprehensive desktop UI solution designed to bring
                sleek aesthetics and intuitive user experiences to everyday cafe operations. Focusing on both
                employee efficiency and business insights, this project reimagines how managers interact with
                their daily data.
              </p>
            </section>

            {/* 2. Problem */}
            <section className="detail-section problem-section">
              <div className="section-number-tag">02</div>
              <h3>Problem</h3>
              <p>Many cafe owners struggle with fragmented systems that lead to operational friction:</p>
              <ul className="highlights-modern-list problem-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="problem-icon">⚠️</span> Disconnected order tracking and reservation systems.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="problem-icon">⚠️</span> Lack of real-time visual analytics for quick business decisions.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="problem-icon">⚠️</span> Cluttered interfaces that slow down staff during peak hours.
                </motion.li>
              </ul>
            </section>

            {/* 3. Solution */}
            <section className="detail-section solution-section">
              <div className="section-number-tag">03</div>
              <h3>Solution</h3>
              <p>The design focuses on centralization and visual clarity through three main pillars:</p>
              <ul className="highlights-modern-list solution-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="solution-icon">✅</span> <strong>Centralized Analytics</strong> – Real-time dashboards for sales and inventory tracking.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="solution-icon">✅</span> <strong>Sleek Menu Management</strong> – Visual and interactive menu editing and visualization.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="solution-icon">✅</span> <strong>Intuitive Dashboard</strong> – A unified interface for tracking reservations and live orders.
                </motion.li>
              </ul>
            </section>

            {/* 4. UI Design Highlights */}
            <section className="detail-section">
              <div className="section-number-tag">04</div>
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Elegant menu visualization with high-fidelity product cards.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Real-time synchronization for reservation and order tracking.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  Clean, interactive sales summaries and analytics dashboards.
                </motion.li>
                <motion.li {...fadeUp(0.4)}>
                  Smooth transitions and micro-interactions for a premium feel.
                </motion.li>
              </ul>
            </section>

            {/* 5. Key Sections Designed */}
            <section className="detail-section">
              <div className="section-number-tag">05</div>
              <h3>Key Sections Designed</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>Main Sales Dashboard – Real-time daily performance overview.</motion.li>
                <motion.li {...fadeUp(0.2)}>Order Management System – Live tracking of active cafe orders.</motion.li>
                <motion.li {...fadeUp(0.3)}>Reservation Calendar – Interactive booking & table management.</motion.li>
                <motion.li {...fadeUp(0.4)}>Analytics Deep-dive – Historical sales and trend visualization.</motion.li>
              </ul>
            </section>

            {/* 6. Design Showcase */}
            <section className="detail-section screenshot-section">
              <div className="section-number-tag">06</div>
              <h3>Design Showcase</h3>
              <div className="screenshot-gallery-modern">
                {screenshots.map((src, index) => (
                  <motion.div
                    key={index}
                    className="screenshot-wrapper-v2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                  >
                    <img src={src} alt={`Café UI Detail ${index + 1}`} loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 7. Outcome */}
            <section className="detail-section outcome-section">
              <div className="section-number-tag">07</div>
              <h3>Outcome</h3>
              <p>
                The Cafe Management UI provides a scalable and efficient environment for business owners:
              </p>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Significant reduction in administrative time through automated summaries.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Improved order accuracy with visual tracking and clear status indicators.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  Better business insights through integrated analytics and reporting.
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
              <h4>Design Tools</h4>
              <div className="detail-action-links">
                <a
                  href="https://www.figma.com/design/GkA4LQDvr2JLZn3K4UE58E/Untitled?node-id=27-303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link-btn figma"
                >
                  <FiFigma /> Open Figma Prototype
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Meta</h4>
              <p className="role-tag">UI Designer</p>
              <h4>Tech Implementation</h4>
              <div className="tech-pills">
                <span>Figma</span>
                <span>Prototyping</span>
                <span>UI Design</span>
                <span>Desktop Design</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">Completed Prototype</p>
            </div>

            <div className="sidebar-card">
              <h4>My Focus</h4>
              <div className="tech-pills">
                <span>Dashboard UX</span>
                <span>Data Visualization</span>
                <span>Operational Efficiency</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cafe;
