import React, { useState, useEffect } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/dilutharushika02@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <h2 data-aos="fade-up">Contact Me</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Feel free to reach out to me for collaborations, projects, or inquiries.
        </p>

        <div className="contact-content">
          {/* Contact Details */}
          <div className="contact-info" data-aos="fade-right" data-aos-delay="300">
            <h3>Get in Touch</h3>
            <p>Email: dilutharushika02@gmail.com</p>
            <p>Phone: +94 77 211 3068</p>
            <p>Location: Sri Lanka</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left" data-aos-delay="300">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
