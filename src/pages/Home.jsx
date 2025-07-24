import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import CircularGallery from "../components/CircularGallery.";
import TextType from "../components/TextType";
import FlowingMenu from "../components/FlowingMenu";
import Ballpit from "../components/Ballpit";

const Home = () => {
  const [showAboutBox, setShowAboutBox] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [hoveredDot, setHoveredDot] = useState(null);

  // Navigation sections data
  const navSections = [
    { id: "intro", label: "Welcome" },
    { id: "about", label: "About Me" },
    { id: "gallery", label: "Gallery" },
    { id: "purpose", label: "Purpose" },
    { id: "explore", label: "Explore" },
  ];

  // Enhanced scroll handler with additional functionality
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // Show about box after scrolling
    if (currentScrollY > window.innerHeight * 0.6) {
      setShowAboutBox(true);
    }

    // Show scroll to top when scrolled down significantly
    if (currentScrollY > window.innerHeight) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }

    // Determine which section is in view
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.3
      ) {
        setActiveSection(section.id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Demo items for FlowingMenu - linked to respective pages
  const demoItems = [
    {
      link: "/skills",
      text: "Skills Work",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "/calendar",
      text: "Timetable",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "/research",
      text: "Research Projects",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "/presentation",
      text: "Oral Presentation",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      link: "/contact",
      text: "Contact Me",
      image: "https://picsum.photos/600/400?random=5",
    },
  ];

  return (
    <div>
      {/* Dynamic background elements */}
      <div className="background-elements">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

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
                  transition={{ duration: 0.2 }}
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

      {/* First section - My Portfolio with TextType animation */}
      <section
        id="intro"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          className="hero-content"
          style={{
            transform: `translateY(${scrollY * -0.15}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <TextType
            text={[
              "Welcome to my site",
              "This is my portfolio",
              "Enjoy exploring!",
            ]}
            typingSpeed={100}
            pauseDuration={2000}
            deletingSpeed={50}
            showCursor={true}
            cursorCharacter="|"
            as="h1"
            style={{
              fontSize: "clamp(4rem, 10vw, 10rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "0.04em",
              textShadow:
                "0 4px 12px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.1)",
              userSelect: "none",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          />

          {/* Enhanced hero description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.8)",
              marginTop: 30,
              letterSpacing: "0.05em",
              textShadow: "0 2px 5px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            My First Interactive Web Portfolio
          </motion.p>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: "absolute",
            bottom: 60,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            Scroll to explore
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
      </section>

      {/* Combined section - Kyle Vu with ScrollFloat followed immediately by About Me box */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "60px",
        }}
      >
        {/* Animated separating line for Kyle Vu section */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          style={{
            width: "200px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.8), transparent)",
            marginBottom: "80px",
            transformOrigin: "center",
          }}
        />

        {/* Kyle Vu text */}
        <div style={{ marginBottom: "60px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{
              duration: 1.3,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1], // springy ease
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
            viewport={{ once: true, amount: 0.6 }}
            style={{
              fontSize: "clamp(4rem, 15vw, 14rem)",
              fontWeight: 900,
              color: "#ffffff",
              textShadow: "0 4px 20px rgba(129, 140, 248, 0.3)",
              textAlign: "center",
              margin: 0,
              letterSpacing: "0.02em",
              transformStyle: "preserve-3d",
            }}
          >
            Kyle Vu
          </motion.h2>
        </div>

        {/* About Me box directly below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: showAboutBox ? 1 : 0,
            y: showAboutBox ? 0 : 30,
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          style={{
            maxWidth: "800px",
            margin: "10px auto 40px",
            padding: "30px 40px",
            borderRadius: "16px",
            backgroundColor: "rgba(30, 30, 30, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(129, 140, 248, 0.3)",
            boxShadow:
              "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(129, 140, 248, 0.15)",
            color: "#e5e7eb",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background:
                "linear-gradient(90deg, rgba(129, 140, 248, 0.8), rgba(129, 140, 248, 0.2), rgba(129, 140, 248, 0.8))",
            }}
          ></div>

          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(90deg, #e5e7eb, #818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 10px rgba(129, 140, 248, 0.2)",
            }}
          >
            About Me
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#d1d5db",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae felis vel magna facilisis lacinia. Etiam ut mi vel ipsum
            gravida varius. Suspendisse potenti. Proin rhoncus, quam at
            fermentum convallis, leo ipsum gravida lacus, ac facilisis odio dui
            eget nibh. Donec hendrerit, sem non finibus ullamcorper, mi erat
            imperdiet orci, at rhoncus dui nulla ut velit.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#d1d5db",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            Cras at magna tellus. Aliquam accumsan, nulla sed elementum feugiat,
            nibh risus ultricies dolor, vitae blandit urna elit et metus. Sed in
            neque vel mi mattis tincidunt. Integer eleifend, tortor sit amet
            ultricies ultricies, ipsum sem fermentum neque, non tincidunt quam
            lectus non tellus.
          </p>

          {/* Decorative corner accent */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              width: "80px",
              height: "80px",
              borderRight: "2px solid rgba(129, 140, 248, 0.4)",
              borderBottom: "2px solid rgba(129, 140, 248, 0.4)",
              opacity: 0.6,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/* CircularGallery section */}
      <section
        id="gallery"
        className="gallery-section"
        style={{ height: "600px", position: "relative", marginTop: "40px" }}
      >
        {/* Animated separating line for CircularGallery section */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          style={{
            width: "300px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
            margin: "60px auto 40px",
            transformOrigin: "center",
          }}
        />

        <CircularGallery
          bend={-3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </section>

      {/* Purpose section with enhanced styling */}
      <section id="purpose" style={{ padding: "60px 0" }}>
        {/* Animated separating line for Purpose section */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          style={{
            width: "250px",
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.9), rgba(99, 102, 241, 0.7), transparent)",
            margin: "0 auto 60px",
            transformOrigin: "center",
            borderRadius: "2px",
          }}
        />

        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
            style={{
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: "700",
                background: "linear-gradient(90deg, #e5e7eb, #818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "20px",
              }}
            >
              Purpose
            </h2>
            <div
              style={{
                width: "60px",
                height: "4px",
                background:
                  "linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.8), transparent)",
                margin: "0 auto",
              }}
            ></div>
          </motion.div>

          {/* Main content ScrollReveal */}
          <ScrollReveal
            baseOpacity={30}
            enableBlur={true}
            baseRotation={8}
            blurStrength={10}
            style={{
              padding: "40px",
              borderRadius: "16px",
              backgroundColor: "rgba(30, 30, 30, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(129, 140, 248, 0.3)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae felis vel magna facilisis lacinia. Etiam ut mi vel ipsum
            gravida varius. Suspendisse potenti. Proin rhoncus, quam at
            fermentum convallis, leo ipsum gravida lacus, ac facilisis odio dui
            eget nibh. Donec hendrerit, sem non finibus ullamcorper, mi erat
            imperdiet orci, at rhoncus dui nulla ut velit.
          </ScrollReveal>
        </div>
      </section>

      {/* FlowingMenu section with enhanced styling */}
      <section
        id="explore"
        className="menu-section"
        style={{
          padding: "60px 20px",
          background: "transparent",
          position: "relative",
        }}
      >
        {/* Animated separating line for FlowingMenu section */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          style={{
            width: "400px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), rgba(129, 140, 248, 0.6), rgba(255, 255, 255, 0.8), transparent)",
            margin: "0 auto 60px",
            transformOrigin: "center",
            borderRadius: "1.5px",
            boxShadow: "0 2px 8px rgba(255, 255, 255, 0.1)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          style={{
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "15px",
            }}
          >
            Explore My Work
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#ffffff",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Navigate through my portfolio sections
          </p>
        </motion.div>

        <div style={{ height: "500px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </section>

      {/* Ballpit interactive section */}
      <section
        id="interactive"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "500px",
          maxHeight: "500px",
          width: "100%",
        }}
      >
        <Ballpit
          count={100}
          gravity={2}
          friction={1}
          wallBounce={0.95}
          followCursor={false}
          color="rgba(245, 40, 145, 0.8)"
          ambientColor="1616777215"
          lightIntensity={200}
          miniSize={0.5}
          maxSize={1}
        />
      </section>

      {/* Footer section */}
      <footer
        style={{
          padding: "40px 20px",
          backgroundColor: "rgba(15, 18, 25, 0.95)",
          color: "#e5e7eb",
          textAlign: "center",
          borderTop: "1px solid rgba(75, 85, 99, 0.3)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ marginBottom: "20px" }}>
            © {new Date().getFullYear()} Kyle Vu • All Rights Reserved
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <a
              href="https://www.linkedin.com/in/khiem-vu-8a0283313/"
              style={{
                color: "#e5e7eb",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kylev202"
              style={{
                color: "#e5e7eb",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/khim.vu/"
              style={{
                color: "#e5e7eb",
                textDecoration: "none",
                opacity: 0.8,
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
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
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              zIndex: 100,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(129, 140, 248, 1)",
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
};

export default Home;
