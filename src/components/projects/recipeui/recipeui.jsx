import React from "react";
import "./recipeui.css";

// Import screenshots
import ss0 from "../../../assets/ss0.jpg";
import ss1 from "../../../assets/ss1.jpg";
import ss2 from "../../../assets/ss2.jpg";
import ss3 from "../../../assets/ss3.jpg";
import ss4 from "../../../assets/ss4.jpg";
import ss5 from "../../../assets/ss5.jpg";
import ss6 from "../../../assets/ss6.jpg";
import ss7 from "../../../assets/ss7.jpg";

const RecipeProject = () => {
  const screenshots = [ss0, ss1, ss2, ss3, ss4, ss5, ss6, ss7];

  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {/* Project Title */}
        <h2 className="project-title">AI-Powered Smart Recipe App!</h2>

        {/* Figma Button */}
        <div className="buttons">
          <a
            href="https://www.figma.com/design/0LOpTDIoacRDu73RdAM757/Untitled?t=KeMdRfdhypSnZFn7-1" // replace with your real Figma link
            target="_blank"
            rel="noopener noreferrer"
            className="figma-btn"
          >
            View Figma Design
          </a>
        </div>

        {/* Description */}
        <p className="project-description">
          This project reimagines cooking through a <strong>modern UI design</strong>, 
          blending <strong>AI-powered recipe generation</strong> with 
          <strong> sleek, user-friendly interfaces</strong> to make meal planning engaging and smart.
        </p>

        {/* Key UI Highlights */}
        <h3 className="section-heading">✨ UI Design Highlights:</h3>
        <ul className="highlights-list">
          <li> Clean and minimalist layout for effortless navigation</li>
          <li> Mobile-first design with smooth interactions</li>
          <li> Light/Dark theme support for accessibility</li>
          <li> Stylish category cards, recipe previews, and ingredient tags</li>
          <li> Optimized for both usability and visual appeal</li>
        </ul>

        {/* Tech Stack */}
        <p className="tech-description">
          Designed with <strong>React Native</strong> for mobile performance, 
          powered by <strong>Groq + LLaMA 3</strong> for AI, 
          and integrated with <strong>Firestore</strong> for real-time storage.  
          The design was first prototyped in <strong>Figma</strong> to ensure a polished 
          and user-focused interface.
        </p>

        {/* Screenshots */}
        <h3 className="section-heading">UI Screenshots:</h3>
        <div className="screenshots">
          {screenshots.map((ss, index) => (
            <img
              key={index}
              src={ss}
              alt={`Screenshot ${index + 1}`}
              className="screenshot"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeProject;
