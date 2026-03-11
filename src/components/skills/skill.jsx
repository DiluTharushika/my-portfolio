import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./skill.css";

import jsImg from "../../assets/js.png";
import javaImg from "../../assets/java.png";
import sqlImg from "../../assets/mysql.png";
import phpImg from "../../assets/php.png";
import reactImg from "../../assets/reactjs.png";
import rnImg from "../../assets/reactnative.png";
import nodeImg from "../../assets/nodejs.png";
import tailwindImg from "../../assets/css.png";
import firebaseImg from "../../assets/firebase.png";
import githubImg from "../../assets/github.png";
import vscodeImg from "../../assets/vscode.png";
import intellijImg from "../../assets/intelij.png";
import figmaImg from "../../assets/figma.png";
import canvaImg from "../../assets/canva.png";
import problemImg from "../../assets/problem1.png";
import teamworkImg from "../../assets/team.png";
import timeImg from "../../assets/time.png";

import AOS from "aos";
import "aos/dist/aos.css";

// Define categories with skills and proficiency levels
const skillCategories = {
  "Programming": [
    { name: "JavaScript", icon: jsImg, level: 85 },
    { name: "Java", icon: javaImg, level: 80 },
    { name: "SQL", icon: sqlImg, level: 75 },
    { name: "PHP", icon: phpImg, level: 70 },
  ],
  "Frameworks": [
    { name: "React", icon: reactImg, level: 90 },
    { name: "React Native", icon: rnImg, level: 75 },
    { name: "Node.js", icon: nodeImg, level: 70 },
    { name: "Tailwind CSS", icon: tailwindImg, level: 85 },
  ],
  "Tools": [
    { name: "Firebase", icon: firebaseImg, level: 80 },
    { name: "Git & GitHub", icon: githubImg, level: 85 },
    { name: "VS Code", icon: vscodeImg, level: 95 },
    { name: "IntelliJ IDEA", icon: intellijImg, level: 80 },
  ],
  "Design": [
    { name: "Figma", icon: figmaImg, level: 80 },
    { name: "Canva", icon: canvaImg, level: 90 },
  ],
  "Professional": [
    { name: "Problem Solving", icon: problemImg, level: 90 },
    { name: "Teamwork", icon: teamworkImg, level: 95 },
    { name: "Time Management", icon: timeImg, level: 85 },
  ],
};

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("Programming");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-glass-container" data-aos="fade-up">
        <div className="skills-header">
          <h2 className="glitch-text" data-text="Technical Expertise">Technical Expertise</h2>
          <div className="divider"></div>
          <p>
            An evolving set of skills acquired through academic excellence and hands-on projects, 
            focused on building robust and scalable digital solutions.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="skills-nav-tabs">
          {Object.keys(skillCategories).map((category, index) => (
            <button
              key={index}
              className={`nav-tab-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="tab-text">{category}</span>
              {activeCategory === category && (
                <motion.div 
                  layoutId="activeTab" 
                  className="active-tab-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid with AnimatePresence */}
        <div className="skills-grid-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="skills-flex-grid"
            >
              {skillCategories[activeCategory].map((skill, index) => (
                <motion.div
                  className="skill-card-modern"
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="card-inner-glow"></div>
                  <div className="skill-card-top">
                    <div className="icon-box">
                      <img src={skill.icon} alt={skill.name} className="skill-img-main" />
                    </div>
                    <div className="skill-info">
                      <span className="skill-name-text">{skill.name}</span>
                      <span className="skill-level-percent">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar-container">
                    <motion.div 
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.05, ease: "circOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skill;
