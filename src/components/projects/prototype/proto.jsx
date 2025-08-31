import React from "react";
import "./proto.css";
import demoVideo from "../../../assets/ux design.mp4"; // adjust path based on your file structure

const Proto = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        <h2>SwipeFlow Prototype</h2>

        {/* Demo Video */}
        <div className="demo-video">
          <video width="100%" controls>
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="buttons">
          <a
            href="https://www.figma.com/proto/U0dZKUyBwmct3ZVBxnBG5L/Untitled?t=cpUpJFbtUm5qHn6X-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma
          </a>
        </div>

        <p>
          An interactive Figma prototype showcasing smooth swipe animations and user flow transitions, designed to enhance UI/UX design skills.
        </p>

        <h3>Key Highlights:</h3>
        <ul>
          <li>Experience smooth swipe animations and interactive transitions between screens</li>
          <li>Explore intuitive user flows designed for seamless navigation</li>
          <li>Test interactive prototypes to visualize app behavior before development</li>
          <li>Designed entirely in Figma, focusing on modern UI/UX design principles</li>
        </ul>

        <p>
          This prototype is built to demonstrate <strong>gesture-based interactions</strong>, smooth animations, and user-centered design concepts in Figma.
        </p>
      </div>
    </div>
  );
};

export default Proto;
