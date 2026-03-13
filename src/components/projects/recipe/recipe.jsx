import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./recipe.css";

// Import screenshots
import ss0 from "../../../assets/ss0.jpg";
import ss1 from "../../../assets/ss1.jpg";
import ss2 from "../../../assets/ss2.jpg";
import ss3 from "../../../assets/ss3.jpg";
import ss4 from "../../../assets/ss4.jpg";
import ss5 from "../../../assets/ss5.jpg";
import ss6 from "../../../assets/ss6.jpg";
import ss7 from "../../../assets/ss7.jpg";

const RecipeProject = () => {
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
          <HiOutlineArrowLeft /> Back to Projects
        </Link>

        {/* Hero Section */}
        <header className="detail-hero">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            SMART RECIPE AI
          </motion.h1>
          <motion.div 
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Intelligent Cooking Experience Powered by LLaMA 3
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
              <h3>Project Vision</h3>
              <p>
                The Smart Recipe AI mobile app is designed to transform everyday cooking into a 
                personalized and intelligent experience. By leveraging advanced LLMs, it helps 
                users discover new culinary dimensions using the ingredients they already have.
              </p>
              <p>
                Built with React Native for cross-platform performance, the app integrates 
                seamlessly with Groq for lightning-fast AI inference and Firebase for robust 
                cloud features.
              </p>
            </section>

            <section className="detail-section">
              <h3>Core Capabilities</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  AI-Generated Recipes from User Ingredients
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  Personalized Diet & Cuisine Preferences
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Real-time Cost Estimation for Every Meal
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  Cross-Platform Performance with React Native
                </motion.li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>App Interface</h3>
              <div className="screenshot-gallery-modern">
                {screenshots.map((ss, index) => (
                  <motion.div 
                    key={index} 
                    className="screenshot-wrapper-v2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <img src={ss} alt={`Recipe App Screenshot ${index}`} />
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
              <h4>Project Access</h4>
              <div className="detail-action-links">
                <a href="https://github.com/DiluTharushika/Ai-Recipe-Book" target="_blank" rel="noopener noreferrer" className="action-link-btn github-dark">
                  <FiGithub /> View Repository
                </a>
                <a href="https://www.linkedin.com/posts/dilutharushika_airecipeapp-reactnative-groq-activity-7347290779221975040-Q3PQ" target="_blank" rel="noopener noreferrer" className="action-link-btn linkedin">
                  <FiLinkedin /> Watch Demo
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Technical Specs</h4>
              <p className="role-tag">Lead Developer</p>
              <h4>Tech Stack</h4>
              <div className="tech-pills">
                <span>React Native</span>
                <span>Groq AI</span>
                <span>LLaMA 3</span>
                <span>Firestore</span>
                <span>Node.js</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Status</h4>
              <p className="status-tag">Live / Mobile Release</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeProject;
