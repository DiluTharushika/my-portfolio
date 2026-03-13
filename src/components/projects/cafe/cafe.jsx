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
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Café Management
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
            Streamlining Operations with Intuitive UI Design
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
                The Cafe Management System is a comprehensive UI solution designed to bring 
                sleek aesthetics and intuitive user experiences to everyday cafe operations. 
                Focusing on both employee efficiency and business insights.
              </p>
              <p>
                From order tracking to detailed sales analytics, every interface is crafted 
                to ensure managers can focus on what matters most—serving their customers.
              </p>
            </section>

            <section className="detail-section">
              <h3>Key Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Menu Visualization with Elegant Interfaces
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Real-time Reservation and Order Tracking
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Sales Summaries and Analytics Dashboards
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  High-Fidelity Interaction Design
                </motion.li>
              </ul>
            </section>

            <section className="detail-section screenshot-section">
              <h3>Project Screenshots</h3>
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
              <h4>Design Assets</h4>
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
              <h4>Role</h4>
              <p className="role-tag">UI Designer</p>
              <h4>Status</h4>
              <p className="status-tag">Completed Prototype</p>
              <h4>Tech Used</h4>
              <div className="tech-pills">
                <span>Figma</span>
                <span>Prototyping</span>
                <span>UI Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cafe;
