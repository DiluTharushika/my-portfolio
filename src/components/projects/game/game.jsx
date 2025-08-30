import React, { useState } from "react";
import "./game.css";

const Game = () => {
  const [activeTab, setActiveTab] = useState("ticTacToe");

  const games = {
    ticTacToe: {
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game built with React JS. Challenge your friends or AI!",
      highlights: [
        "Interactive 3x3 grid",
        "Two-player mode",
        "Responsive design",
      ],
      github: "https://github.com/yourusername/tic-tac-toe",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:123456789/",
    },
    memoryCard: {
      title: "Memory Card Game",
      description:
        "A fun memory card matching game built with React JS. Test your memory skills!",
      highlights: [
        "Flip and match cards",
        "Score tracking",
        "Responsive layout",
      ],
      github: "https://github.com/yourusername/memory-card-game",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:123456789/",
    },
  };

  const currentGame = games[activeTab];

  return (
    <div className="recipe-container">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "ticTacToe" ? "active" : ""}
          onClick={() => setActiveTab("ticTacToe")}
        >
          Tic Tac Toe
        </button>
        <button
          className={activeTab === "memoryCard" ? "active" : ""}
          onClick={() => setActiveTab("memoryCard")}
        >
          Memory Card Game
        </button>
      </div>

      {/* Game Card */}
      <div className="recipe-card">
        <h2>{currentGame.title}</h2>
        <p>{currentGame.description}</p>

        <h3>Key Highlights:</h3>
        <ul>
          {currentGame.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="buttons">
          <a href={currentGame.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Game;
