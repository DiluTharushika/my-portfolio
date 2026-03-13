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

import { HiOutlineLightBulb, HiOutlineUsers, HiOutlineClock } from "react-icons/hi";

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
    { name: "Problem Solving", icon: <HiOutlineLightBulb />, level: 90, isIcon: true },
    { name: "Teamwork", icon: <HiOutlineUsers />, level: 95, isIcon: true },
    { name: "Time Management", icon: <HiOutlineClock />, level: 85, isIcon: true },
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

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Slow, smooth ease
      }
    })
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: "circOut"
      }
    })
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 data-aos="fade-up">Technical Expertise</h2>

        <div className="skills-header" data-aos="fade-up" data-aos-delay="200">
          <div className="skills-divider"></div>
          <p>
            An evolving set of skills acquired through academic excellence and hands-on projects,
            focused on building robust and scalable digital solutions.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="skills-nav-tabs" data-aos="fade-up" data-aos-delay="300">
          {Object.keys(skillCategories).map((category, index) => (
            <button
              key={index}
              className={`nav-tab-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid with AnimatePresence */}
        <div className="skills-grid-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="skills-flex-grid"
            >
              {skillCategories[activeCategory].map((skill, index) => (
                <motion.div
                  className="skill-card-modern"
                  key={skill.name}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 35px rgba(0, 198, 255, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="card-inner-glow"></div>
                  <div className="skill-card-top">
                    <div className="icon-box">
                      {skill.isIcon ? (
                        <div className="skill-react-icon">{skill.icon}</div>
                      ) : (
                        <img src={skill.icon} alt={skill.name} className="skill-img-main" />
                      )}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name-text">{skill.name}</span>
                      <span className="skill-level-percent">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-bar-container">
                    <motion.div
                      className="skill-bar-fill"
                      custom={skill.level}
                      variants={barVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
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
