import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./skill.css";

// Asset imports
import jsImg from "../../assets/js.png";
import javaImg from "../../assets/java.png";
import sqlImg from "../../assets/mysql.png";
import phpImg from "../../assets/php.png";
import reactImg from "../../assets/reactjs.png";
import rnImg from "../../assets/reactnative.png";
import nodeImg from "../../assets/nodejs.png";
import firebaseImg from "../../assets/firebase.png";
import githubImg from "../../assets/github.png";
import vscodeImg from "../../assets/vscode.png";
import intellijImg from "../../assets/intelij.png";
import figmaImg from "../../assets/figma.png";

// React Icons
import {
  SiNextdotjs,
  SiNestjs,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaBrain, FaServer, FaCode, FaDatabase, FaTools } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <FaCode />,
    color: "#00c6ff",
    gridArea: "frontend",
    skills: [
      { name: "React", icon: reactImg },
      { name: "Next.js", iconComponent: <SiNextdotjs /> },
      { name: "React Native", icon: rnImg },
      { name: "JavaScript", icon: jsImg },
      { name: "TypeScript", iconComponent: <SiTypescript /> },
      { name: "Tailwind CSS", iconComponent: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend Architecture",
    icon: <FaServer />,
    color: "#8E37D7",
    gridArea: "backend",
    skills: [
      { name: "Node.js", icon: nodeImg },
      { name: "NestJS", iconComponent: <SiNestjs /> },
      { name: "Java", icon: javaImg },
      { name: "Python", iconComponent: <SiPython /> },
      { name: "PHP", icon: phpImg },
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: <FaDatabase />,
    color: "#0072ff",
    gridArea: "data",
    skills: [
      { name: "PostgreSQL", iconComponent: <SiPostgresql /> },
      { name: "MySQL", icon: sqlImg },
      { name: "Docker", iconComponent: <SiDocker /> },
      { name: "Firebase", icon: firebaseImg },
    ],
  },
  {
    title: "Intelligence & Tools",
    icon: <FaTools />,
    color: "#a855f7",
    gridArea: "tools",
    skills: [
      { name: "AI / ML", iconComponent: <FaBrain /> },
      { name: "Git / GitHub", icon: githubImg },
      { name: "Figma", icon: figmaImg },
      { name: "IntelliJ IDEA", icon: intellijImg },
      { name: "VS Code", icon: vscodeImg },
    ],
  },
];

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-bg-glow"></div>
      
      <div className="skills-container">
        <header className="skills-header" data-aos="fade-up">
          <span className="section-label">EXPERTISE</span>
          <h2>Technical Arsenal</h2>
          <div className="skills-divider"></div>
          <p>
            A comprehensive overview of my technical proficiency, categorized by domain to build robust, full-stack digital solutions.
          </p>
        </header>

        <div className="skills-bento-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              className={`bento-card ${category.gridArea}`}
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              style={{ "--category-color": category.color }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 15px 35px ${category.color}33`,
                borderColor: `${category.color}80`
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bento-card-glow"></div>
              
              <div className="bento-header">
                <div className="bento-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="bento-skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    className="bento-skill-chip"
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 + (skillIdx * 0.05), duration: 0.3 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  >
                    <div className="chip-icon">
                      {skill.iconComponent ? (
                        <span className="react-icon">{skill.iconComponent}</span>
                      ) : (
                        <img src={skill.icon} alt={skill.name} />
                      )}
                    </div>
                    <span className="chip-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
