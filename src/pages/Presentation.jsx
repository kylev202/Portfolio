import React from "react";
import videoBackground from "../assets/LearningJourney.mp4";

export default function Presentation() {
  return (
    <div
      className="presentation-container"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Video background */}
      <video>
        <source src={videoBackground} type="video/mp4" />
      </video>
    </div>
  );
}
