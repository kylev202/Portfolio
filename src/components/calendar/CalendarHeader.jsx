import React from "react";
import "../../styles/calendarHeader.css";

const CalendarHeader = ({
  currentMonth,
  viewMode,
  handleViewChange,
  prevPeriod,
  nextPeriod,
  goToToday,
  openAddModal,
}) => {
  // Button style to override global button styles
  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    padding: "0",
    margin: "0",
    boxShadow: "none",
  };

  return (
    <div className="calendar-header">
      {/* Left: View Switcher */}
      <div className="view-switcher">
        <div className="view-buttons">
          <div className="view-buttons-container">
            {/* Animated background for active button */}
            <div
              className="active-indicator"
              style={{
                left:
                  viewMode === "month"
                    ? 0
                    : viewMode === "week"
                    ? "64px"
                    : "128px",
              }}
            />
            <button
              onClick={() => handleViewChange("month")}
              className={`view-button ${viewMode === "month" ? "active" : ""}`}
              style={buttonStyle}
            >
              Month
            </button>
            <button
              onClick={() => handleViewChange("week")}
              className={`view-button ${viewMode === "week" ? "active" : ""}`}
              style={buttonStyle}
            >
              Week
            </button>
            <button
              onClick={() => handleViewChange("day")}
              className={`view-button ${viewMode === "day" ? "active" : ""}`}
              style={buttonStyle}
            >
              Day
            </button>
          </div>
        </div>
      </div>

      {/* Center: Current Date */}
      <h2 className="current-date">
        {currentMonth.toLocaleString("default", { month: "long" })}{" "}
        {currentMonth.getFullYear()}
      </h2>

      {/* Right: Navigation and Add Event */}
      <div className="calendar-actions">
        <button
          onClick={prevPeriod}
          className="nav-button"
          aria-label={`Previous ${viewMode}`}
          style={buttonStyle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToToday}
          className="today-button"
          aria-label="Go to today"
          style={{
            ...buttonStyle,
            borderRadius: "6px",
            padding: "6px 14px",
            border: "1px solid rgba(107, 114, 128, 0.4)",
          }}
        >
          Today
        </button>
        <button
          onClick={nextPeriod}
          className="nav-button"
          aria-label={`Next ${viewMode}`}
          style={buttonStyle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          onClick={() => openAddModal(new Date())}
          className="add-event-button"
          aria-label="Create new event"
          style={{
            ...buttonStyle,
            backgroundColor: "rgba(79, 70, 229, 0.3)",
            borderRadius: "6px",
            padding: "6px 14px",
            border: "1px solid rgba(79, 70, 229, 0.5)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ marginRight: "4px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Event
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
