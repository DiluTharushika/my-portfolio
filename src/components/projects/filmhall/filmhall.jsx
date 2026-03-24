import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma, FiLinkedin } from "react-icons/fi";
import "./filmhall.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7 },
});

const Filmhall = () => {
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
            CINETIME – Cinema Experience
          </motion.h1>
          <motion.div
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Revolutionizing the Movie Booking Journey
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
                <strong>CINETIME</strong> is a clean and user-friendly film hall interface designed to revolutionize
                how users interact with cinema services. Designed entirely in Figma, this concept focuses on
                delivering a smooth and intuitive movie booking flow with a modern visual language that
                prioritizes clarity and user engagement.
              </p>
            </section>

            {/* 2. Problem */}
            <section className="detail-section problem-section">
              <div className="section-number-tag">02</div>
              <h3>Problem</h3>
              <p>Common frustrations in traditional cinema booking apps include:</p>
              <ul className="highlights-modern-list problem-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="problem-icon">⚠️</span> Clunky and confusing seat selection interfaces.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="problem-icon">⚠️</span> Separation of ticket booking and snack bar services.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="problem-icon">⚠️</span> Long physical queues due to lack of digital pre-ordering.
                </motion.li>
              </ul>
            </section>

            {/* 3. Solution */}
            <section className="detail-section solution-section">
              <div className="section-number-tag">03</div>
              <h3>Solution</h3>
              <p>CINETIME addresses these issues with a high-fidelity, integrated approach:</p>
              <ul className="highlights-modern-list solution-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="solution-icon">✅</span> <strong>Interactive Seat Grid</strong> – Visual, real-time seat selection with clear status indicators.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="solution-icon">✅</span> <strong>Integrated Snack Bar</strong> – Pre-order snacks during the ticket checkout process.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="solution-icon">✅</span> <strong>Seamless Flow</strong> – A streamlined user journey from movie discovery to digital ticket.
                </motion.li>
              </ul>
            </section>

            {/* 4. UI Design Highlights */}
            <section className="detail-section">
              <div className="section-number-tag">04</div>
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  High-fidelity movie card designs with quick-view trailers.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Intuitive and responsive seat grid for mobile and web.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  Vibrant, app-wide dark theme for a premium cinematic feel.
                </motion.li>
                <motion.li {...fadeUp(0.4)}>
                  Digital ticket dashboard with QR integration for easy check-in.
                </motion.li>
              </ul>
            </section>

            {/* 5. Key Sections Designed */}
            <section className="detail-section">
              <div className="section-number-tag">05</div>
              <h3>Key Sections Designed</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>Movie Discovery – Search and filter upcoming blockbusters.</motion.li>
                <motion.li {...fadeUp(0.2)}>Booking Engine – Seat selection and cinema-specific info.</motion.li>
                <motion.li {...fadeUp(0.3)}>Snack Hub – Pre-booking food and beverage combos.</motion.li>
                <motion.li {...fadeUp(0.4)}>Digital Pass – The final ticket with hall and snack details.</motion.li>
              </ul>
            </section>

            {/* 6. Outcome */}
            <section className="detail-section outcome-section">
              <div className="section-number-tag">06</div>
              <h3>Outcome</h3>
              <p>
                CINETIME redefines the digital companion for moviegoers:
              </p>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Reduced booking friction with a 3-step checkout process.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Enhanced upsell opportunities via integrated snack bar prompts.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  A consistent and professional brand identity across all touchpoints.
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
                <a href="https://lnkd.in/er7beMhr" target="_blank" rel="noopener noreferrer" className="action-link-btn figma">
                  <FiFigma /> View Figma Design
                </a>
                <a href="https://www.linkedin.com/posts/dilutharushika_uidesign-uxdesign-figma-activity-7358474687212912640-136c" target="_blank" rel="noopener noreferrer" className="action-link-btn linkedin">
                  <FiLinkedin /> View on LinkedIn
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Meta</h4>
              <p className="role-tag">UI/UX Designer</p>
              <h4>Tech Implementation</h4>
              <div className="tech-pills">
                <span>Figma</span>
                <span>Prototyping</span>
                <span>Mobile UI</span>
                <span>User Flow</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">Completed Concept</p>
            </div>

            <div className="sidebar-card">
              <h4>My Focus</h4>
              <div className="tech-pills">
                <span>Interaction Design</span>
                <span>Visual Storytelling</span>
                <span>Conversion Optimization</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Filmhall;
