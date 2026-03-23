import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";

// Project Images
import recipeImg from "../../assets/recipe22.jpeg";
import gamesImg from "../../assets/game1.jpeg";
import cafeImg from "../../assets/cafe.jpeg";
import filmImg from "../../assets/film1.png";
import pharmacyImg from "../../assets/pharmacy.jpeg";
import todoImg from "../../assets/todo.jpeg";
import prototype from "../../assets/prototype.jpeg";
import todoUi from "../../assets/todoui.jpeg";
import mobileImg2 from "../../assets/noteApp.jpeg";
import fitmateImg from "../../assets/fitmate-banner.png";
import bobaImg from "../../assets/boba-poster.png";

const projects = [
  {
    title: "AI-Powered Recipe App",
    description: "A mobile app that generates personalized recipes and meal plans using AI, tailored to user preferences and dietary needs.",
    image: recipeImg,
    path: "/recipe",
    category: "Mobile",
    techs: ["React Native", "OpenAI", "Firebase"],
    isBest: true
  },
  {
    title: "Smart To-Do App",
    description: "A mobile application designed to help users organize tasks, set priorities, and track daily progress with a simple and intuitive interface.",
    image: todoImg,
    path: "/todo",
    category: "Mobile",
    techs: ["React Native", "Expo", "Firebase", "JavaScript"],
    isNew: true
  },
  {
    title: "Simple Note App",
    description: "A mobile application that allows users to create, edit, and organize notes with features like tagging and search functionality.",
    image: mobileImg2,
    path: "/note",
    category: "Mobile",
    techs: ["React Native", "Expo", "Firebase", "JavaScript"],
    isNew: true
  },
  {
    title: "FitMate Workout App",
    description: "A comprehensive UI/UX design for a fitness tracking application featuring activity monitoring, progress streaking, and personalized user profiles.",
    image: fitmateImg,
    path: "/fitmate",
    category: "UI/UX",
    techs: ["Figma", "UI Design", "Prototyping"],
    isBest: true
  },
  {
    title: "Pharmacy Management System",
    description: "A web-based system for managing prescriptions, order processing, and billing with role-based access control.",
    image: pharmacyImg,
    path: "/pharmacy",
    category: "Web",
    techs: ["html", "css", "js", "php", "mysql",],
    isBest: true
  },
  {
    title: "Boba Bubble Tea Shop Design",
    description: "A premium UI/UX design for a bubble tea shop, featuring a modern home page, interactive menu, and high-fidelity wireframes.",
    image: bobaImg,
    path: "/boba",
    category: "UI/UX",
    techs: ["Figma", "UI Design", "Branding"],
    isBest: true
  },
  {
    title: "Mini Games Collection",
    description: "A collection of interactive mini-games designed to enhance logical thinking and provide an engaging user experience.",
    image: gamesImg,
    path: "/game",
    category: "Web",
    techs: ["HTML5", "CSS3", "JS"]
  },
  {
    title: "SwipeFlow Prototype",
    description: "An interactive Figma prototype showcasing smooth swipe animations and user flow transitions.",
    image: prototype,
    path: "/proto",
    category: "UI/UX",
    techs: ["Figma", "Prototyping", "UX Research"],
    isNew: true
  },
  {
    title: "Café Management System (UI Design)",
    description: "A desktop application UI to streamline café operations including order management and inventory tracking.",
    image: cafeImg,
    path: "/cafe",
    category: "UI/UX",
    techs: ["Figma", "UI Design", "Branding"],
    isBest: true
  },
  {
    title: "Film Hall Interface (UI Design)",
    description: "A modern UI design for a film hall booking system, featuring seat selection and integrated food ordering.",
    image: filmImg,
    path: "/film",
    category: "UI/UX",
    techs: ["Figma", "UI Design", "User Flow"]
  },
  {
    title: "To-Do App UI Design",
    description: "A sleek and user-friendly UI design for a mobile To-Do application, focusing on productivity features.",
    image: todoUi,
    path: "/todoui",
    category: "UI/UX",
    techs: ["Figma", "Material Design"]
  },
  {
    title: "Recipe App UI Design",
    description: "High-fidelity mobile screens for an AI-integrated recipe platform with clean and intuitive navigation.",
    image: recipeImg,
    path: "/recipeui",
    category: "UI/UX",
    techs: ["Figma", "Clean UI", "UX Case Study"]
  },
];

const categories = ["All", "Mobile", "Web", "UI/UX"];

const Project = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || "All");

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state?.activeTab]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const renderProjectCard = (project, index) => (
    <motion.div
      className="project-card-modern"
      key={project.title}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 1.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.6, ease: "easeOut" }
      }}
    >
      <div className="card-top-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="category-tag">{project.category}</div>
        {project.isBest && <div className="featured-badge">BEST</div>}
        {project.isNew && <div className="new-badge">NEW</div>}
      </div>

      <div className="card-bottom-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-badges-list">
          {project.techs && project.techs.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>

        {project.path && (
          <Link to={project.path} className="project-btn-v2">
            View Details
          </Link>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 data-aos="fade-up">Creative Solutions</h2>

        <div className="projects-header" data-aos="fade-up" data-aos-delay="200">
          <div className="about-divider"></div>
          <p>
            A curated showcase of my technical journey, featuring full-stack applications,
            mobile experiences, and high-fidelity user interface designs.
          </p>
        </div>

        <div className="projects-nav-tabs" data-aos="fade-up" data-aos-delay="300">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`project-tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="projects-flex-grid-container"
            >
              {activeTab === "All" ? (
                <>
                  {/* Best Projects Section */}
                  <div className="project-section-group">
                    <h3 className="section-title-modern">Best Masterpieces</h3>
                    <div className="projects-flex-grid">
                      {projects.filter(p => p.isBest).map((p, i) => renderProjectCard(p, i))}
                    </div>
                  </div>

                  {/* New Releasing Projects Section */}
                  <div className="project-section-group">
                    <h3 className="section-title-modern">New Releases</h3>
                    <div className="projects-flex-grid">
                      {projects.filter(p => p.isNew).map((p, i) => renderProjectCard(p, i))}
                    </div>
                  </div>

                  {/* Other Projects Section */}
                  <div className="project-section-group">
                    <h3 className="section-title-modern">More Projects</h3>
                    <div className="projects-flex-grid">
                      {projects.filter(p => !p.isBest && !p.isNew).map((p, i) => renderProjectCard(p, i + 5))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="projects-flex-grid">
                  {projects
                    .filter(p => p.category === activeTab)
                    .sort((a, b) => (b.isBest ? 1 : 0) - (a.isBest ? 1 : 0))
                    .map((p, i) => renderProjectCard(p, i))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Project;

