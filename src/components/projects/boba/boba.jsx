import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./boba.css";

// Import project screenshots
import bobaPoster from "../../../assets/boba-poster.png";
import bobaWireframe from "../../../assets/boba-wireframe.png";

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
                The Boba Bubble Tea Shop project focuses on creating a premium, visually enticing experience for boba lovers.
                The design utilizes warm, earthy tones combined with high-quality imagery to evoke the comfort and joy of a perfect cup of tea.
              </p>
              <p>
                A core emphasis was placed on the <strong>visual hierarchy</strong> and <strong>branding</strong>, ensuring that the flagship products are front and center,
                accompanied by smooth micro-interactions that make the browsing experience as delightful as the drink itself.
              </p>
            </section>

            <section className="detail-section">
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Vibrant Milk Tea & Specialty Drink Showcase
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Curated HSL Color Palettes (Browns & Creams)
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Clean Navigation & Service Orientation
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  High-Fidelity Product Photography Integration
                </motion.li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>Wireframe vs. Final Design</h3>
              <div className="comparison-display">
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
            </section>

            <section className="detail-section">
              <h3>Final Poster Design</h3>
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
              </div>
              <h4 style={{ marginTop: "20px" }}>Project Status</h4>
              <p className="status-tag">Completed Masterpiece</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Boba;
