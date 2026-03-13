import React, { useState, useEffect } from "react";
import "./certificate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

import cert1 from "../../assets/AI.jpg";
import cert2 from "../../assets/javaIntro.jpg";
import cert3 from "../../assets/javaIntermediate.png";
import cert4 from "../../assets/sql.png";
import cert5 from "../../assets/UI-Alison.png";

const categories = ["All", "Java", "Databases", "AI", "UI/UX"];

const certificates = [
  { title: "AI in Data Analysis", issuer: "SoloLearn", category: "AI", image: cert1 },
  { title: "UI/UX Design", issuer: "Alison", category: "UI/UX", image: cert5 },
  { title: "Java Introduction", issuer: "SoloLearn", category: "Java", image: cert2 },
  { title: "Java Intermediate", issuer: "SoloLearn", category: "Java", image: cert3 },
  { title: "Introduction to SQL", issuer: "SoloLearn", category: "Databases", image: cert4 },
];

const Certificate = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">
        <header className="cert-header" data-aos="fade-up">
          <span className="section-subtitle">ACHIEVEMENTS</span>
          <h2>Professional Certifications</h2>
          <div className="cert-divider"></div>
        </header>

        {/* Category Filters */}
        <nav className="cert-filters" data-aos="fade-up" data-aos-delay="200">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={selectedCategory === cat ? "filter-btn active" : "filter-btn"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Certificates Grid */}
        <motion.div 
          layout
          className="certificates-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="professional-cert-card"
                key={cert.title}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="cert-image-wrapper">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                  <div className="cert-overlay">
                    <span className="view-btn">Full Preview</span>
                  </div>
                </div>
                <div className="cert-content">
                  <div className="cert-meta">
                    <span className="cert-tag">{cert.category}</span>
                    <span className="issuer-badge">{cert.issuer}</span>
                  </div>
                  <h3>{cert.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Structured Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="certificate-modal" 
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="professional-modal-box"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-top">
                <h3>{selectedCert.title}</h3>
                <button className="close-cert" onClick={() => setSelectedCert(null)}>×</button>
              </div>
              <div className="modal-image-container">
                <img src={selectedCert.image} alt={selectedCert.title} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;
