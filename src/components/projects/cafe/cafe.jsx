import React from "react";
import "./cafe.css";

// Import project screenshots
import c1 from "../../../assets/c1.png";
import c2 from "../../../assets/c2.png";
import c3 from "../../../assets/c3.png";
import c4 from "../../../assets/c4.png";
import c5 from "../../../assets/c5.png";
import c6 from "../../../assets/c6.png";
import c7 from "../../../assets/c7.png";

const Cafe = () => {
  const screenshots = [c1, c2, c3, c4, c5, c6, c7];

  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {/* Project Title */}
        <h2>Cafe Management System (UI Design)</h2>

        {/* Description */}
        <p>
          Excited to share my latest project — a Cafe Management System UI that
          brings sleek design and intuitive user experience to cafe operations!
        </p>
         <div className="buttons">
          <a
            href="https://www.figma.com/design/GkA4LQDvr2JLZn3K4UE58E/Untitled?node-id=27-303&t=QlwjafgclQAMCF5H-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma
          </a>
        </div>

        {/* Key Highlights */}
        <h3>Key Highlights:</h3>
        <ul>
          <li>Browse and visualize cafe menu items with an elegant interface</li>
          <li>Track orders and reservations through a clean and interactive UI</li>
          <li>View sales summaries and analytics in easy-to-read dashboards</li>
          <li>
            Built with React (or React Native for mobile) focusing on responsive
            and modern design
          </li>
        </ul>

        {/* Tech Stack */}
        <p>
          This UI is designed to make cafe management intuitive, visually
          appealing, and user-friendly.
        </p>

        {/* Screenshot Gallery */}
        <h3>Project Screenshots:</h3>
        <div className="screenshot-gallery">
          {screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Cafe UI Screenshot ${index + 1}`}
              className="screenshot"
            />
          ))}
        </div>

        {/* Buttons */}
       
      </div>
    </div>
  );
};

export default Cafe;
