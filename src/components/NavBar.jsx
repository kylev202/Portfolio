import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Separate the main navigation items from Kyle Vu
const mainNavItems = [
  { label: "Skills", to: "/skills", key: "skills" },
  { label: "Calendar", to: "/calendar", key: "calendar" },
  { label: "Research", to: "/research", key: "research" },
  { label: "Presentation", to: "/presentation", key: "presentation" },
];

const spring = { type: "spring", stiffness: 400, damping: 20 };

function NavButton({ label, href, isMain }) {
  // More motion values for enhanced animations
  const scale = useMotionValue(1);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Use springs for smoother animations
  const smoothScale = useSpring(scale, { damping: 15, stiffness: 300 });
  const smoothY = useSpring(y, { damping: 15, stiffness: 300 });
  const smoothRotateX = useSpring(rotateX, { damping: 15, stiffness: 300 });
  const smoothRotateY = useSpring(rotateY, { damping: 15, stiffness: 300 });

  // Transform values for shadow and background effects
  const boxShadow = useTransform(
    smoothY,
    [-10, 0],
    [
      "0 10px 25px -5px rgba(80,80,80,0.3), 0 8px 10px -6px rgba(80,80,80,0.2)",
      "0 4px 6px -1px rgba(80,80,80,0.1), 0 2px 4px -1px rgba(80,80,80,0.06)",
    ]
  );

  const background = useTransform(
    smoothScale,
    [1, 1.18],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.07)"]
  );

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;

    // Calculate rotation based on mouse position
    rotateX.set(posY * -0.08); // Invert Y for natural tilt
    rotateY.set(posX * 0.08);
  };

  return (
    <motion.a
      href={href}
      style={{
        display: "inline-block",
        color: "#fff",
        fontWeight: isMain ? 700 : 500,
        fontSize: isMain ? "1.25rem" : "1rem",
        letterSpacing: "0.02em",
        textDecoration: "none",
        borderRadius: "10px",
        padding: "8px 18px",
        marginRight: 8,
        cursor: "pointer",
        position: "relative",
        // Enhanced styling with motion values
        scale: smoothScale,
        y: smoothY,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        boxShadow,
        background,
        zIndex: 1,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => {
        scale.set(1.18);
        y.set(-5); // Lift up on hover
      }}
      onHoverEnd={() => {
        scale.set(1);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
      }}
      whileTap={{
        scale: 0.95,
        y: 2,
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.1 },
      }}
      transition={spring}
      className="navbar-link"
    >
      {/* Create a pseudo-element for a glowing effect */}
      <motion.span
        style={{
          position: "absolute",
          inset: "0px",
          borderRadius: "10px",
          opacity: 0,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
          zIndex: -1,
        }}
        animate={{
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />
      {label}
    </motion.a>
  );
}

export default function NavBar() {
  // Create motion values for the contact button
  const contactScale = useMotionValue(1);
  const contactY = useMotionValue(0);
  const smoothContactScale = useSpring(contactScale, { damping: 15, stiffness: 300 });
  const smoothContactY = useSpring(contactY, { damping: 15, stiffness: 300 });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 10,
        backdropFilter: "blur(12px)",
        background: "rgba(30, 30, 30, 0.6)",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
        display: "flex",
        alignItems: "center",
        height: "64px",
        padding: "0 32px",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {/* Left: Kyle Vu as branding/home link */}
      <div>
        <NavButton
          key="home"
          label="Kyle Vu"
          href="/"
          isMain={true}
        />
      </div>
      
      {/* Center: Main navigation items */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "8px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
      }}>
        {mainNavItems.map((item) => (
          <NavButton
            key={item.key}
            label={item.label}
            href={item.to}
            isMain={false}
          />
        ))}
      </div>
      
      {/* Right: Contact Me button */}
      <motion.a
        href="/contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 600,
          fontSize: "1rem",
          letterSpacing: "0.04em",
          textDecoration: "none",
          borderRadius: "8px",
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "rgba(129, 140, 248, 0.5)",
          border: "1px solid rgba(129, 140, 248, 0.3)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          scale: smoothContactScale,
          y: smoothContactY,
          whiteSpace: "nowrap",
        }}
        whileHover={{
          backgroundColor: "rgba(129, 140, 248, 0.7)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        }}
        onHoverStart={() => {
          contactScale.set(1.05);
          contactY.set(-2);
        }}
        onHoverEnd={() => {
          contactScale.set(1);
          contactY.set(0);
        }}
        whileTap={{
          scale: 0.97,
          y: 1,
        }}
      >
        Contact Me
      </motion.a>
    </nav>
  );
}