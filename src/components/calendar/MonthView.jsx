import React, { useState } from "react";
import { getCalendarDays } from "../../utils/dateUtils";
import "../../styles/monthView.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MonthView = ({
  currentMonth,
  getEventsForDay,
  openAddModal,
  openEditModal,
  onViewModeChange, // New prop to handle view mode change
}) => {
  const days = getCalendarDays(currentMonth);
  const [doubleClickTimeout, setDoubleClickTimeout] = useState(null);

  // Maximum number of events to show per day
  const MAX_VISIBLE_EVENTS = 3;

  // Handle click to navigate to day view
  const handleDayClick = (date, isCurrentMonth) => {
    if (!isCurrentMonth) return; // Ignore clicks on days from other months

    // Set timeout to detect double clicks
    setDoubleClickTimeout(
      setTimeout(() => {
        // Single click - navigate to day view
        if (onViewModeChange) {
          onViewModeChange("day", date);
        }
        setDoubleClickTimeout(null);
      }, 300)
    ); // 300ms double click detection
  };

  // Handle double click to add new event
  const handleDayDoubleClick = (e, date, isCurrentMonth) => {
    e.stopPropagation(); // Prevent single click from triggering

    // Clear the single click timeout
    if (doubleClickTimeout) {
      clearTimeout(doubleClickTimeout);
      setDoubleClickTimeout(null);
    }

    // Only allow adding events on current month days
    if (isCurrentMonth) {
      openAddModal(date);
    }
  };

  // Handle click on an event
  const handleEventClick = (e, event) => {
    e.stopPropagation(); // Prevent day click from triggering
    openEditModal(event);
  };

  return (
    <div className="month-view">
      {/* Days of week headers */}
      <div className="month-header">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="month-days">
        {days.map((day, index) => {
          const dayEvents = getEventsForDay(day.date);
          const hasEvents = dayEvents.length > 0;
          const tooManyEvents = dayEvents.length > MAX_VISIBLE_EVENTS;

          // Visible events (limited number)
          const visibleEvents = tooManyEvents
            ? dayEvents.slice(0, MAX_VISIBLE_EVENTS)
            : dayEvents;

          // Number of hidden events
          const hiddenEventsCount = tooManyEvents
            ? dayEvents.length - MAX_VISIBLE_EVENTS
            : 0;

          return (
            <div
              key={index}
              className={`month-day ${!day.currentMonth ? "other-month" : ""} ${
                day.today ? "today" : ""
              }`}
              onClick={() => handleDayClick(day.date, day.currentMonth)}
              onDoubleClick={(e) =>
                handleDayDoubleClick(e, day.date, day.currentMonth)
              }
              aria-label={`${day.day} ${new Date(
                day.year,
                day.month,
                day.day
              ).toLocaleString("default", { month: "long" })}`}
            >
              {/* Simple date number like Notion */}
              <div className="day-number">{day.day}</div>

              {/* Day content */}
              <div className="day-content">
                {/* Events list */}
                <div className="day-events">
                  {visibleEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={(e) => handleEventClick(e, event)}
                      className={`event-item ${
                        event.recurrence || event.isRecurringInstance
                          ? "recurring-event"
                          : ""
                      }`}
                      style={{
                        borderLeftColor: event.color,
                        backgroundColor: `${event.color}20`, // Using 12.5% opacity for subtle background
                      }}
                    >
                      <div className="event-content">
                        <span className="event-title">
                          {event.title}
                          {(event.recurrence || event.isRecurringInstance) && (
                            <span
                              className="recurring-indicator"
                              title="Recurring event"
                            >
                              ↻
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simple "more" indicator like Notion */}
                {tooManyEvents && (
                  <div className="events-count">+{hiddenEventsCount} more</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
