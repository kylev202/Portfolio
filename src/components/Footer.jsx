import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100vw",
        background: "rgba(30, 30, 30, 0.7)",
        color: "#fff",
        textAlign: "center",
        padding: "12px 0",
        fontSize: "1rem",
        letterSpacing: "0.04em",
        zIndex: 10,
        backdropFilter: "blur(8px)",
        boxShadow: "0 -2px 16px 0 rgba(0,0,0,0.10)",
        userSelect: "none",
      }}
    >
      © {new Date().getFullYear()} Made by Kyle Vu
    </footer>
  );
}