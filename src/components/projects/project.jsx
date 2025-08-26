import React from "react";
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
import { Link } from "react-router-dom"; // ✅ use React Router for local navigation

const projects = [
  {
    title: "AI-Powered Recipe App",
    description:
      "A mobile app that generates personalized recipes and meal plans using AI, tailored to user preferences and dietary needs.",
    image: recipeImg,
    path: "/recipe", // ✅ route instead of external link
  },
  {
    title: "Pharmacy Management System",
    description:
      "A web-based system for managing prescriptions, order processing, and billing with role-based access control.",
    image: pharmacyImg,
    path: "/pharmacy",
  }, 
  {
    title: "Mini Games Collection",
    description:
      "A collection of interactive mini-games designed to enhance logical thinking and provide an engaging user experience.",
    image: gamesImg,
    path: "/game",
  },
  {
    title: "Café Management System",
    description:
      "A desktop application to streamline café operations including order management, billing, and inventory tracking.",
    image: cafeImg,
    path: "/cafe",
  },
  {
    title: "Film Hall Interface (UI Design)",
    description:
      "A modern UI design for a film hall booking system, featuring seat selection and integrated food ordering options.",
    image: filmImg,
    path: "/film",
  },
  {
    title: "Smart To-Do App",
    description:
      "A mobile application designed to help users organize tasks, set priorities, and track daily progress with a simple and intuitive interface.",
    image: todoImg,
    path: "/todo",
  },
];

const Project = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
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
