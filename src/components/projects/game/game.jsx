import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import "./game.css";

const Game = () => {
  const [activeTab, setActiveTab] = useState("ticTacToe");

  const games = {
    ticTacToe: {
      title: "Tic Tac Toe",
      description:
        "A highly interactive classic Tic Tac Toe experience featuring advanced state management and a clean user-centric design.",
      highlights: [
        "Interactive 3x3 Responsive Grid",
        "Two-player Local Gameplay Mode",
        "Dynamic Score Tracking & Persistence",
        "Fluid React-based Logic & States"
      ],
      github: "https://github.com/dilutharushika",
    },
    memoryCard: {
      title: "Memory Scramble",
      description:
        "A fast-paced memory card matching game designed to test cognitive skills and focus with an engaging, gamified UI.",
      highlights: [
        "Dynamic Card Flipping Animations",
        "Score & Moves Milestone Tracking",
        "Responsive Grid for Multiple Devices",
        "Randomized Level Generation Logic"
      ],
      github: "https://github.com/dilutharushika",
    },
  };

  const currentGame = games[activeTab];

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
           Collection of Games
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
            Interactive Web Experiences Built with JavaScript
          </motion.p>
        </header>

        {/* Tabs - Game Selector */}
        <div className="game-tabs-professional">
          {Object.keys(games).map((key) => (
            <button
              key={key}
              className={`game-nav-btn ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {key === "ticTacToe" ? "Tic Tac Toe" : "Memory Scramble"}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Left: Interactive Card */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              className="detail-main-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <section className="detail-section">
                <h3>{currentGame.title}</h3>
                <p>{currentGame.description}</p>
              </section>

              <section className="detail-section">
                <h3>Technical Highlights</h3>
                <ul className="highlights-modern-list">
                  {currentGame.highlights.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </section>

              <div className="detail-action-links">
                <a href={currentGame.github} target="_blank" rel="noopener noreferrer" className="action-link-btn github">
                  <FiGithub /> Source Code on GitHub
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Meta Info */}
          <motion.div 
            className="detail-sidebar"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="sidebar-card">
              <h4>Project Type</h4>
              <p className="role-tag">Frontend Application</p>
              <h4>Status</h4>
              <p className="status-tag">Live / Stable</p>
              <h4>Tech Stack</h4>
              <div className="tech-pills">
                <span>React JS</span>
                <span>JavaScript</span>
                <span>CSS3</span>
                <span>HTML5</span>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Learning Outcome</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Deepened understanding of React state persistence, conditional rendering, and complex event handling in dynamic user interfaces.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Game;
