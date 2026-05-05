import React, { useState, useEffect, useCallback } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Scroll detection for navbar glass effect transition
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    // Only track sections on the main page
    if (location.pathname !== "/" && location.pathname !== "") return;

    const sectionIds = ["home", "about", "skills", "projects", "certificates", "contact"];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { to: "/#home", label: "Home", id: "home" },
    { to: "/#about", label: "About", id: "about" },
    { to: "/#skills", label: "Skills", id: "skills" },
    { to: "/#projects", label: "Projects", id: "projects" },
    { to: "/#certificates", label: "Certificates", id: "certificates" },
    { to: "/#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${open ? "navbar--open" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link smooth to="/#home" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-text">
            Dilu<span className="navbar__logo-accent"> Tharushika</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className={`navbar__links ${open ? "navbar__links--active" : ""}`}>
          {navLinks.map((link, index) => (
            <li key={link.id} className="navbar__item" style={{ "--item-index": index }}>
              <Link
                smooth
                to={link.to}
                className={`navbar__link ${activeSection === link.id ? "navbar__link--active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <span className="navbar__link-text">{link.label}</span>
                <span className="navbar__link-indicator" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Toggle */}
        <button
          className={`navbar__hamburger ${open ? "navbar__hamburger--active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
