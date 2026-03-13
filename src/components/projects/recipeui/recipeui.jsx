import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./recipeui.css";

// Import screenshots
import ss0 from "../../../assets/ss0.jpg";
import ss1 from "../../../assets/ss1.jpg";
import ss2 from "../../../assets/ss2.jpg";
import ss3 from "../../../assets/ss3.jpg";
import ss4 from "../../../assets/ss4.jpg";
import ss5 from "../../../assets/ss5.jpg";
import ss6 from "../../../assets/ss6.jpg";
import ss7 from "../../../assets/ss7.jpg";

const RecipeUI = () => {
  const screenshots = [ss0, ss1, ss2, ss3, ss4, ss5, ss6, ss7];

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
          <HiOutlineArrowLeft /> Back to Project UI Designs
        </Link>

        {/* Hero Section */}
        <header className="detail-hero">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            RECIPE APP UI
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
            Visual Excellence in AI-Driven Culinary Design
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
              <h3>Design Philosophy</h3>
              <p>
                This UI project reimagines cooking through a <strong>modern, high-fidelity lens</strong>. 
                The goal was to blend complex AI functionalities—like real-time recipe 
                generation—into a <strong>minimalist, user-friendly interface</strong> that 
                encourages exploration and culinary creativity.
              </p>
              <p>
                Every element, from the category cards to the ingredient tags, was meticulously 
                crafted in Figma to ensure a cohesive visual language that prioritizes 
                usability and aesthetic delight.
              </p>
            </section>

            <section className="detail-section">
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Clean, Minimalist Layout with Effortless Navigation
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  AI-Focused Interaction Patterns & Feedback Loops
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Sophisticated Category Cards & Recipe Previews
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  High-Fidelity Mobile-First Prototyping
                </motion.li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>Design Showcase</h3>
              <div className="screenshot-gallery-modern design-gallery">
                {screenshots.map((ss, index) => (
                  <motion.div 
                    key={index} 
                    className="screenshot-wrapper-v2 design-frame"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <img src={ss} alt={`Recipe UI Design Case ${index + 1}`} />
                  </motion.div>
                ))}
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
                  href="https://www.figma.com/design/0LOpTDIoacRDu73RdAM757/Untitled" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-link-btn figma-brand"
                >
                  <FiFigma /> Explore in Figma
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Context</h4>
              <p className="role-tag">UI/UX Designer</p>
              <h4>Visual Identity</h4>
              <div className="tech-pills">
                <span>Minimalism</span>
                <span>AI Interactivity</span>
                <span>Type-Safe UX</span>
                <span>Dark/Light Theme</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Release Status</h4>
              <p className="status-tag">Phase 1: Design Complete</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeUI;
