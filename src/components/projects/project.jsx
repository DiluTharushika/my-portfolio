import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";

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
import waterAppImg from "../../assets/waterappImg.png";
import studentMgmtImg from "../../assets/student-mgmt.png";

const projects = [
  {
    title: "Smart Water App",
    description: "A mobile app designed to help households in Sri Lanka manage and plan water usage during irregular supply schedules. Includes predictive analysis.",
    image: waterAppImg,
    path: "/water",
    category: "UI/UX",
    techs: ["Figma", "UX Case Study", "Research"],
    isBest: true,
    isNew: true
  },
  {
    title: "AI-Powered Recipe App",
    description: "A mobile app that generates personalized recipes and meal plans using AI, tailored to user preferences, allergies, and dietary needs.",
    image: recipeImg,
    path: "/recipe",
    category: "Mobile",
    techs: ["React Native", "OpenAI", "Firebase"],
    isBest: true
  },
  {
    title: "Pharmacy Management System",
    description: "A robust web-based system for managing prescriptions, complex order processing, and secure billing with role-based access control.",
    image: pharmacyImg,
    path: "/pharmacy",
    category: "Web",
    techs: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    isBest: true
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
    title: "Smart To-Do App",
    description: "A mobile application designed to help users organize tasks, set priorities, and track daily progress with a simple and intuitive interface.",
    image: todoImg,
    path: "/todo",
    category: "Mobile",
    techs: ["React Native", "Expo", "Firebase"],
    isNew: true
  },
  {
    title: "Simple Note App",
    description: "A mobile application that allows users to create, edit, and organize notes with features like tagging and search functionality.",
    image: mobileImg2,
    path: "/note",
    category: "Mobile",
    techs: ["React Native", "Expo", "Firebase"],
    isNew: true
  },
  {
    title: "Boba Bubble Tea Shop",
    description: "A premium UI/UX design for a bubble tea shop, featuring a modern home page, interactive menu, and high-fidelity wireframes.",
    image: bobaImg,
    path: "/boba",
    category: "UI/UX",
    techs: ["Figma", "UI Design", "Branding"],
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
    description: "An interactive Figma prototype showcasing smooth swipe animations and complex user flow transitions.",
    image: prototype,
    path: "/proto",
    category: "UI/UX",
    techs: ["Figma", "Prototyping", "UX Research"],
    isNew: true
  },
  {
    title: "Café Management System",
    description: "A desktop application UI to streamline café operations including order management and inventory tracking.",
    image: cafeImg,
    path: "/cafe",
    category: "UI/UX",
    techs: ["Figma", "UI Design", "Branding"],
  },
  {
    title: "Film Hall Interface",
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
  {
    title: "Student Management System",
    description: "A Java Swing desktop application with PostgreSQL for managing student records, marks tracking, and academic analytics with full CRUD operations.",
    image: studentMgmtImg,
    path: "/studentmgmt",
    category: "Web",
    techs: ["Java", "Swing", "PostgreSQL"],
    isNew: true
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
      easing: "ease-out-cubic",
    });
  }, []);

  const featuredProjects = projects.filter(p => p.isBest).slice(0, 3); // Get top 3 for showcase
  const remainingProjects = activeTab === "All" 
    ? projects.filter(p => !featuredProjects.includes(p))
    : projects.filter(p => p.category === activeTab);

  const renderRegularCard = (project, index) => (
    <motion.div
      className="regular-project-card"
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
    >
      <div className="card-image-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="card-overlay">
          {project.path && (
            <Link to={project.path} className="overlay-btn">
              View Project
            </Link>
          )}
        </div>
        <div className="category-pill">{project.category}</div>
        {project.isNew && <div className="new-pill">NEW</div>}
      </div>

      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.techs.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="projects-portfolio" id="projects">
      <div className="portfolio-container">
        
        {/* Header Section */}
        <header className="portfolio-header" data-aos="fade-up">
          <span className="section-label">PORTFOLIO</span>
          <h2>Featured Showcase</h2>
          <div className="header-divider"></div>
          <p>Explore a selection of my most impactful projects, showcasing full-stack capabilities, intuitive designs, and real-world problem solving.</p>
        </header>

        {/* Presentation Showcase (Top 3 Projects) */}
        <div className="presentation-showcase" data-aos="fade-up" data-aos-delay="200">
          <div className="showcase-grid">
            {/* Main Featured Project */}
            {featuredProjects[0] && (
              <motion.div className="showcase-card large" whileHover={{ scale: 1.02 }}>
                <img src={featuredProjects[0].image} alt={featuredProjects[0].title} className="showcase-img" />
                <div className="showcase-content">
                  <div className="showcase-badge"><FiStar /> TOP PICK</div>
                  <h3>{featuredProjects[0].title}</h3>
                  <p>{featuredProjects[0].description}</p>
                  <div className="showcase-tech">
                    {featuredProjects[0].techs.map(t => <span key={t}>{t}</span>)}
                  </div>
                  {featuredProjects[0].path && (
                    <Link to={featuredProjects[0].path} className="showcase-link">
                      Explore Case Study <FiArrowRight />
                    </Link>
                  )}
                </div>
              </motion.div>
            )}

            {/* Secondary Featured Projects */}
            <div className="showcase-sidebar">
              {featuredProjects.slice(1).map((project) => (
                <motion.div key={project.title} className="showcase-card small" whileHover={{ scale: 1.03 }}>
                  <img src={project.image} alt={project.title} className="showcase-img" />
                  <div className="showcase-content">
                    <h3>{project.title}</h3>
                    <div className="showcase-tech">
                      {project.techs.slice(0, 2).map(t => <span key={t}>{t}</span>)}
                    </div>
                    {project.path && (
                      <Link to={project.path} className="showcase-link">
                        View <FiArrowRight />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Library Section */}
        <div className="portfolio-library" data-aos="fade-up">
          <div className="library-header">
            <h3>Project Archive</h3>
            
            <div className="library-tabs">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className={`lib-tab-btn ${activeTab === cat ? "active" : ""}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="library-grid-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="library-grid"
              >
                {remainingProjects.map((p, i) => renderRegularCard(p, i))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;
