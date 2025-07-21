import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const navItems = [
  { label: "Kyle Vu", to: "/", key: "home" },
  { label: "Skills", to: "/skills", key: "skills" },
  { label: "Calendar", to: "/calendar", key: "calendar" },
  { label: "Research", to: "/research", key: "research" },
  { label: "Presentation", to: "/presentation", key: "presentation" },
];

const spring = { type: "spring", stiffness: 400, damping: 20 };

function NavButton({ label, href, isMain }) {
  const scale = useMotionValue(1);
  const boxShadow = useMotionValue("none");

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
        background: "none",
        scale,
        boxShadow,
        zIndex: 1,
      }}
      onHoverStart={() => {
        scale.set(1.18);
        boxShadow.set("0 8px 32px 0 rgba(80,80,80,0.18)");
      }}
      onHoverEnd={() => {
        scale.set(1);
        boxShadow.set("none");
      }}
      transition={spring}
      className="navbar-link"
    >
      {label}
    </motion.a>
  );
}

export default function NavBar() {
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
        gap: "16px",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {navItems.map((item, idx) => (
          <NavButton
            key={item.key}
            label={item.label}
            href={item.to}
            isMain={idx === 0}
          />
        ))}
      </div>
      <div
        style={{
          color: "#fff",
          fontWeight: 600,
          fontSize: "1.1rem",
          letterSpacing: "0.04em",
          userSelect: "none",
          marginLeft: "24px",
          marginRight: "0px",
          whiteSpace: "nowrap",
        }}
      >
        ePortfolio
      </div>
    </nav>
  );
}