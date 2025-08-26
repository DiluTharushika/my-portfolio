import React from "react";
import "./pharmacy.css";

const Pharmacy = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        {/* Project Title */}
        <h2>
          Pharmacy Management System
        </h2>
{/* Buttons */}
        <div className="buttons">
          <a
            href="https://lnkd.in/er7beMhr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/posts/dilutharushika_webdevelopment-javascript-firebase-activity-7353720801738530816-IvT2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvVMygBNvffjB8H2yOIrJ0D6Q7Lm1QCH78"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        {/* Description */}
        <p>
          I developed a responsive pharmacy website using HTML, CSS, and JavaScript, integrated with Firebase for database management and Cloudinary for prescription image uploads.
        </p>

        {/* Key Highlights */}
        <h3> Key Highlights:</h3>
        <ul>
          <li> Separate User & Admin roles</li>
          <li> Users can upload prescriptions with delivery details</li>
          <li> Admins can view prescriptions, set total prices, and manage order status</li>
          <li> Fully responsive design for mobile and desktop</li>
        </ul>

        {/* Tech Stack */}
        <p>
           This project demonstrates basic full-stack integration for real-world use cases.
        </p>

        

       
      </div>
    </div>
  );
};

export default Pharmacy;
