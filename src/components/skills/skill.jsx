import React, { useState, useEffect } from "react";
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

// Define categories with skills
const skillCategories = {
  "Programming Languages": [
    { name: "JavaScript", icon: jsImg },
    { name: "Java", icon: javaImg },
    { name: "SQL", icon: sqlImg },
    { name: "PHP", icon: phpImg },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: reactImg },
    { name: "React Native", icon: rnImg },
    { name: "Node.js", icon: nodeImg },
    { name: "Tailwind CSS", icon: tailwindImg },
  ],
  "Tools & Technologies": [
    { name: "Firebase", icon: firebaseImg },
    { name: "Git & GitHub", icon: githubImg },
    { name: "VS Code", icon: vscodeImg },
    { name: "IntelliJ IDEA", icon: intellijImg },
  ],
  Design: [
    { name: "Figma", icon: figmaImg },
    { name: "Canva", icon: canvaImg },
  ],
  "Soft Skills": [
    { name: "Problem Solving", icon: problemImg },
    { name: "Teamwork", icon: teamworkImg },
    { name: "Time Management", icon: timeImg },
  ],
};

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-container" data-aos="fade-up">
        <h2 data-aos="fade-up">My Skills</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Here are some of my skills, grouped into categories.
        </p>

        {/* Tabs */}
        <div className="skill-tabs" data-aos="fade-up" data-aos-delay="400">
          {Object.keys(skillCategories).map((category, index) => (
            <button
              key={index}
              className={`tab-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="skills-list">
          {skillCategories[activeCategory].map((skill, index) => (
            <div
              className="skill-item"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // staggered animation
            >
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
