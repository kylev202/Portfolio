import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_2jacr4i", // Replace with your EmailJS service ID
        "template_0thzrd7", // Replace with your EmailJS template ID
        form.current,
        "eDWHWGUKgOE2VLjMz" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitting(false);
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });

          // Reset status after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setIsSubmitting(false);
          setSubmitStatus("error");
          setErrorMessage(
            "Failed to send your message. Please try again later."
          );

          // Reset error status after 5 seconds
          setTimeout(() => {
            setSubmitStatus(null);
            setErrorMessage("");
          }, 5000);
        }
      );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "30px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Get in Touch
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "30px",
            color: "#ddd",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          Feel free to reach out for any questions or feedback. I look forward
          to hearing from you!
        </p>

        {submitStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              padding: "20px",
              background: "rgba(21, 128, 61, 0.2)",
              borderRadius: "8px",
              marginBottom: "20px",
              textAlign: "center",
              color: "#4ade80",
            }}
          >
            Thank you for your message! I'll get back to you soon.
          </motion.div>
        ) : submitStatus === "error" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              padding: "20px",
              background: "rgba(220, 38, 38, 0.2)",
              borderRadius: "8px",
              marginBottom: "20px",
              textAlign: "center",
              color: "#f87171",
            }}
          >
            {errorMessage}
          </motion.div>
        ) : null}

        <form ref={form} onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "1rem",
                color: "#ddd",
              }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: "1rem",
                backgroundColor: "rgba(30, 30, 30, 0.8)",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                outline: "none",
                transition: "all 0.3s",
              }}
              className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "1rem",
                color: "#ddd",
              }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: "1rem",
                backgroundColor: "rgba(30, 30, 30, 0.8)",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                outline: "none",
                transition: "all 0.3s",
              }}
              className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "1rem",
                color: "#ddd",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: "1rem",
                backgroundColor: "rgba(30, 30, 30, 0.8)",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "8px",
                resize: "vertical",
                outline: "none",
                transition: "all 0.3s",
              }}
              className="focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "14px 32px",
                fontSize: "1.1rem",
                fontWeight: "600",
                backgroundColor: "rgba(129, 140, 248, 0.8)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: isSubmitting ? "wait" : "pointer",
                transition: "all 0.3s",
                backdropFilter: "blur(10px)",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
