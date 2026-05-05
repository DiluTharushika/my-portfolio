import React, { useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation speed
      once: false,    // trigger animations each time
      mirror: true,   // animate again on scroll up
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <header className="about-header" data-aos="fade-up">
          <span className="section-label">DISCOVER</span>
          <h2>Professional Journey</h2>
          <div className="about-underline"></div>
        </header>

        <div className="about-grid">
          {/* Left Column: Summary & Stats */}
          <div className="about-left" data-aos="fade-right" data-aos-delay="200">
            <div className="about-summary-card">
              <div className="summary-icon-wrapper">
                <FaCode className="summary-icon" />
              </div>
              <h3>Full Stack Developer</h3>
              <p>
                Specialized in building scalable, high-performance web and mobile applications. With a strong foundation in modern JavaScript frameworks and backend architecture, I transform complex requirements into elegant, user-centric digital solutions.
              </p>
              <p>
                My expertise spans across the entire development lifecycle—from conceptualizing intuitive UI/UX designs to architecting secure, database-driven backends. I am passionate about clean code, continuous integration, and leveraging cutting-edge technologies to deliver robust software that drives business value.
              </p>
            </div>
            
            <div className="about-stats-container">
              <div className="stat-card">
                <h4 className="stat-number">15+</h4>
                <span className="stat-text">Projects Completed</span>
              </div>
              <div className="stat-card">
                <h4 className="stat-number">100%</h4>
                <span className="stat-text">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline (Experience & Education) */}
          <div className="about-right" data-aos="fade-left" data-aos-delay="400">
            <div className="timeline-container">
              
              <h3 className="timeline-title">
                <FaBriefcase className="title-icon" /> Work Experience
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>Intern Web, Mobile Developer</h3>
                      <span className="timeline-date">Nov 2025 – Mar 2026</span>
                    </div>
                    <h4>Selecta Marketing (Pvt) Ltd</h4>
                    <ul>
                      <li>Developed and maintained WordPress & WooCommerce websites, including themes, plugins, content, and e-commerce functionality.</li>
                      <li>Built responsive web interfaces using HTML, CSS, JavaScript, and basic PHP, with SEO and performance optimization.</li>
                      <li>Contributed to mobile application development using Flutter, collaborating with teams to deliver user-focused solutions.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>Full Stack Developer</h3>
                      <span className="timeline-date">Oct 2025 – Nov 2025</span>
                    </div>
                    <h4>Ministry Complex, Southern Province (Dakshinapaya)</h4>
                    <ul>
                      <li>Developed and deployed a responsive React.js web application for the Ministry Complex using Firebase and Vercel.</li>
                      <li>Managed version control and collaboration with Git & GitHub while implementing stakeholder requirements.</li>
                      <li>Debugged issues and optimized performance and reliability across desktop and mobile devices.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="timeline-title education-title">
                <FaGraduationCap className="title-icon" /> Education
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content edu-card">
                    <h3>Higher National Diploma in Information Technology</h3>
                    <h4>Sri Lanka Institute of Advanced Technological Education (SLIATE)</h4>
                    <ul className="edu-badges">
                      <li><strong>Course:</strong> HNDIT</li>
                      <li><strong>Current SGPA:</strong> 3.72</li>
                    </ul>
                    <div className="edu-modules">
                      <h5>Core Modules:</h5>
                      <div className="modules-grid">
                        <span>OOP & Programming</span>
                        <span>Web Development</span>
                        <span>Database Management</span>
                        <span>Mobile App Dev</span>
                        <span>System Analysis</span>
                        <span>Software Engineering</span>
                      </div>
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
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
