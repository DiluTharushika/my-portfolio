import React from "react";
import "./todo.css";

const Todo = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {/* Project Title */}
        <h2>
          AI-Powered Smart Recipe App! 
        </h2>

        {/* Description */}
        <p>
          Excited to share my latest project — a mobile app that brings
          intelligence and personalization into everyday cooking!
        </p>

        {/* Key Highlights */}
        <h3> Key Highlights:</h3>
        <ul>
          <li> Add own ingredients, and the app will generate unique new recipes using AI</li>
          <li> Get personalized recipe suggestions based on your preferences (cuisine, diet, meals per day)</li>
          <li> Receive an estimated cost for each recipe</li>
          <li> Built with React Native, powered by Groq + LLaMA 3, and integrated with Firestore</li>
        </ul>

        {/* Tech Stack */}
        <p>
          This app is designed to make recipe discovery smarter, budget-friendly, and truly user-driven.
        </p>

        {/* Buttons */}
        <div className="buttons">
          <a
            href="https://lnkd.in/er7beMhr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:123456789/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

       
      </div>
    </div>
  );
};

export default Todo;
