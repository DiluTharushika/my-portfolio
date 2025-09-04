import React from "react";
import "./todo.css";

// Import project screenshot
import todoss from "../../../assets/todoss.png" // adjust path based on your file structure";

const Todo = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {/* Project Title */}
        <h2>To-Do Mobile Application</h2>
 {/* Buttons */}
        <div className="buttons">
          <a
            href="https://github.com/DiluTharushika/todo-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        {/* Description */}
        <p>
          Excited to share my latest project — a mobile To-Do app built with
          React Native (Expo) that helps users organize their tasks, boost
          productivity, and stay on top of their daily activities!
        </p>

        {/* Key Highlights */}
        <h3> Key Highlights:</h3>
        <ul>
          <li>Add, edit, and delete tasks with ease through a clean and intuitive UI</li>
          <li>Mark tasks as complete or pending to track progress effectively</li>
          <li>Organize tasks with categories, priorities, and due dates</li>
          <li>Sync tasks in real-time across devices using Firebase</li>
          <li>
            Built with React Native (Expo) and Firebase for seamless mobile
            performance
          </li>
        </ul>

        {/* Tech Stack */}
        <p>
          This To-Do app is designed to make task management smarter, more
          organized, and accessible anywhere, leveraging React Native (Expo) for
          smooth mobile experience and Firebase for real-time data
          synchronization.
        </p>

        {/* Screenshot */}
        <h3>Project Screenshot:</h3>
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

export default Todo;
