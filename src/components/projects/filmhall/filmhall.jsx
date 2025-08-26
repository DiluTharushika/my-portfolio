import React from "react";
import "./filmhall.css";

const Filmhall = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {/* Project Title */}
        <h2>
         CINETIME – Your Next Cinema Experience 
        </h2>
{/* Buttons */}
        <div className="buttons">
          <a
            href="https://lnkd.in/er7beMhr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma
          </a>

          <a
            href="https://www.linkedin.com/posts/dilutharushika_uidesign-uxdesign-figma-activity-7358474687212912640-136c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvVMygBNvffjB8H2yOIrJ0D6Q7Lm1QCH78"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        {/* Description */}
        <p>
           CINETIME, a clean and user-friendly film hall interface that allows users to book seats and pre-order snacks through a streamlined experience.
Designed entirely in Figma, this concept focuses on delivering a smooth and intuitive movie booking flow with a modern visual design.
        </p>

        {/* Key Highlights */}
        <h3> Key Highlights:</h3>
        <ul>
          <li> Seat booking interface</li>
          <li> Snack bar ordering system</li>
          <li> Seamless, responsive UI</li>
         
        </ul>

        {/* Tech Stack */}
        <p>
          This app is designed to make recipe discovery smarter, budget-friendly, and truly user-driven.
        </p>

        

       
      </div>
    </div>
  );
};

export default Filmhall;
