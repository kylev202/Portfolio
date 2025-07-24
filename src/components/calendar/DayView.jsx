import React, { useRef, useEffect, useState } from "react";
import { formatTime } from "../../utils/dateUtils";
import "../../styles/dayView.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DayView = ({
  currentMonth,
  getEventsForDay,
  openAddModal,
  openEditModal,
}) => {
  const dayViewRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const dayEvents = getEventsForDay(currentMonth);

  // Check if the selected date is today
  const today = new Date();
  const isToday = currentMonth.toDateString() === today.toDateString();

  // Update current time every minute
  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to current time
  useEffect(() => {
    if (dayViewRef.current) {
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      const scrollPosition = (currentHour + currentMinute / 60) * 50 - 250;
      dayViewRef.current.scrollTop = Math.max(0, scrollPosition);
    }
  }, [currentTime]);

  // Calculate current time indicator position
  const currentTimePosition =
    (currentTime.getHours() + currentTime.getMinutes() / 60) * 50;

  return (
    <div className="day-view-container">
      {/* Day header */}
      <div className="day-header">
        <div className="day-info">
          <div className="day-name">{daysOfWeek[currentMonth.getDay()]}</div>
          <div className={`day-number ${isToday ? "today" : ""}`}>
            {currentMonth.getDate()}
          </div>
        </div>

        <div className="day-date">
          {currentMonth.toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>

      {/* Updated grid structure to match week view exactly */}
      <div className="day-grid-wrapper custom-scrollbar" ref={dayViewRef}>
        <div className="day-grid">
          {/* Hours column */}
          <div className="time-column">
            {Array.from({ length: 24 }, (_, i) => (
              <div key={`hour-label-${i}`} className="hour-label">
                <span>
                  {i === 0
                    ? "12 AM"
                    : i === 12
                    ? "12 PM"
                    : i > 12
                    ? `${i - 12} PM`
                    : `${i} AM`}
                </span>
              </div>
            ))}
          </div>

          <div className="events-column">
            {/* Hour cells */}
            {Array.from({ length: 24 }, (_, i) => (
              <div
                key={`hour-${i}`}
                className="hour-cell"
                onClick={() => {
                  const date = new Date(currentMonth);
                  date.setHours(i, 0, 0, 0);
                  openAddModal(date);
                }}
              >
                <div className="half-hour-marker"></div>
              </div>
            ))}

            {/* Current time indicator */}
            {isToday && (
              <div
                className="current-time-indicator"
                style={{ top: `${currentTimePosition}px` }}
              >
                <div className="time-line"></div>
                <div className="time-dot"></div>
                <div className="time-label">{formatTime(currentTime)}</div>
              </div>
            )}

            {/* Events with week-view-style positioning */}
            {dayEvents.map((event) => {
              const start = new Date(event.start);
              const end = new Date(event.end);

              // Calculate position to align precisely with hour grid
              const startHour = start.getHours() + start.getMinutes() / 60;
              const endHour = end.getHours() + end.getMinutes() / 60;
              const clampedEndHour = Math.min(endHour, 24);

              // Precise pixel calculations to match hour grid cells
              const topPx = Math.floor(startHour * 50); // Floor to align to grid
              const exactHeight = (clampedEndHour - startHour) * 50;
              const heightPx = Math.max(Math.floor(exactHeight), 28);

              return (
                <div
                  key={event.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditModal(event);
                  }}
                  draggable
                  className={`day-event ${
                    event.recurrence || event.isRecurringInstance
                      ? "recurring-event"
                      : ""
                  }`}
                  style={{
                    top: `${topPx}px`,
                    height: `${heightPx}px`,
                    borderLeftColor: event.color,
                    backgroundColor: `${event.color}20`,
                  }}
                >
                  <div className="event-title">
                    {event.title}
                    {(event.recurrence || event.isRecurringInstance) && (
                      <span
                        className="recurring-indicator"
                        title="Recurring event"
                      >
                        ↻
                      </span>
                    )}
                  </div>
                  {heightPx > 35 && (
                    <div className="event-time">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {formatTime(start)} - {formatTime(end)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayView;
