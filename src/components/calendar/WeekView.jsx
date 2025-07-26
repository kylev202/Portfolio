import React, { useRef, useEffect, useState } from "react";
import { getWeekDays, calculateEventPosition } from "../../utils/dateUtils";
import TimeIndicator from "./TimeIndicator";
import { useDragDrop } from "../../hooks/useDragDrop";
import "../../styles/weekView.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeekView = ({
  currentMonth,
  getEventsForDay,
  openAddModal,
  openEditModal,
  onEventMove,
}) => {
  const weekViewRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const weekDays = getWeekDays(currentMonth);

  // Use the drag-drop hook
  const {
    draggingEvent,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
  } = useDragDrop((event, date) => {
    if (onEventMove) {
      onEventMove(event, date);
    }
  });

  // Update current time every minute
  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to current time
  useEffect(() => {
    if (weekViewRef.current) {
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      const scrollPosition = (currentHour + currentMinute / 60) * 50 - 250;
      weekViewRef.current.scrollTop = Math.max(0, scrollPosition);
    }
  }, [currentTime]);

  // Calculate current time indicator position
  const currentTimePosition =
    (currentTime.getHours() + currentTime.getMinutes() / 60) * 50;

  return (
    <div className="week-view-container">
      {/* Week header */}
      <div className="week-header">
        <div className="time-column-header"></div>

        <div className="day-headers">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`day-column-header ${day.isToday ? "today" : ""}`}
              onClick={() => openAddModal(day.date)}
            >
              <div className="day-name">{daysOfWeek[index]}</div>
              <div className={`day-number ${day.isToday ? "today" : ""}`}>
                {day.date.getDate()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All day events row */}
      <div className="all-day-events-container">
        <div className="all-day-label">All day</div>
        <div className="all-day-grid">
          {weekDays.map((day, dayIndex) => {
            const dayEvents = getEventsForDay(day.date);
            const allDayEvents = dayEvents.filter((event) => event.allDay);

            return (
              <div
                key={dayIndex}
                className={`all-day-column ${day.isToday ? "today" : ""}`}
                onDragOver={(e) => handleDragOver(e, day.date)}
                onDrop={(e) => handleDrop(e, day.date)}
              >
                {allDayEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(event);
                    }}
                    draggable
                    onDragStart={(e) => handleDragStart(event, e)}
                    onDragEnd={handleDragEnd}
                    className={`all-day-event ${
                      event.recurrence || event.isRecurringInstance
                        ? "recurring-event"
                        : ""
                    }`}
                    style={{
                      borderLeftColor: event.color,
                      backgroundColor: `${event.color}20`,
                    }}
                  >
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
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid-based week layout for timed events */}
      <div className="week-grid-wrapper custom-scrollbar" ref={weekViewRef}>
        <div className="week-grid">
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

          {/* Day columns container - grid-based for perfect alignment */}
          <div className="day-columns-container">
            {weekDays.map((day, dayIndex) => {
              const dayEvents = getEventsForDay(day.date).filter(
                (event) => !event.allDay
              );
              const isToday = day.isToday;

              return (
                <div
                  key={dayIndex}
                  className={`day-column ${isToday ? "today" : ""}`}
                  onDragOver={(e) => handleDragOver(e, day.date)}
                  onDrop={(e) => handleDrop(e, day.date)}
                >
                  {/* Hour cells */}
                  {Array.from({ length: 24 }, (_, i) => (
                    <div
                      key={`hour-${i}`}
                      className="hour-cell"
                      onClick={() => {
                        const date = new Date(day.date);
                        date.setHours(i, 0, 0, 0);
                        openAddModal(date);
                      }}
                    >
                      <div className="half-hour-marker"></div>
                    </div>
                  ))}

                  {/* Current time indicator */}
                  {isToday && (
                    <TimeIndicator
                      isVisible={true}
                      currentTime={currentTime}
                      position={currentTimePosition}
                    />
                  )}

                  {/* Events */}
                  {dayEvents.map((event) => {
                    const position = calculateEventPosition(event);
                    return (
                      <div
                        key={event.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditModal(event);
                        }}
                        draggable
                        onDragStart={(e) => handleDragStart(event, e)}
                        onDragEnd={handleDragEnd}
                        className={`week-event ${
                          event.recurrence || event.isRecurringInstance
                            ? "recurring-event"
                            : ""
                        }`}
                        style={{
                          top: `${position.top}px`,
                          height: `${position.height}px`,
                          borderLeftColor: event.color,
                          backgroundColor: `${event.color}20`, // Using 12.5% opacity for subtle background
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
                        {position.height > 35 && (
                          <div className="event-time">
                            {position.formattedStart} - {position.formattedEnd}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekView;
