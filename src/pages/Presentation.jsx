import React from "react";
import { motion } from "framer-motion";
import learningJourneyVideo from "../assets/LearningJourney.mp4";
import updatedLearningJourneyVideo from "../assets/Updated Learning Journey.mp4";
import reportPptVideo from "../assets/Report PPT-1.mp4";

export default function Presentation() {
  const videos = [
    {
      id: 1,
      title: "Learning Journey",
      src: learningJourneyVideo,
      description:
        "My original learning journey PowerPoint presentation",
    },
    {
      id: 2,
      title: "Updated Learning Journey",
      src: updatedLearningJourneyVideo,
      description:
        "Enhanced version of my learning journey presentation",
    },
    {
      id: 3,
      title: "Research Report Presentation",
      src: reportPptVideo,
      description:
        "Oral presentation of my academic research report",
    },
  ];

  return (
    <div
      className="presentation-container"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        padding: "80px 20px 40px",
        position: "relative",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(129, 140, 248, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(192, 132, 252, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Video Presentations
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#9ca3af",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Explore my learning journey and research presentations
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))",
                borderRadius: "20px",
                padding: "30px",
                backdropFilter: "blur(16px)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 12px 40px rgba(129, 140, 248, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Video Title */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#818cf8",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                {video.title}
              </h3>

              {/* Video Description */}
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "25px",
                  textAlign: "center",
                }}
              >
                {video.description}
              </p>

              {/* Video Player */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    backgroundColor: "#000",
                  }}
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
