import React from "react";
import "./noteapp.css";
import demoVideo from "../../../assets/note.mp4"; // adjust path based on your file structure

const NoteApp = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {/* Project Title */}
        <h2> Simple Note App</h2>

        {/* Demo Video */}
        <div className="demo-video">
          <video controls>
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <a
            href="https://github.com/DiluTharushika/note-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          
        </div>

        {/* Description */}
        <p>
          I built a simple note-taking app using React Native, Expo, and Firebase.
          This app allows users to create, edit, and delete notes while saving the
          date and time each note was created.
        </p>

        {/* Key Highlights */}
        <h3> Key Highlights:</h3>
        <ul>
          <li> Users can add, edit, and delete notes easily</li>
          <li> Each note shows the created date and time</li>
          <li> Notes are stored securely in Firebase Firestore</li>
          <li> Clean and simple UI built with React Native + Expo</li>
        </ul>

        {/* Tech Stack */}
        <p>
          This project demonstrates CRUD operations with Firebase and a mobile-first
          UI using React Native & Expo.
        </p>
      </div>
    </div>
  );
};

export default NoteApp;
