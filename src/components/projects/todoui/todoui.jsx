import React from "react";
import "./todoui.css";

// Import project screenshot
import todoss from "../../../assets/todoss.png"; // adjust path based on your file structure

const Todoui = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {/* Project Title */}
        <h2 className="project-title">To-Do Mobile Application</h2>
<div className="buttons">
          <a
            href="https://www.figma.com/design/Jz0IBwM9iBvkCn31umsvNN/Untitled?node-id=0-1&t=KeMdRfdhypSnZFn7-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Figma Design
          </a>
        </div>
        {/* Description */}
        <p className="project-description">
          Excited to share my latest project — a mobile To-Do app built with
          <strong> React Native (Expo)</strong> that helps users organize their
          tasks, boost productivity, and stay on top of their daily activities!
        </p>

        {/* Key Highlights */}
        <h3 className="section-heading">Key UI Highlights:</h3>
        <ul className="highlights-list">
          <li> Minimalist and clean interface for smooth user experience</li>
          <li> Intuitive task management with modern design patterns</li>
          <li> Category tags, priorities, and due dates with styled badges</li>
          <li> Real-time sync with Firebase ensures consistency across devices</li>
        </ul>

        {/* Tech Stack */}
        <p className="tech-description">
          Designed with <strong>React Native (Expo)</strong> for a seamless mobile
          experience and <strong>Firebase</strong> for real-time data
          synchronization, this app focuses heavily on delivering a polished and
          user-friendly interface.
        </p>

        {/* Screenshot */}
        <h3 className="section-heading"> Project Screenshot:</h3>
        <div className="screenshot-gallery">
          <img
            src={todoss}
            alt="To-Do App Screenshot"
            className="screenshot"
          />
        </div>
      </div>
    </div>
  );
};

export default Todoui;
