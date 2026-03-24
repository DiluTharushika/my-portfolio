import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiFigma } from "react-icons/fi";
import "./recipeui.css";

// Import project screenshots
import r1 from "../../../assets/ss1.jpg";
import r2 from "../../../assets/ss2.jpg";
import r3 from "../../../assets/ss3.jpg";
import r4 from "../../../assets/ss4.jpg";
import r5 from "../../../assets/ss5.jpg";
import r6 from "../../../assets/ss6.jpg";
import r7 from "../../../assets/ss7.jpg";
import r8 from "../../../assets/ss8.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7 },
});

const RecipeUI = () => {
  const screenshots = [r1, r2, r3, r4, r5, r6, r7, r8];

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
            RECIPE APP UI DESIGN
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
            AI-Integrated Culinary Experience & Smart Meal Planning
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
                The <strong>Recipe App UI</strong> is a conceptual exploration of an <strong>AI-integrated culinary
                  platform</strong>. Designed to simplify the cooking journey, this interface combines
                sophisticated meal planning tools with a minimalist visual aesthetic, ensuring that
                the user stays focused on the joy of cooking.
              </p>
            </section>

            {/* 2. Problem */}
            <section className="detail-section problem-section">
              <div className="section-number-tag">02</div>
              <h3>Problem</h3>
              <p>Modern home cooks often struggle with several digital frictions:</p>
              <ul className="highlights-modern-list problem-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="problem-icon">⚠️</span> Overwhelming amounts of recipe data without personalization.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="problem-icon">⚠️</span> Complex navigation that makes finding specific dietary recipes difficult.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="problem-icon">⚠️</span> Lack of integration between recipe discovery and meal planning.
                </motion.li>
              </ul>
            </section>

            {/* 3. Solution */}
            <section className="detail-section solution-section">
              <div className="section-number-tag">03</div>
              <h3>Solution</h3>
              <p>The solution leverages AI-driven personalization and clean architecture:</p>
              <ul className="highlights-modern-list solution-list">
                <motion.li {...fadeUp(0.1)}>
                  <span className="solution-icon">✅</span> <strong>AI Recipe Wizard</strong> – Suggests meals based on user preferences and pantry items.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  <span className="solution-icon">✅</span> <strong>Minimalist Layout</strong> – Reduces cognitive load by highlighting key culinary visuals.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  <span className="solution-icon">✅</span> <strong>Smart Dashboard</strong> – Unifies recipe discovery, meal planning, and grocery tracking.
                </motion.li>
              </ul>
            </section>

            {/* 4. UI Design Highlights */}
            <section className="detail-section">
              <div className="section-number-tag">04</div>
              <h3>UI Design Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Curated typography and spacious card designs for readability.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Tactile interaction loops for adding items to the meal plan.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  Vibrant product photography integrated into the UI flow.
                </motion.li>
                <motion.li {...fadeUp(0.4)}>
                  Smooth, motion-guided transitions between recipe steps.
                </motion.li>
              </ul>
            </section>

            {/* 5. Key Screens Designed */}
            <section className="detail-section">
              <div className="section-number-tag">05</div>
              <h3>Key Screens Designed</h3>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>Discovery Dashboard – Personalised recipe feed based on AI.</motion.li>
                <motion.li {...fadeUp(0.2)}>Meal Planner – Weekly calendar view with drag-and-drop support.</motion.li>
                <motion.li {...fadeUp(0.3)}>Cooking Mode – Large-format, distraction-free step-by-step UI.</motion.li>
                <motion.li {...fadeUp(0.4)}>Smart Grocery List – Automated list generation from planned meals.</motion.li>
              </ul>
            </section>

            {/* 6. Design Showcase */}
            <section className="detail-section screenshot-section">
              <div className="section-number-tag">06</div>
              <h3>Design Showcase</h3>
              <div className="design-gallery">
                {screenshots.map((src, index) => (
                  <motion.div
                    key={index}
                    className="design-frame"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.05), duration: 0.6 }}
                  >
                    <img src={src} alt={`Recipe UI Detail ${index + 1}`} loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 7. Outcome */}
            <section className="detail-section outcome-section">
              <div className="section-number-tag">07</div>
              <h3>Outcome</h3>
              <p>
                The Recipe App concept delivers a cohesive and delightful culinary companion:
              </p>
              <ul className="highlights-modern-list">
                <motion.li {...fadeUp(0.1)}>
                  Simplified search phase through intelligent AI filtering.
                </motion.li>
                <motion.li {...fadeUp(0.2)}>
                  Higher user retention driven by a personalized meal ecosystem.
                </motion.li>
                <motion.li {...fadeUp(0.3)}>
                  A premium, modern aesthetic that stands out in the food tech space.
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
                <span>AI Integration</span>
                <span>Meal Planning</span>
                <span>Culinary UX</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Design Status</h4>
              <p className="status-tag">Completed Prototype</p>
            </div>

            <div className="sidebar-card">
              <h4>My Focus</h4>
              <div className="tech-pills">
                <span>User Personalization</span>
                <span>Interface Clarity</span>
                <span>Flow Optimization</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeUI;
