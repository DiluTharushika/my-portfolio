import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./studentmgmt.css";

const StudentMgmt = () => {
  return (
    <motion.div 
      className="student-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="detail-bg-overlay"></div>
      
      <div className="detail-container">
        {/* Navigation */}
        <Link to="/#projects" className="back-btn-professional">
          <HiOutlineArrowLeft /> Back to Projects
        </Link>

        {/* Hero Section */}
        <header className="detail-hero">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            STUDENT MANAGEMENT SYSTEM
          </motion.h1>
          <motion.div 
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Java Swing Desktop Application with PostgreSQL CRUD Operations
          </motion.p>
        </header>

        {/* Main Content Grid */}
        <div className="detail-content-grid">
          {/* Left: Info Card */}
          <motion.div 
            className="detail-main-card"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <section className="detail-section">
              <h3>Overview</h3>
              <p>
                A comprehensive Student Management System built with Java Swing for the 
                front-end interface and PostgreSQL as the database backend. This desktop 
                application provides a complete solution for managing student records, 
                tracking academic marks, and performing essential administrative operations.
              </p>
              <p>
                The system implements full CRUD (Create, Read, Update, Delete) operations, 
                enabling administrators to efficiently manage student data. With features 
                like intelligent search, top-marks identification, and a clean dashboard 
                interface, it streamlines the entire student records workflow.
              </p>
            </section>

            <section className="detail-section">
              <h3>Key Features</h3>
              <div className="feature-cards-grid">
                <motion.div 
                  className="feature-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="feature-icon">➕</span>
                  <h4>Add Students</h4>
                  <p>Register new students with their personal details and academic marks into the system.</p>
                </motion.div>

                <motion.div 
                  className="feature-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="feature-icon">🔍</span>
                  <h4>Search Records</h4>
                  <p>Search and filter student records by name, ID, or marks for quick data retrieval.</p>
                </motion.div>

                <motion.div 
                  className="feature-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="feature-icon">🗑️</span>
                  <h4>Delete Records</h4>
                  <p>Remove student records from the database with confirmation prompts for data safety.</p>
                </motion.div>

                <motion.div 
                  className="feature-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <span className="feature-icon">🏆</span>
                  <h4>Find Top Marks</h4>
                  <p>Identify top-performing students by analyzing and ranking marks across the database.</p>
                </motion.div>

                <motion.div 
                  className="feature-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="feature-icon">📋</span>
                  <h4>View All Students</h4>
                  <p>Display all student records in an organized table view with sorting capabilities.</p>
                </motion.div>

                <motion.div 
                  className="feature-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <span className="feature-icon">✏️</span>
                  <h4>Update Records</h4>
                  <p>Edit and update existing student information and marks with real-time validation.</p>
                </motion.div>
              </div>
            </section>

            <section className="detail-section">
              <h3>Technical Highlights</h3>
              <ul className="highlights-modern-list">
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
                  Full CRUD Operations (Create, Read, Update, Delete)
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                  PostgreSQL Database Integration with JDBC Driver
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
                  Java Swing GUI with Professional Dashboard Layout
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }}>
                  Dynamic Search & Filter for Student Records
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}>
                  Top Marks Ranking & Academic Analytics
                </motion.li>
                <motion.li initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}>
                  Input Validation & Error Handling
                </motion.li>
              </ul>
            </section>

            <section className="detail-section">
              <h3>Database Schema</h3>
              <div className="db-schema-visual">
                <div className="schema-table">
                  <h5>📦 students</h5>
                  <div className="schema-fields">
                    <div className="schema-field">
                      student_id <span className="field-type">SERIAL PK</span>
                    </div>
                    <div className="schema-field">
                      first_name <span className="field-type">VARCHAR</span>
                    </div>
                    <div className="schema-field">
                      last_name <span className="field-type">VARCHAR</span>
                    </div>
                    <div className="schema-field">
                      email <span className="field-type">VARCHAR</span>
                    </div>
                    <div className="schema-field">
                      marks <span className="field-type">NUMERIC</span>
                    </div>
                    <div className="schema-field">
                      grade <span className="field-type">VARCHAR</span>
                    </div>
                    <div className="schema-field">
                      created_at <span className="field-type">TIMESTAMP</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Right: Sidebar / Links */}
          <motion.div 
            className="detail-sidebar"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="sidebar-card">
              <h4>Project Links</h4>
              <div className="detail-action-links">
                <a href="https://github.com/DiluTharushika/Advanced-Student-Management-Dashboard.git" target="_blank" rel="noopener noreferrer" className="action-link-btn github-link">
                  <FiGithub /> Source Code
                </a>
                
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Project Type</h4>
              <p className="role-tag">Desktop Application</p>
              <h4>Tech Stack</h4>
              <div className="tech-pills">
                <span>Java</span>
                <span>Java Swing</span>
                <span>PostgreSQL</span>
                <span>JDBC</span>
                <span>IntelliJ IDEA</span>
              </div>
              <h4 style={{ marginTop: "20px" }}>Status</h4>
              <p className="status-tag">Completed / V1.0</p>
            </div>

            <div className="sidebar-card">
              <h4>Operations</h4>
              <div className="tech-pills">
                <span>Create</span>
                <span>Read</span>
                <span>Update</span>
                <span>Delete</span>
                <span>Search</span>
                <span>Top Marks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentMgmt;
