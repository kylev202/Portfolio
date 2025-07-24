import React, { useEffect, useState } from "react";
import { formatTime } from "../../utils/dateUtils";

/**
 * Enhanced time indicator with thinner line styling
 */
const TimeIndicator = ({
  isVisible = true,
  currentTime = new Date(),
  position,
}) => {
  const [animate, setAnimate] = useState(false);

  // Create a pulsing animation effect when the time updates
  useEffect(() => {
    if (!isVisible) return;

    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [currentTime, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="current-time-indicator"
      style={{
        top: `${position}px`,
        left: 0,
        right: 0,
        pointerEvents: "none",
      }}
    >
      <div className={`time-line ${animate ? "pulse" : ""}`}></div>
      <div className={`time-dot ${animate ? "pulse" : ""}`}></div>
      <div className="time-label">{formatTime(currentTime)}</div>
    </div>
  );
};

export default TimeIndicator;
