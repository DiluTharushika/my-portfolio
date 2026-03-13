import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation speed
      once: false,    // trigger animations each time
      mirror: true,   // animate again on scroll up
      easing: "ease-in-out",
    });
  }, []);

  const tabVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 data-aos="fade-up">About Me</h2>

        <div className="about-tabs" data-aos="fade-up" data-aos-delay="200">
          <button
            className={`about-tab-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            Personal Info
          </button>
          <button
            className={`about-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Work Experience
          </button>
          <button
            className={`about-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        <div className="about-content-wrapper" data-aos="fade-up" data-aos-delay="400">
          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <motion.div
                key="about"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="tab-panel about-text-panel"
              >
                <div className="about-text-content">
                  <p>
                    Hi, I’m <span className="highlight-text">Dilu Tharushika</span>, and I have completed a Higher National Diploma in IT with a strong academic record. I am a motivated and self-driven learner, passionate about technology and development. I have skills in mobile application development, web development, and UI design, and I enjoy exploring new technologies to improve my expertise.
                  </p>
                  <p>
                    My goal is to secure an internship where I can apply my skills, gain practical experience, and grow as a professional in the IT industry.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="tab-panel timeline"
              >
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Intern Web, Mobile Developer</h3>
                    <h4>Selecta Marketing (Pvt) Ltd</h4>
                    <span className="timeline-date">Nov 2025 – Mar 2026</span>
                    <ul>
                      <li>Developed and maintained WordPress & WooCommerce websites, including themes, plugins, content, and e-commerce functionality.</li>
                      <li>Built responsive web interfaces using HTML, CSS, JavaScript, and basic PHP, with SEO and performance optimization.</li>
                      <li>Contributed to mobile application development using Flutter, collaborating with teams to deliver user-focused web and mobile solutions.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Full Stack Developer</h3>
                    <h4>Ministry Complex, Southern Province (Dakshinapaya)</h4>
                    <span className="timeline-date">Oct 2025 – Nov 2025</span>
                    <ul>
                      <li>Developed and deployed a responsive React.js web application for the Ministry Complex (Southern Province) using Firebase for authentication and database, and Vercel for hosting.</li>
                      <li>Managed version control and collaboration with Git & GitHub while implementing stakeholder requirements and feature updates.</li>
                      <li>Debugged issues and optimized performance and reliability across desktop and mobile devices.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="tab-panel timeline"
              >
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content edu-card">
                    <h3>Higher National Diploma in Information Technology</h3>
                    <h4>Sri Lanka Institute of Advanced Technological Education (SLIATE)</h4>
                    <ul className="edu-badges">
                      <li><strong>Course:</strong> HNDIT</li>
                      <li><strong>Current SGPA:</strong> 3.72</li>
                      <li><strong>GPA:</strong> Pending</li>
                    </ul>
                    <div className="edu-modules">
                      <h5>Modules Learned:</h5>
                      <ul>
                        <li>Programming Fundamentals</li>
                        <li>Object-Oriented Programming (OOP)</li>
                        <li>Web Development (HTML, CSS, JavaScript)</li>
                        <li>Database Management and SQL</li>
                        <li>Machine Learning Basics</li>
                        <li>Mobile Application Development</li>
                        <li>Software Engineering</li>
                        <li>System Analysis and Design</li>
                        <li>Project Management</li>
                        <li>Computer Networking Basics</li>
                        <li>Problem Solving and Debugging</li>
                        <li>Teamwork and Communication Skills</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content edu-card">
                    <h3>G.C.E Advanced Level</h3>
                    <h4>G/Anula Devi G.C</h4>
                    <ul className="edu-badges">
                      <li><strong>Status:</strong> Passed</li>
                      <li><strong>Stream:</strong> Physical Science</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default About;
