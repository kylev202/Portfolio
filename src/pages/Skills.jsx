import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SR1Image from "../assets/SR1.png";
import SR2Image from "../assets/SR2.png";
import AAImage from "../assets/AA.png";

export default function Skills() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");
  const [hoveredDot, setHoveredDot] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images array
  const galleryImages = [
    { src: SR1Image, alt: "Self Reflection 1" },
    { src: SR2Image, alt: "Self Reflection 2" },
    { src: AAImage, alt: "Academic Article" },
  ];

  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine which section is in view
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.5 &&
          rect.bottom > window.innerHeight * 0.3
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isGalleryOpen) return;

      switch (e.key) {
        case "Escape":
          setIsGalleryOpen(false);
          break;
        case "ArrowLeft":
          e.preventDefault();
          setCurrentImageIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
          );
          break;
        case "ArrowRight":
          e.preventDefault();
          setCurrentImageIndex((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
          );
          break;
      }
    };

    if (isGalleryOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isGalleryOpen, galleryImages.length]);

  // Gallery navigation functions
  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Floating particles animation component
  const FloatingParticles = () => (
    <div className="particles-container">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 0.6 + 0.2,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [
              Math.random() * 0.3 + 0.1,
              Math.random() * 0.6 + 0.3,
              Math.random() * 0.3 + 0.1,
            ],
            scale: [
              Math.random() * 0.4 + 0.2,
              Math.random() * 0.8 + 0.4,
              Math.random() * 0.4 + 0.2,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? "120px" : i % 3 === 1 ? "80px" : "160px",
            height: i % 3 === 0 ? "120px" : i % 3 === 1 ? "80px" : "160px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(129, 140, 248, ${
              Math.random() * 0.1 + 0.05
            }) 0%, transparent 70%)`,
            filter: "blur(15px)",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );

  // Navigation sections data
  const navSections = [
    { id: "intro", label: "Introduction" },
    { id: "reflection", label: "Updated Self-Reflection" },
    { id: "summary", label: "UpdatedArticle Summary" },
  ];

  // Gallery Modal Component
  const GalleryModal = () => (
    <AnimatePresence>
      {isGalleryOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeGallery}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={closeGallery}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              backdropFilter: "blur(10px)",
              zIndex: 1001,
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            ×
          </motion.button>

          {/* Previous button */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              backdropFilter: "blur(10px)",
              zIndex: 1001,
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            ‹
          </motion.button>

          {/* Next button */}
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              backdropFilter: "blur(10px)",
              zIndex: 1001,
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            ›
          </motion.button>

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              cursor: "default",
            }}
          >
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
              }}
            />
          </motion.div>

          {/* Image counter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "25px",
              fontSize: "14px",
              fontWeight: "500",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {currentImageIndex + 1} / {galleryImages.length}
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            style={{
              position: "absolute",
              bottom: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Use arrow keys or buttons to navigate • Press ESC to close
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 20px 40px",
        background: "transparent",
        color: "#e5e7eb",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Gallery Modal */}
      <GalleryModal />

      {/* Background animated elements */}
      <FloatingParticles />

      {/* Hero header section */}
      <motion.header
        style={{
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          marginBottom: "60px",
          padding: "0 20px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Parallax background effect */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(129, 140, 248, 0.15), transparent 60%)",
            zIndex: 0,
            transform: `translateY(${scrollY * 0.15}px)`,
            opacity: 0.5,
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ textAlign: "center" }}
          >
            <motion.h1
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: "800",
                background:
                  "linear-gradient(135deg, #e5e7eb 30%, #818cf8 70%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "30px",
                textShadow: "0 4px 30px rgba(129, 140, 248, 0.5)",
                letterSpacing: "0.02em",
              }}
            >
              Academic Writing Skills
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, delay: 1 }}
              style={{
                height: "4px",
                background:
                  "linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.8), transparent)",
                margin: "0 auto 40px",
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                fontSize: "1.3rem",
                color: "rgba(255,255,255,0.85)",
                maxWidth: "700px",
                margin: "0 auto 20px",
                lineHeight: 1.6,
                fontWeight: 400,
                textShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              Here you can find all of my academic writing skills and essays,
              including self-reflection essays and summaries of academic
              articles.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            Scroll to read
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.header>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Navigation text menu */}
        <div
          style={{
            position: "fixed",
            right: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 100,
          }}
        >
          {navSections.map((section) => (
            <motion.div
              key={section.id}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
              onClick={() =>
                document
                  .getElementById(section.id)
                  .scrollIntoView({ behavior: "smooth" })
              }
              onMouseEnter={() => setHoveredDot(section.id)}
              onMouseLeave={() => setHoveredDot(null)}
              whileHover={{ x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Navigation text */}
              <motion.span
                initial={{ opacity: 0.7 }}
                animate={{
                  opacity: activeSection === section.id ? 1 : 0.7,
                  color:
                    activeSection === section.id
                      ? "#818cf8"
                      : hoveredDot === section.id
                      ? "#a78bfa"
                      : "#e5e7eb",
                  scale: activeSection === section.id ? 1.05 : 1,
                }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 15px rgba(129, 140, 248, 0.6)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: "1rem",
                  fontWeight: activeSection === section.id ? "600" : "500",
                  whiteSpace: "nowrap",
                  textAlign: "right",
                  letterSpacing: "0.025em",
                  position: "relative",
                  paddingRight: "15px",
                }}
              >
                {section.label}

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      activeSection === section.id
                        ? "100%"
                        : hoveredDot === section.id
                        ? "80%"
                        : "0%",
                    opacity:
                      activeSection === section.id || hoveredDot === section.id
                        ? 1
                        : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    bottom: "-3px",
                    right: "15px",
                    height: "2px",
                    background:
                      activeSection === section.id
                        ? "linear-gradient(90deg, transparent, #818cf8, transparent)"
                        : "linear-gradient(90deg, transparent, #a78bfa, transparent)",
                    borderRadius: "1px",
                  }}
                />

                {/* Glowing effect on active */}
                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.3, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        inset: "-5px",
                        background:
                          "radial-gradient(circle, rgba(129, 140, 248, 0.2) 0%, transparent 70%)",
                        borderRadius: "8px",
                        zIndex: -1,
                        filter: "blur(10px)",
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.span>

              {/* Active indicator dot */}
              <motion.div
                animate={{
                  scale: activeSection === section.id ? 1.2 : 0.8,
                  opacity: activeSection === section.id ? 1 : 0.4,
                  backgroundColor:
                    activeSection === section.id
                      ? "#818cf8"
                      : hoveredDot === section.id
                      ? "#a78bfa"
                      : "rgba(255, 255, 255, 0.3)",
                }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 15px rgba(129, 140, 248, 0.6)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Introduction section */}
        <section id="intro" style={{ marginBottom: "120px" }}>
          {/* Content is already visible from the header */}
        </section>

        {/* Self Reflection Essay Section */}
        <motion.section
          id="reflection"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          style={{
            marginBottom: "100px",
            position: "relative",
          }}
        >
          {/* Decorative animated orb */}
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 70%)",
              top: "-100px",
              left: "-150px",
              zIndex: -1,
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              padding: "50px",
              borderRadius: "20px",
              backgroundColor: "rgba(30, 30, 30, 0.7)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(129, 140, 248, 0.3)",
              boxShadow:
                "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(129, 140, 248, 0.15)",
              position: "relative",
              overflow: "hidden",
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Animated gradient border */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(129, 140, 248, 0.8) 0%, rgba(167, 139, 250, 0.4) 50%, rgba(129, 140, 248, 0.8) 100%)",
                  "linear-gradient(180deg, rgba(129, 140, 248, 0.8) 0%, rgba(167, 139, 250, 0.4) 50%, rgba(129, 140, 248, 0.8) 100%)",
                  "linear-gradient(270deg, rgba(129, 140, 248, 0.8) 0%, rgba(167, 139, 250, 0.4) 50%, rgba(129, 140, 248, 0.8) 100%)",
                  "linear-gradient(0deg, rgba(129, 140, 248, 0.8) 0%, rgba(167, 139, 250, 0.4) 50%, rgba(129, 140, 248, 0.8) 100%)",
                  "linear-gradient(90deg, rgba(129, 140, 248, 0.8) 0%, rgba(167, 139, 250, 0.4) 50%, rgba(129, 140, 248, 0.8) 100%)",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
              }}
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "40px",
                background: "linear-gradient(135deg, #e5e7eb 30%, #818cf8 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 20px rgba(129, 140, 248, 0.4)",
                position: "relative",
                display: "inline-block",
              }}
            >
              Updated Self-Reflection Essay
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false }}
                style={{
                  height: "3px",
                  background: "rgba(129, 140, 248, 0.5)",
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                }}
              />
            </motion.h2>

            {/* Essay paragraphs with staggered reveal */}
            <div
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.9",
                color: "#e0e2e8",
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 * 0.15 }}
                viewport={{ once: false, margin: "-100px" }}
                style={{ marginBottom: "25px" }}
              >
                2025 has been a life-changing year for me. A new school, a new
                place, new friends, and new teachers all marked the beginning of
                my studies at Swinburne University as a Foundation student. This
                essay reflects on my first semester, focusing on both academic
                and social experiences, the challenges I encountered, and the
                lessons that will guide me in the future.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 * 0.15 }}
                viewport={{ once: false, margin: "-100px" }}
                style={{ marginBottom: "25px" }}
              >
                My studies at Swinburne have not only been about subjects and
                assignments but also about building friendships and joining
                activities. Everyone is open to casual conversations and group
                gatherings, which has helped me quickly form a supportive
                network. Among the many clubs, the Vietnamese Club has been my
                main community. Through its events such as Boardgame Night,
                basketball tournaments, and the Ball Night. I have expanded my
                social network, developed new skills, and created lasting
                memories. This positive lifestyle gave me the energy to face
                challenges in my studies and aim for high grades.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 * 0.15 }}
                viewport={{ once: false, margin: "-100px" }}
                style={{ marginBottom: "25px" }}
              >
                In terms of academic learning, Global Communication and Academic
                Skills was a subject that initially seemed unnecessary for me to
                attend regularly. However, I came to value the content,
                especially the teachers’ supportive approach and useful
                feedback. The graded tasks were clear and manageable, and oral
                feedback often helped me refine my writing. Attending classes
                also allowed me to gain valuable experiences beyond just
                completing assignments.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3 * 0.15 }}
                viewport={{ once: false, margin: "-100px" }}
                style={{ marginBottom: "25px" }}
              >
                On the other hand, Foundation and General Mathematics became my
                favorite subjects. Although challenging, they reminded me of the
                motivation and rewards I enjoyed back in my home country. At
                times, I struggled to keep up, but the teachers were patient and
                always willing to explain concepts until I understood. My
                friends and I also supported each other through study groups,
                which made learning both effective and enjoyable. These combined
                efforts gave me the confidence to continue improving.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4 * 0.15 }}
                viewport={{ once: false, margin: "-100px" }}
                style={{ marginBottom: 0 }}
              >
                To conclude, my first semester at Swinburne was both demanding
                and rewarding. I developed academically, socially, and
                personally, even though I did not always reach the high grades I
                hoped for in every subject. More importantly, I built
                friendships, learned to rely on supportive teachers, and gained
                resilience in facing challenges. I believe the coming semester
                will allow me to achieve stronger results while continuing to
                create meaningful memories and experiences.
              </motion.p>
            </div>

            {/* Original Version Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginTop: "40px",
                marginBottom: "30px",
                background: "linear-gradient(135deg, #e5e7eb 30%, #818cf8 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 15px rgba(129, 140, 248, 0.3)",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              Original Version
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: false }}
                style={{
                  height: "2px",
                  background: "rgba(129, 140, 248, 0.4)",
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "150px",
                }}
              />
            </motion.h3>

            {/* Self Reflection Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, margin: "-100px" }}
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                onClick={() => openGallery(0)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(129, 140, 248, 0.3)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                  background: "rgba(30, 30, 30, 0.5)",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={SR1Image}
                  alt="Self Reflection 1"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    borderRadius: "8px",
                    filter: "brightness(0.9) contrast(1.1)",
                  }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => openGallery(1)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(129, 140, 248, 0.3)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                  background: "rgba(30, 30, 30, 0.5)",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={SR2Image}
                  alt="Self Reflection 2"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    borderRadius: "8px",
                    filter: "brightness(0.9) contrast(1.1)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Summary of Academic Article Section */}
        <motion.section
          id="summary"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          style={{
            marginBottom: "80px",
            position: "relative",
          }}
        >
          {/* Decorative animated orb */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)",
              bottom: "-200px",
              right: "-200px",
              zIndex: -1,
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              padding: "50px",
              borderRadius: "20px",
              backgroundColor: "rgba(30, 30, 30, 0.7)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(129, 140, 248, 0.3)",
              boxShadow:
                "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(129, 140, 248, 0.15)",
              position: "relative",
              overflow: "hidden",
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Animated gradient border */}
            <motion.div
              animate={{
                background: [
                  "linear-gradient(270deg, rgba(167, 139, 250, 0.8) 0%, rgba(129, 140, 248, 0.4) 50%, rgba(167, 139, 250, 0.8) 100%)",
                  "linear-gradient(360deg, rgba(167, 139, 250, 0.8) 0%, rgba(129, 140, 248, 0.4) 50%, rgba(167, 139, 250, 0.8) 100%)",
                  "linear-gradient(90deg, rgba(167, 139, 250, 0.8) 0%, rgba(129, 140, 248, 0.4) 50%, rgba(167, 139, 250, 0.8) 100%)",
                  "linear-gradient(180deg, rgba(167, 139, 250, 0.8) 0%, rgba(129, 140, 248, 0.4) 50%, rgba(167, 139, 250, 0.8) 100%)",
                  "linear-gradient(270deg, rgba(167, 139, 250, 0.8) 0%, rgba(129, 140, 248, 0.4) 50%, rgba(167, 139, 250, 0.8) 100%)",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
              }}
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "40px",
                background: "linear-gradient(135deg, #e5e7eb 30%, #a78bfa 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 20px rgba(167, 139, 250, 0.4)",
                position: "relative",
                display: "inline-block",
              }}
            >
              Updated Summary of Academic Article
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false }}
                style={{
                  height: "3px",
                  background: "rgba(167, 139, 250, 0.5)",
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                }}
              />
            </motion.h2>

            {/* Article summary with highlight animation */}
            <div
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.9",
                color: "#e0e2e8",
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 * 0.15 }}
                viewport={{ once: false, margin: "-100px" }}
                whileHover={{
                  backgroundColor: "rgba(167, 139, 250, 0.05)",
                  boxShadow: "0 0 0 1px rgba(167, 139, 250, 0.15)",
                  borderRadius: "8px",
                }}
                style={{
                  marginBottom: "25px",
                  padding: "10px",
                  transition:
                    "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                The journal article by Amar (2025) highlights major legislative
                reforms in Mongolia that have captured national attention,
                particularly the rewriting of mining policies. Supporters view
                the changes as a way to collect more revenue from natural
                resources, promising improved equality in income distribution
                and contributing to the development of a National Wealth Fund.
                However, critics warn that investor confidence may decline due
                to instability and uncertainty. The article notes that the
                number of mining sites has tripled in recent years, and mining
                now accounts for one-quarter of Mongolia’s economy, which
                amplifies the importance of policy stability. Despite these
                developments, the reforms have raised concerns about
                transparency and accountability, creating further challenges for
                the country. Specialists emphasize the importance of community
                consultation and propose exploring flexible ownership models to
                safeguard economic security. The article concludes that the
                success or failure of these reforms will determine whether
                Mongolia achieves sustainable mineral wealth or requires a
                fundamental policy rethink.
              </motion.p>
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                marginTop: "40px",
                marginBottom: "30px",
                background: "linear-gradient(135deg, #e5e7eb 30%, #818cf8 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 15px rgba(129, 140, 248, 0.3)",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                width: "100%",
              }}
            >
              Original Version
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: false }}
                style={{
                  height: "2px",
                  background: "rgba(129, 140, 248, 0.4)",
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "150px",
                }}
              />
            </motion.h3>
            {/* Academic Article Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, margin: "-100px" }}
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 3 }}
                transition={{ duration: 0.3 }}
                onClick={() => openGallery(2)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(167, 139, 250, 0.3)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                  background: "rgba(30, 30, 30, 0.5)",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={AAImage}
                  alt="Academic Article"
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    borderRadius: "8px",
                    filter: "brightness(0.9) contrast(1.1)",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "rgba(129, 140, 248, 0.8)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              border: "none",
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 15px rgba(129, 140, 248, 0.3)",
              zIndex: 100,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(129, 140, 248, 1)",
              boxShadow:
                "0 4px 15px rgba(0, 0, 0, 0.2), 0 0 20px rgba(129, 140, 248, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14L12 9L17 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
