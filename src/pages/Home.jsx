import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollFloat from '../components/ScrollFloat';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  const [showAboutBox, setShowAboutBox] = useState(false);
  
  // Show about box after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setShowAboutBox(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div style={{ 
      minHeight: "400vh", // Increased from 300vh for more scrolling space
      position: "relative",
    }}>
      {/* First section - My Portfolio centered vertically and horizontally */}
      <div style={{ 
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
        <span style={{
          fontSize: "10rem", // Increased from 4rem
          fontWeight: 800,
          color: "#444",
          letterSpacing: "0.04em",
          textShadow: "0 1px 4px rgba(0,0,0,0.04)",
          userSelect: "none",
        }}>
          My Portfolio
        </span>
      </div>
      
      <div style={{ height: "30vh" }} />
      
      {/* Combined section - Kyle Vu with ScrollFloat followed immediately by About Me box */}
      <div style={{ 
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {/* Kyle Vu text */}
        <div style={{ marginBottom: "60px" }}>
          <ScrollFloat
            animationDuration={2} 
            ease='back.inOut(2)' 
            scrollStart='center bottom+=50%'
            scrollEnd='center center-=30%'
            stagger={0.1}
            textClassName="larger-text"
            containerClassName="large-heading"
          >
            Kyle Vu
          </ScrollFloat>
        </div>
        
        {/* About Me box directly below */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: showAboutBox ? 1 : 0,
            y: showAboutBox ? 0 : 30
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
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(129, 140, 248, 0.15)",
            color: "#e5e7eb",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative accent line */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, rgba(129, 140, 248, 0.8), rgba(129, 140, 248, 0.2), rgba(129, 140, 248, 0.8))",
          }}></div>
          
          <h2 style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "20px",
            background: "linear-gradient(90deg, #e5e7eb, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 10px rgba(129, 140, 248, 0.2)",
          }}>
            About Me
          </h2>
          
          <p style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#d1d5db",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae felis vel magna facilisis lacinia. 
            Etiam ut mi vel ipsum gravida varius. Suspendisse potenti. Proin rhoncus, quam at fermentum convallis, 
            leo ipsum gravida lacus, ac facilisis odio dui eget nibh. Donec hendrerit, sem non finibus ullamcorper, 
            mi erat imperdiet orci, at rhoncus dui nulla ut velit.
          </p>
          
          <p style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#d1d5db",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}>
            Cras at magna tellus. Aliquam accumsan, nulla sed elementum feugiat, nibh risus ultricies dolor, 
            vitae blandit urna elit et metus. Sed in neque vel mi mattis tincidunt. Integer eleifend, 
            tortor sit amet ultricies ultricies, ipsum sem fermentum neque, non tincidunt quam lectus non tellus.
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
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      {/* Extra space at bottom for scroll - REDUCED from 50vh to 20vh */}
      <div style={{ height: "20vh" }} />
      
      {/* Add custom styles for ScrollFloat */}
      <style jsx>{`
        .large-heading .larger-text {
          font-size: clamp(4rem, 15vw, 14rem) !important;
          font-weight: 900;
          will-change: transform, opacity;
          transition: all 0.8s ease-out;
        }
        
        /* Ensure animation finishes properly */
        .large-heading .char {
          transition-property: opacity, transform;
          transition-duration: 0.8s;
          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
          will-change: opacity, transform;
        }
        
        /* Fix for animation disappearing */
        .scroll-float {
          position: relative;
          z-index: 5;
          min-height: 200px;
          display: block;
          pointer-events: none;
        }
      `}</style>
      
      {/* Wrapped ScrollReveal in a container for proper positioning and padding */}
      <div style={{ 
        maxWidth: "800px", 
        margin: "0 auto", 
        padding: "0 20px"  // Add horizontal padding to keep text away from screen edges
      }}>
        <ScrollReveal
          baseOpacity={30}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          style={{
            padding: "40px", // Add internal padding
            borderRadius: "16px",
            backgroundColor: "rgba(30, 30, 30, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(129, 140, 248, 0.3)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae felis vel magna facilisis lacinia. Etiam ut mi vel ipsum gravida varius. Suspendisse potenti. Proin rhoncus, quam at fermentum convallis, leo ipsum gravida lacus, ac facilisis odio dui eget nibh. Donec hendrerit, sem non finibus ullamcorper, mi erat imperdiet orci, at rhoncus dui nulla ut velit.
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Home;
