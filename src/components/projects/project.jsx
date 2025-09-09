import React, { useEffect, useState } from "react";
import "./project.css";
import uiImg from "../../assets/ui.jpeg"; 
import mobileImg from "../../assets/mobile.jpeg"; 
import webImg from "../../assets/web.jpeg"; 
import recipeImg from "../../assets/recipe22.jpeg"; 
import gamesImg from "../../assets/game1.jpeg"; 
import cafeImg from "../../assets/cafe.jpeg"; 
import filmImg from "../../assets/film1.png"; 
import pharmacyImg from "../../assets/pharmacy.jpeg";
import todoImg from "../../assets/todo.jpeg"; 
import prototype from "../../assets/prototype.jpeg";
import todoUi from "../../assets/todoui.jpeg";
import mobileImg2 from "../../assets/noteApp.jpeg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  // Mobile Applications
  { title: "AI-Powered Recipe App", description: "A mobile app that generates personalized recipes and meal plans using AI, tailored to user preferences and dietary needs.", image: recipeImg, path: "/recipe", category: "Mobile" },
  { title: "Smart To-Do App", description: "A mobile application designed to help users organize tasks, set priorities, and track daily progress with a simple and intuitive interface.", image: todoImg, path: "/todo", category: "Mobile" },
  {title:"Simple Note App", description:"A mobile application that allows users to create, edit, and organize notes with features like tagging and search functionality.", image: mobileImg2, path:"/note", category:"Mobile"},
  // Web Applications
  { title: "Pharmacy Management System", description: "A web-based system for managing prescriptions, order processing, and billing with role-based access control.", image: pharmacyImg, path: "/pharmacy", category: "Web" },
  { title: "Mini Games Collection", description: "A collection of interactive mini-games designed to enhance logical thinking and provide an engaging user experience.", image: gamesImg, path: "/game", category: "Web" },
  // UI/UX Designs
  { title: "SwipeFlow Prototype", description: "An interactive Figma prototype showcasing smooth swipe animations and user flow transitions, designed to enhance UI/UX design skills.", image: prototype, path: "/proto", category: "UI/UX" },
  { title: "Café Management System(UI Design)", description: "A desktop application to streamline café operations including order management, billing, and inventory tracking.", image: cafeImg, path: "/cafe", category: "UI/UX" },
  { title: "Film Hall Interface (UI Design)", description: "A modern UI design for a film hall booking system, featuring seat selection and integrated food ordering options.", image: filmImg, path: "/film", category: "UI/UX" },
{ title: "To-Do App UI Design", description: "A sleek and user-friendly UI design for a mobile To-Do application, focusing on task management and productivity features.", image: todoUi, path: "/todoui", category: "UI/UX" },
 { title: "AI-Powered Recipe App UI Design", description: "A mobile app that generates personalized recipes and meal plans using AI, tailored to user preferences and dietary needs.", image: recipeImg, path: "/recipeui", category: "UI/UX" },
];

const categories = ["All", "Mobile", "Web", "UI/UX"];

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="projects" id="projects">
      <div className="projects-container" data-aos="fade-up">
        <h2 data-aos="fade-up">My Projects</h2>

        {/* Tabs */}
        <div className="tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat} Applications
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.path && (
                <Link to={project.path} className="project-link">
                  View Project
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
