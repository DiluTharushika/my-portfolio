import React, { useState, useEffect } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formsubmit.co/dilutharushika02@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email Me",
      value: "dilutharushika02@gmail.com",
      link: "mailto:dilutharushika02@gmail.com"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Me",
      value: "+94 77 211 3068",
      link: "tel:+94772113068"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Sri Lanka",
      link: "#"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <header className="contact-header" data-aos="fade-up">
          <span className="section-label">CONTACT ME</span>
          <h2>Get In Touch</h2>
          <div className="contact-underline"></div>
        </header>

        <div className="contact-wrapper">
          {/* Contact Cards */}
          <motion.div 
            className="contact-sidebar"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {contactDetails.map((detail, index) => (
              <motion.a
                href={detail.link}
                key={index}
                className="contact-card-mini"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="card-icon-box">{detail.icon}</div>
                <div className="card-text-box">
                  <h4>{detail.title}</h4>
                  <p>{detail.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <form className="professional-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <motion.div 
                  className="input-box"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Full Name</label>
                  <div className="input-line"></div>
                </motion.div>
                <motion.div 
                  className="input-box"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Email Address</label>
                  <div className="input-line"></div>
                </motion.div>
              </div>
              
              <motion.div 
                className="input-box message-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder=" "
                ></textarea>
                <label>Your Message</label>
                <div className="input-line"></div>
              </motion.div>

              <motion.button 
                type="submit" 
                className={`submit-btn-premium ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && <FaPaperPlane className="btn-icon" />}
              </motion.button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="form-feedback success"
                  >
                    <FaCheckCircle /> Your message reached my galaxy!
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="form-feedback error"
                  >
                    Communication error. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
