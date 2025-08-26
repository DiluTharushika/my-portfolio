import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Sections
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/About/about.jsx";
import Skill from "./components/skills/skill.jsx";
import Project from "./components/projects/project.jsx";
import Certificate from "./components/certificates/certificate.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

// Project Detail Pages
import Recipe from "./components/projects/recipe/recipe.jsx";
import Pharmacy from "./components/projects/pharmacy/pharmacy.jsx" 
import Game from "./components/projects/game/game.jsx";
import Cafe from "./components/projects/cafe/cafe.jsx";
import Filmhall from "./components/projects/filmhall/filmhall.jsx";
import Todo from "./components/projects/todo/todo.jsx";
// Later you can add Pharmacy, Games, Cafe, Film, ToDo, etc.

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Portfolio Sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skill />
              <Project />
              <Certificate />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Project Detail Pages */}
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/pharmacy" element={<Pharmacy/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/cafe" element={<Cafe/>}/>
        <Route path="/film" element={<Filmhall/>}/>
        <Route path="/todo" element={<Todo/>}/>
        {/* Example: <Route path="/pharmacy" element={<Pharmacy />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
