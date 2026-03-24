import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./boba.css";

// Import project screenshots
import bobaPoster from "../../../assets/boba-poster.png";
import bobaWireframe from "../../../assets/boba-wireframe.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7 },
});

const Boba = () => {
  return (
    <motion.div
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="detail-bg-overlay boba-bg"></div>

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
            BOBA BUBBLE TEA SHOP
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
            Sip the Magic, Love Your Curves
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
                The <strong>Boba Bubble Tea Shop</strong> project focuses on designing an engaging and visually
                appealing homepage that showcases boba products clearly and encourages users to explore the menu.
                The goal was to create a <strong>premium and inviting experience</strong> for boba lovers,
                bridging the gap between brand identity and user interaction.
              </p>
            </section>

            {/* 2. Problem */}
            <section className="detail-section problem-section">
              <div className="section-number-tag">02</div>
              <h3>Problem</h3>
              <p>Through research and audit, the following key challenges were identified:</p>
              <ul className="highlights-modern-list problem-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="problem-icon">⚠️</span> Food and beverage websites often fail to capture user attention quickly.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="problem-icon">⚠️</span> Failure to effectively highlight key/featured products on the homepage.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="problem-icon">⚠️</span> Complex navigation often deters users from exploring the full menu.
                </motion.li>
              </ul>
            </section>

            {/* 3. Solution */}
            <section className="detail-section solution-section">
              <div className="section-number-tag">03</div>
              <h3>Solution</h3>
              <p>My approach focused on a strong first impression and clear visual hierarchy:</p>
              <ul className="highlights-modern-list solution-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="solution-icon">✅</span> <strong>First Impression Design</strong> – High-quality imagery for immediate impact.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="solution-icon">✅</span> <strong>Product Highlighting</strong> – Featured drinks and branding elements are given primary focus.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="solution-icon">✅</span> <strong>Scanning Ease</strong> – Clear layout and visual rhythm for effortless menu discovery.
                </motion.li>
              </ul>
            </section>

            {/* 4. UI Design Highlights */}
            <section className="detail-section">
              <div className="section-number-tag">04</div>
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Vibrant milk tea and specialty drink visuals for product appeal.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Curated brown and cream HSL color palettes for a warm, cozy feel.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  Clean and structured layout prioritizing usability.
                </motion.li>
                <motion.li {...fadeUp(0.4)}>
                  Modern card-based design with soft shadows and refined micro-interactions.
                </motion.li>
              </ul>
            </section>

            {/* 5. Key Sections Designed */}
            <section className="detail-section">
              <div className="section-number-tag">05</div>
              <h3>Key Sections Designed</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>Hero section with branding and flagship featured drinks.</motion.li>
                <motion.li {...fadeUp(0.2)}>Comprehensive Boba menu showcase with filters.</motion.li>
                <motion.li {...fadeUp(0.3)}>About section telling the brand story and values.</motion.li>
                <motion.li {...fadeUp(0.4)}>Professional Footer with essential store info and social links.</motion.li>
              </ul>
            </section>

            {/* 6. Design Showcase */}
            <section className="detail-section">
              <div className="section-number-tag">06</div>
              <h3>Design Showcase</h3>
              
              <div className="comparison-display" style={{ marginBottom: "40px" }}>
                <motion.div
                  className="screenshot-wrapper-v2 design-frame-comparison"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={bobaWireframe} alt="Boba Shop Wireframe to Final Design" />
                  <p className="caption">Wireframe (Before) and Final High-Fidelity Design (After)</p>
                </motion.div>
              </div>

              <div className="single-screenshot-display">
                <motion.div
                  className="screenshot-wrapper-v2 design-frame-poster"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={bobaPoster} alt="Boba Shop Final Poster" />
                </motion.div>
              </div>
            </section>

            {/* 7. Outcome */}
            <section className="detail-section outcome-section">
              <div className="section-number-tag">07</div>
              <h3>Outcome</h3>
              <p>
                The resulting homepage design significantly improves user engagement by presenting products
                clearly and creating an attractive, trustworthy entry point for boba lovers.
              </p>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Higher brand recall through consistent visual storytelling.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Simplified user flow from discovery to product interest.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  A premium aesthetic that positions the brand as a leader in the market.
                </motion.li>
              </ul>
            </section>
          </motion.div>

          {/* Right: Sidebar / Specs */}
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
                  href="https://www.figma.com/design/LjPNOysDjkQgQS9QcjBG6h/Untitled?node-id=0-1&t=a3XwpDijhqtIIjSW-1"
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
                <span>Web Design</span>
                <span>Branding</span>
                <span>Wireframing</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Project Status</h4>
              <p className="status-tag">Completed Masterpiece</p>
            </div>

            <div className="sidebar-card">
              <h4>My Focus Area</h4>
              <div className="tech-pills">
                <span>Visual Hierarchy</span>
                <span>Homepage UX</span>
                <span>Product Showcase</span>
                <span>Asset Manipulation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Boba;
