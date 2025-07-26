import React, { useState, useEffect } from "react";
import MonthView from "../components/calendar/MonthView";
import WeekView from "../components/calendar/WeekView";
import DayView from "../components/calendar/DayView";
import CalendarHeader from "../components/calendar/CalendarHeader";
import EventModal from "../components/calendar/EventModal";
import { useCalendarEvents } from "../hooks/useCalendarEvents";
import "../styles/calendar.css";

const NotionCalendar = () => {
  // State for calendar navigation
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState("week"); // 'month', 'week', 'day'
  const [animating, setAnimating] = useState(false);

  // Use custom hook for event management
  const { addEvent, updateEvent, deleteEvent, getEventsForDay } =
    useCalendarEvents();

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    color: "#818cf8", // Default indigo
    id: "",
    date: null,
    start: "",
    end: "",
  });

  // Handle view mode change with animation
  const handleViewChange = (mode) => {
    if (viewMode === mode) return;

    setAnimating(true);
    setViewMode(mode);

    // Reset animation state after transition
    setTimeout(() => {
      setAnimating(false);
    }, 300);
  };

  // Navigation functions
  const prevPeriod = () => {
    setCurrentMonth((prev) => {
      if (viewMode === "month") {
        return new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      } else if (viewMode === "week") {
        const d = new Date(prev);
        d.setDate(d.getDate() - 7);
        return d;
      } else if (viewMode === "day") {
        const d = new Date(prev);
        d.setDate(d.getDate() - 1);
        return d;
      }
      return prev;
    });
  };

  const nextPeriod = () => {
    setCurrentMonth((prev) => {
      if (viewMode === "month") {
        return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      } else if (viewMode === "week") {
        const d = new Date(prev);
        d.setDate(d.getDate() + 7);
        return d;
      } else if (viewMode === "day") {
        const d = new Date(prev);
        d.setDate(d.getDate() + 1);
        return d;
      }
      return prev;
    });
  };

  const goToToday = () => setCurrentMonth(new Date());

  // Modal functions
  const openAddModal = (date) => {
    const roundedDate = new Date(date);
    const minutes = roundedDate.getMinutes();
    roundedDate.setMinutes(
      minutes - (minutes % 30) + (minutes % 30 < 15 ? 0 : 30)
    );
    roundedDate.setSeconds(0);
    roundedDate.setMilliseconds(0);

    const endDate = new Date(roundedDate);
    endDate.setHours(endDate.getHours() + 1);

    setSelectedDate(date);
    setModalMode("add");
    setEventForm({
      title: "",
      description: "",
      color: "#818cf8",
      id: "",
      date: date,
      start: roundedDate.toISOString(),
      end: endDate.toISOString(),
    });
    setModalOpen(true);
  };

  const openEditModal = (event) => {
    setModalMode("edit");
    setCurrentEvent(event);
    setEventForm({
      title: event.title,
      description: event.description || "",
      color: event.color,
      id: event.id,
      date: new Date(event.date),
      start: event.start,
      end: event.end,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentEvent(null);
  };

  const handleFormSubmit = (formData) => {
    if (modalMode === "add") {
      addEvent({
        ...formData,
        id: Date.now().toString(),
      });
    } else {
      updateEvent(formData);
    }
    closeModal();
  };

  const handleDeleteEvent = (id) => {
    deleteEvent(id);
    closeModal();
  };

  // Add this function to handle view mode changes from MonthView
  const handleViewModeChange = (mode, date) => {
    setCurrentMonth(date);
    setViewMode(mode);
  };

  // Function to render the appropriate calendar view
  const renderCalendarView = () => {
    const viewProps = {
      currentMonth,
      getEventsForDay,
      openAddModal,
      openEditModal,
      onViewModeChange: handleViewModeChange,
    };

    switch (viewMode) {
      case "week":
        return <WeekView {...viewProps} />;
      case "day":
        return <DayView {...viewProps} />;
      case "month":
      default:
        return <MonthView {...viewProps} />;
    }
  };

  return (
    <div className="calendar-page-container">
      <div className="calendar-instructions">
        <h3>Calendar Instructions</h3>
        <ul>
          <li>
            This calendar is not well functional, lots of error I cannot fix, please forgive me 😭
          </li>
          <li>
            <strong>Notice:</strong> If you cannot see events properly, try reload the page.
          </li>
          <li>
            <strong>Navigate:</strong> Use the Month/Week/Day tabs at the top. Use the arrows to move between periods
          </li>
          <li>
            <strong>Features:</strong> Click on any events to view description. 
          </li>
        </ul>
        <div className="instruction-tip">
          <strong>Tip:</strong> Best way to view my schedule is to use month view to select a week that you want to see, then click on any day to view events for that day, then switch to week view to see all events for that week. Switch back to month view and repeat.
        </div>
      </div>

      <div className="calendar-container">
        <CalendarHeader
          currentMonth={currentMonth}
          viewMode={viewMode}
          handleViewChange={handleViewChange}
          prevPeriod={prevPeriod}
          nextPeriod={nextPeriod}
          goToToday={goToToday}
          openAddModal={openAddModal}
        />

        <div className={`calendar-view ${animating ? "animating" : ""}`}>
          {renderCalendarView()}
        </div>

        {modalOpen && (
          <EventModal
            mode={modalMode}
            initialData={eventForm}
            onSubmit={handleFormSubmit}
            onDelete={handleDeleteEvent}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default NotionCalendar;
