import React, { useState, useEffect } from "react";
import "./certificate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import cert1 from "../../assets/AI.jpg";
import cert2 from "../../assets/javaIntro.jpg";
import cert3 from "../../assets/javaIntermediate.png";
import cert4 from "../../assets/sql.png";
import cert5 from "../../assets/UI-Alison.png";
const categories = ["All", "Java", "Databases", "AI","UI/UX"];

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
      <div className="certificates-container" data-aos="fade-up">
        <h2 data-aos="fade-up">My Certificates</h2>

        {/* Category Filters */}
        <div className="cert-categories" data-aos="fade-up" data-aos-delay="200">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates List */}
        <div className="certificates-list">
          {filteredCertificates.map((cert, index) => (
            <div
              className="certificate-card"
              key={index}
              onClick={() => setSelectedCert(cert)}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <img src={cert.image} alt={cert.title} />
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Zoom Preview */}
      {selectedCert && (
        <div className="certificate-modal" onClick={() => setSelectedCert(null)}>
          <img src={selectedCert.image} alt={selectedCert.title} />
        </div>
      )}
    </section>
  );
};

export default Certificate;
