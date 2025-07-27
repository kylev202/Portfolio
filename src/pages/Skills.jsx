import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");
  const [hoveredDot, setHoveredDot] = useState(null);

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
    { id: "reflection", label: "Self Reflection" },
    { id: "summary", label: "Article Summary" },
  ];

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
        {/* Navigation dots */}
        <div
          style={{
            position: "fixed",
            right: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 100,
          }}
        >
          {navSections.map((section) => (
            <div
              key={section.id}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              onMouseEnter={() => setHoveredDot(section.id)}
              onMouseLeave={() => setHoveredDot(null)}
            >
              <AnimatePresence>
                {hoveredDot === section.id && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: "auto" }}
                    exit={{ opacity: 0, x: 10, width: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: "absolute",
                      right: "24px",
                      backgroundColor: "transparent",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {section.label}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className={`nav-dot ${
                  activeSection === section.id ? "active" : ""
                }`}
                whileHover={{ scale: 1.2 }}
                animate={{
                  scale: activeSection === section.id ? 1.2 : 1,
                  backgroundColor:
                    activeSection === section.id
                      ? "rgba(129, 140, 248, 0.8)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
                onClick={() =>
                  document
                    .getElementById(section.id)
                    .scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              />
            </div>
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
              Self Reflection Essay
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
              {Array(5)
                .fill()
                .map((_, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: false, margin: "-100px" }}
                    style={{ marginBottom: index < 4 ? "25px" : 0 }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </motion.p>
                ))}
            </div>

            {/* Interactive hover effect area */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: "40px",
                padding: "20px",
                borderRadius: "12px",
                border: "1px dashed rgba(129, 140, 248, 0.3)",
                background: "rgba(129, 140, 248, 0.07)",
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#a1a8d0",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
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
              Summary of Academic Article
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
              
                .fill()
                .map((_, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: false, margin: "-100px" }}
                    whileHover={{
                      backgroundColor: "rgba(167, 139, 250, 0.05)",
                      boxShadow: "0 0 0 1px rgba(167, 139, 250, 0.15)",
                      borderRadius: "8px",
                    }}
                    style={{
                      marginBottom: index < 4 ? "25px" : 0,
                      padding: "10px",
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                   The article Just and Unjust Nuclear Deterrence, published in Ethics & International Affairs (Spring 2023) written by Stanford political scientist Scott D. Sagan. 
                    He questions whether, under Just War Theory principles, there can ever be any valid justification for having suffered nuclear deterrence forces. 
                    He points out that although nuclear use is put forward in order to prevent war, it contradicts the principle of discrimination, and even if never actually carried out, as a potential source of mass civilian harm that inherently risks great numbers of lives. 
                  </motion.p>
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: false, margin: "-100px" }}
                    whileHover={{
                      backgroundColor: "rgba(167, 139, 250, 0.05)",
                      boxShadow: "0 0 0 1px rgba(167, 139, 250, 0.15)",
                      borderRadius: "8px",
                    }}
                    style={{
                      marginBottom: index < 4 ? "25px" : 0,
                      padding: "10px",
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    To illustrate his thesis, Sagan presents an agenda for “just deterrence” with ten points in all.
                    These include avoiding targeting civilians or using nuclear threats where conventional weaponry would suffice; rejecting retaliatory threats against civilians; 
                    and moving in good faith toward eventual disarmament, all grounded in just war ethics.
                    He contextualises these proposals within Cold War debates and current geopolitical dynamics, highlighting the moral paradox that the usability required for deterrence carries unacceptable moral risks.
                  </motion.p>
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: false, margin: "-100px" }}
                    whileHover={{
                      backgroundColor: "rgba(167, 139, 250, 0.05)",
                      boxShadow: "0 0 0 1px rgba(167, 139, 250, 0.15)",
                      borderRadius: "8px",
                    }}
                    style={{
                      marginBottom: index < 4 ? "25px" : 0,
                      padding: "10px",
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    In conclusion, Sagan contends that either possessing nuclear weapons or threatening to use them 
                    creates profound ethical issues and that genuine deterrence policy must aim to eliminate civilian harm while adhering to international moral norms.
                  </motion.p>
                ))
            </div>

            {/* Article reference block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false, margin: "-100px" }}
              style={{
                marginTop: "40px",
                padding: "25px",
                borderRadius: "12px",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                background: "rgba(30, 25, 40, 0.5)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 15px",
                  color: "#b8bfe2",
                  fontSize: "1.2rem",
                }}
              >
                Reference
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#a1a8d0",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                Sagan, S. D. (2023). Just and Unjust Nuclear Deterrence. Ethics & International Affairs, 37(1), 19–28. https://www.cambridge.org/core/journals/ethics-and-international-affairs/article/just-and-unjust-nuclear-deterrence/B70E59D2AF7E8CBA9E38EEF61764E356#article
              </p>
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
