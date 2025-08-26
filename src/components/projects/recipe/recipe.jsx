import React from "react";
import "./recipe.css";

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
        <h2>AI-Powered Smart Recipe App!</h2>
{/* Buttons */}
        <div className="buttons">
          <a
            href="https://github.com/DiluTharushika/Ai-Recipe-Book"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/posts/dilutharushika_airecipeapp-reactnative-groq-activity-7347290779221975040-Q3PQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvVMygBNvffjB8H2yOIrJ0D6Q7Lm1QCH78"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        {/* Description */}
        <p>
          Excited to share my latest project — a mobile app that brings
          intelligence and personalization into everyday cooking!
        </p>

        {/* Key Highlights */}
        <h3>Key Highlights:</h3>
        <ul>
          <li>Add own ingredients, and the app will generate unique new recipes using AI</li>
          <li>Get personalized recipe suggestions based on your preferences (cuisine, diet, meals per day)</li>
          <li>Receive an estimated cost for each recipe</li>
          <li>Built with React Native, powered by Groq + LLaMA 3, and integrated with Firestore</li>
        </ul>

        {/* Tech Stack */}
        <p>
          This app is designed to make recipe discovery smarter, budget-friendly, and truly user-driven.
        </p>

        {/* Screenshots */}
        <div className="screenshots">
          {screenshots.map((ss, index) => (
            <img
              key={index}
              src={ss}
              alt={`Screenshot ${index}`}
              className="screenshot"
            />
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default RecipeProject;
