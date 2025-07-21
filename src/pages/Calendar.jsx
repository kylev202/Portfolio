import React, { useState, useRef, useEffect } from 'react';

const NotionCalendar = () => {
  // State for calendar navigation
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [animating, setAnimating] = useState(false);
  
  // State for events and modal
  const [events, setEvents] = useState([
    {
      id: 'study-20250721',
      title: 'study',
      description: '',
      color: '#2563eb', // blue
      date: new Date('2025-07-21T12:00:00'),
      start: '2025-07-21T12:00:00',
      end: '2025-07-21T15:00:00',
    },
    {
      id: 'break-20250721',
      title: 'break',
      description: '',
      color: '#fbbf24', // yellow
      date: new Date('2025-07-21T17:00:00'),
      start: '2025-07-21T17:00:00',
      end: '2025-07-21T18:00:00',
    },
  ]);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [currentEvent, setCurrentEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    color: '#818cf8', // Default indigo
    id: '',
    date: null,
  });
  
  // State for drag and drop
  const [draggingEvent, setDraggingEvent] = useState(null);
  const draggedOver = useRef(null);
  
  // Get calendar information for current month
  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    
    // Last day of the month
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    
    // Calculate days from previous month to show
    const daysFromPrevMonth = dayOfWeek;
    
    // Calculate days from next month to show (to fill a 6-row grid)
    const totalCells = 42; // 6 rows × 7 days
    const daysFromNextMonth = totalCells - daysInMonth - daysFromPrevMonth;
    
    // Get days from previous month
    const prevMonth = new Date(year, month, 0);
    const prevMonthDays = prevMonth.getDate();
    
    // Generate calendar days array
    const days = [];
    
    // Previous month days
    for (let i = prevMonthDays - daysFromPrevMonth + 1; i <= prevMonthDays; i++) {
      days.push({
        day: i,
        month: month - 1 < 0 ? 11 : month - 1,
        year: month - 1 < 0 ? year - 1 : year,
        currentMonth: false,
        today: false,
        date: new Date(month - 1 < 0 ? year - 1 : year, month - 1 < 0 ? 11 : month - 1, i)
      });
    }
    
    // Current month days
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        month,
        year,
        currentMonth: true,
        today: i === today.getDate() && month === today.getMonth() && year === today.getFullYear(),
        date: new Date(year, month, i)
      });
    }
    
    // Next month days
    for (let i = 1; i <= daysFromNextMonth; i++) {
      days.push({
        day: i,
        month: month + 1 > 11 ? 0 : month + 1,
        year: month + 1 > 11 ? year + 1 : year,
        currentMonth: false,
        today: false,
        date: new Date(month + 1 > 11 ? year + 1 : year, month + 1 > 11 ? 0 : month + 1, i)
      });
    }
    
    return days;
  };
  
  // Format date to YYYY-MM-DD for comparison
  const formatDateKey = (date) => {
    return date.toISOString().split('T')[0];
  };
  
  // Get events for a specific day
  const getEventsForDay = (date) => {
    const dateKey = formatDateKey(date);
    return events.filter(event => formatDateKey(new Date(event.date)) === dateKey);
  };
  
  // Navigation functions (enhanced for view modes)
  const prevPeriod = () => {
    setCurrentMonth(prev => {
      if (viewMode === 'month') {
        return new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      } else if (viewMode === 'week') {
        const d = new Date(prev);
        d.setDate(d.getDate() - 7);
        return d;
      } else if (viewMode === 'day') {
        const d = new Date(prev);
        d.setDate(d.getDate() - 1);
        return d;
      }
      return prev;
    });
  };
  
  const nextPeriod = () => {
    setCurrentMonth(prev => {
      if (viewMode === 'month') {
        return new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      } else if (viewMode === 'week') {
        const d = new Date(prev);
        d.setDate(d.getDate() + 7);
        return d;
      } else if (viewMode === 'day') {
        const d = new Date(prev);
        d.setDate(d.getDate() + 1);
        return d;
      }
      return prev;
    });
  };
  
  const goToToday = () => {
    setCurrentMonth(new Date());
  };
  
  // Modal functions
  const openAddModal = (date) => {
    setSelectedDate(date);
    setModalMode('add');
    setEventForm({
      title: '',
      description: '',
      color: '#818cf8', // Default indigo
      id: '',
      date: date
    });
    setModalOpen(true);
  };
  
  const openEditModal = (event) => {
    setModalMode('edit');
    setCurrentEvent(event);
    setEventForm({
      title: event.title,
      description: event.description || '',
      color: event.color,
      id: event.id,
      date: new Date(event.date)
    });
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setCurrentEvent(null);
  };
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEventForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (modalMode === 'add') {
      // Create new event
      const newEvent = {
        ...eventForm,
        id: Date.now().toString(),
      };
      setEvents(prev => [...prev, newEvent]);
    } else {
      // Update existing event
      setEvents(prev => 
        prev.map(event => 
          event.id === eventForm.id ? { ...eventForm } : event
        )
      );
    }
    closeModal();
  };
  
  const handleDeleteEvent = () => {
    setEvents(prev => prev.filter(event => event.id !== eventForm.id));
    closeModal();
  };
  
  // Drag and drop handlers
  const handleDragStart = (event) => {
    setDraggingEvent(event);
  };
  
  const handleDragOver = (e, date) => {
    e.preventDefault();
    draggedOver.current = date;
  };
  
  const handleDrop = (e, date) => {
    e.preventDefault();
    if (draggingEvent) {
      setEvents(prev => prev.map(event => 
        event.id === draggingEvent.id 
          ? { ...event, date: date } 
          : event
      ));
    }
    setDraggingEvent(null);
    draggedOver.current = null;
  };
  
  const handleDragEnd = () => {
    setDraggingEvent(null);
    draggedOver.current = null;
  };
  
  // Fixed color selector handler
  const handleColorChange = (color) => {
    setEventForm(prev => ({
      ...prev,
      color
    }));
  };
  
  // Handle view mode change with animation
  const handleViewChange = (mode) => {
    if (viewMode === mode) return;
    
    setAnimating(true);
    setViewMode(mode);
    
    // Reset animation state after transition
    setTimeout(() => {
      setAnimating(false);
    }, 300); // Match this with the CSS transition duration
  };

  // Calendar days
  const days = getCalendarDays();
  
  // Render days of week headers
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Load saved events from localStorage on component mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('notionCalendarEvents');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);
  
  // Save events to localStorage when events change
  useEffect(() => {
    localStorage.setItem('notionCalendarEvents', JSON.stringify(events));
  }, [events]);
  
  // Custom button style to override global button styles
  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0',
    margin: '0',
    boxShadow: 'none'
  };
  
  // Helper functions for event positioning and formatting
  const calculateEventPosition = (event) => {
    // Parse the start and end times
    const startTime = new Date(event.start);
    const endTime = new Date(event.end);
    
    // Calculate hours as decimal (e.g., 12:30 = 12.5)
    const startHour = startTime.getHours() + startTime.getMinutes() / 60;
    const endHour = endTime.getHours() + endTime.getMinutes() / 60;
    
    // Calculate positions as percentage of 24 hours
    const topPercentage = (startHour / 24) * 100;
    const heightPercentage = ((endHour - startHour) / 24) * 100;
    
    return {
      top: `${topPercentage}%`,
      height: `${heightPercentage}%`,
      formattedStart: formatTime(startTime),
      formattedEnd: formatTime(endTime)
    };
  };
  
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  // Function to render the appropriate calendar view
  const renderCalendarView = () => {
    switch(viewMode) {
      case 'week':
        return renderWeekView();
      case 'day':
        return renderDayView();
      case 'month':
      default:
        return renderMonthView();
    }
  };
  
  // Month view (enhanced calendar grid)
  const renderMonthView = () => (
    <div style={{
      borderRadius: "12px",
      overflow: "hidden",
      border: "1.5px solid rgba(129, 140, 248, 0.5)",
      background: "rgba(17, 24, 39, 0.7)",
      boxShadow: "0 4px 24px rgba(79, 70, 229, 0.08)",
    }}>
      {/* Days of week headers */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(7, 1fr)",
        backgroundColor: "rgba(79, 70, 229, 0.08)",
        borderBottom: "1.5px solid rgba(129, 140, 248, 0.15)",
        fontSize: "1rem",
        fontWeight: 600,
        letterSpacing: "0.02em"
      }}>
        {daysOfWeek.map(day => (
          <div key={day} style={{ 
            padding: "16px 0 12px 0",
            textAlign: "center",
            color: "#b4b8f8",
            textShadow: "0 1px 2px rgba(0,0,0,0.08)",
            borderRight: day !== 'Sat' ? "1px solid rgba(129, 140, 248, 0.08)" : "none"
          }}>
            {day}
          </div>
        ))}
      </div>
      {/* Calendar days */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        minHeight: "600px",
        background: "rgba(17, 24, 39, 0.5)",
      }}>
        {days.map((day, index) => {
          const dayEvents = getEventsForDay(day.date);
          return (
            <div
              key={index}
              onClick={() => day.currentMonth && openAddModal(day.date)}
              onDragOver={(e) => handleDragOver(e, day.date)}
              onDrop={(e) => handleDrop(e, day.date)}
              style={{
                minHeight: "100px",
                height: "110px",
                borderBottom: index < days.length - 7 ? "1px solid rgba(129, 140, 248, 0.08)" : "none",
                borderRight: (index + 1) % 7 !== 0 ? "1px solid rgba(129, 140, 248, 0.08)" : "none",
                padding: "10px 8px 6px 8px",
                background: day.currentMonth ? "rgba(17, 24, 39, 0.15)" : "rgba(17, 24, 39, 0.32)",
                color: day.currentMonth ? "#e7e9eb" : "#7c7e8a",
                cursor: day.currentMonth ? "pointer" : "default",
                position: "relative",
                transition: "background 0.18s, box-shadow 0.18s",
                boxShadow: day.today ? "0 0 0 2px #818cf8, 0 2px 8px rgba(129,140,248,0.08)" : "none",
                zIndex: day.today ? 2 : 1,
                borderTopLeftRadius: index === 0 ? "12px" : undefined,
                borderTopRightRadius: index === 6 ? "12px" : undefined,
                borderBottomLeftRadius: index === days.length - 7 ? "12px" : undefined,
                borderBottomRightRadius: index === days.length - 1 ? "12px" : undefined,
              }}
              aria-label={`${day.day} ${new Date(day.year, day.month, day.day).toLocaleString('default', { month: 'long' })}`}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "2px"
              }}>
                <div style={{
                  position: "relative",
                  width: "28px",
                  height: "28px"
                }}>
                  {day.today && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "9999px",
                      border: "2.5px solid #818cf8",
                      background: "rgba(129, 140, 248, 0.08)",
                      zIndex: 1
                    }}></div>
                  )}
                  <span style={{
                    position: "relative",
                    zIndex: 10,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "28px",
                    width: "28px",
                    borderRadius: "9999px",
                    fontSize: "0.95rem",
                    color: day.today ? "#fff" : day.currentMonth ? "#e7e9eb" : "#7c7e8a",
                    fontWeight: day.today ? 700 : 500,
                    background: day.today ? "linear-gradient(135deg, #818cf8 60%, #a5b4fc 100%)" : "transparent",
                    boxShadow: day.today ? "0 2px 8px #818cf822" : undefined
                  }}>
                    {day.day}
                  </span>
                </div>
                {day.currentMonth && dayEvents.length > 0 && (
                  <span style={{
                    fontSize: "0.75rem",
                    color: "#b4b8f8",
                    background: "rgba(129, 140, 248, 0.13)",
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    fontWeight: 500,
                    boxShadow: "0 1px 2px #818cf811"
                  }}>
                    {dayEvents.length}
                  </span>
                )}
              </div>
              <div style={{
                marginTop: "2px",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                overflowY: "auto",
                maxHeight: "65px",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(156, 163, 175, 0.3) transparent",
              }}>
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    onClick={e => {
                      e.stopPropagation();
                      openEditModal(event);
                    }}
                    draggable
                    onDragStart={e => handleDragStart(event)}
                    onDragEnd={handleDragEnd}
                    style={{
                      fontSize: "0.78rem",
                      padding: "4px 7px",
                      borderRadius: "5px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      background: `linear-gradient(90deg, ${event.color}55 60%, ${event.color}22 100%)`,
                      borderLeft: `3.5px solid ${event.color}`,
                      color: "#fff",
                      fontWeight: 500,
                      boxShadow: "0 1px 2px #0002"
                    }}
                    className="hover:brightness-110"
                    aria-label={`Event: ${event.title}`}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "9999px",
                        marginRight: "7px",
                        background: event.color
                      }}></div>
                      <span style={{
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}>
                        {event.title}
                      </span>
                    </div>
                  </div>
                ))}
                {day.currentMonth && dayEvents.length === 0 && (
                  <div style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.2s",
                  }}
                  className="hover:opacity-100"
                  >
                    <div style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "9999px",
                      background: "rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    className="hover:bg-white/20"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#d1d5db">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
  // Week view - update to show events with proper duration
  const renderWeekView = () => {
    // Get current week dates
    const today = new Date();
    const currentDay = currentMonth.getDay(); // 0-6, starting with Sunday
    const firstDayOfWeek = new Date(currentMonth);
    firstDayOfWeek.setDate(currentMonth.getDate() - currentDay);
    
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(firstDayOfWeek);
      day.setDate(firstDayOfWeek.getDate() + i);
      weekDays.push({
        date: day,
        isToday: day.toDateString() === today.toDateString()
      });
    }
    
    return (
      <div style={{
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid rgba(107, 114, 128, 0.4)",
        background: "transparent",
      }}>
        {/* Days of week with dates */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(7, 1fr)",
          backgroundColor: "rgba(17, 24, 39, 0.4)"
        }}>
          {weekDays.map((day, index) => (
            <div key={index} style={{ 
              padding: "12px",
              textAlign: "center",
              borderBottom: "1px solid rgba(107, 114, 128, 0.4)"
            }}>
              <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#d1d5db" }}>
                {daysOfWeek[index]}
              </div>
              <div style={{ 
                marginTop: "4px", 
                height: "24px",
                width: "24px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: day.isToday ? "500" : "400",
                color: "#e7e9eb",
                backgroundColor: day.isToday ? "rgba(79, 70, 229, 0.3)" : "transparent",
                border: day.isToday ? "2px solid rgba(129, 140, 248, 0.7)" : "none"
              }}>
                {day.date.getDate()}
              </div>
            </div>
          ))}
        </div>
        
        {/* Week grid with hours */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
          {weekDays.map((day, dayIndex) => {
            const dayEvents = getEventsForDay(day.date);
            return (
              <div 
                key={dayIndex}
                style={{
                  height: "500px", 
                  borderRight: dayIndex < 6 ? "1px solid rgba(107, 114, 128, 0.4)" : "none",
                  backgroundColor: "rgba(17, 24, 39, 0.2)",
                  position: "relative",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(156, 163, 175, 0.3) transparent",
                }}
              >
                {/* Render hour grid lines in background */}
                {Array.from({ length: 24 }, (_, i) => (
                  <div 
                    key={`hour-${i}`}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: `${(i / 24) * 100}%`,
                      borderTop: "1px dashed rgba(107, 114, 128, 0.2)",
                      height: 0,
                      pointerEvents: "none"
                    }}
                  />
                ))}
                
                {/* Render events positioned by time */}
                {dayEvents.map(event => {
                  const position = calculateEventPosition(event);
                  return (
                    <div
                      key={event.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditModal(event);
                      }}
                      draggable
                      onDragStart={(e) => handleDragStart(event)}
                      onDragEnd={handleDragEnd}
                      style={{
                        fontSize: "0.75rem",
                        padding: "6px 8px",
                        borderRadius: "4px",
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        backgroundColor: `${event.color}70`,
                        borderLeft: `3px solid ${event.color}`,
                        position: "absolute",
                        left: "8px",
                        right: "8px",
                        top: position.top,
                        height: position.height,
                        minHeight: "25px", // Minimum height for very short events
                        zIndex: 5
                      }}
                      className="hover:brightness-125"
                      aria-label={`Event: ${event.title}`}
                    >
                      <div style={{ fontWeight: "500" }}>{event.title}</div>
                      <div style={{ fontSize: "0.7rem", opacity: 0.9 }}>
                        {position.formattedStart} - {position.formattedEnd}
                      </div>
                    </div>
                  );
                })}
                
                {/* Add event area */}
                <div 
                  style={{
                    position: "absolute",
                    inset: 0,
                    cursor: "pointer"
                  }}
                  onClick={() => openAddModal(day.date)}
                >
                  {dayEvents.length === 0 && (
                    <div style={{ 
                      height: "100%", 
                      width: "100%", 
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.2s",
                    }}
                    className="hover:opacity-100"
                    >
                      <div style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                      className="hover:bg-white/20"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#d1d5db">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  // Day view - update to show events with proper duration
  const renderDayView = () => {
    const dayEvents = getEventsForDay(currentMonth);
    const hours = Array.from({ length: 24 }, (_, i) => i);
    
    return (
      <div style={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(107, 114, 128, 0.25)",
        background: "rgba(17, 24, 39, 0.6)",
        backdropFilter: "blur(8px)",
      }}>
        {/* Day header - enhanced styling */}
        <div style={{ 
          padding: "18px",
          backgroundColor: "rgba(17, 24, 39, 0.5)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}>
          <div style={{ 
            fontSize: "1.1rem", 
            fontWeight: "600", 
            color: "#f3f4f6",
            letterSpacing: "0.02em" 
          }}>
            {daysOfWeek[currentMonth.getDay()]}
          </div>
          <div style={{ 
            marginTop: "10px", 
            height: "42px",
            width: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "9999px",
            fontSize: "1.15rem",
            fontWeight: "600",
            color: "#ffffff",
            backgroundColor: "rgba(79, 70, 229, 0.4)",
            border: "2px solid rgba(129, 140, 248, 0.7)",
            boxShadow: "0 2px 10px rgba(79, 70, 229, 0.15)"
          }}>
            {currentMonth.getDate()}
          </div>
        </div>
        {/* Day view with positioned events - enhanced grid */}
        <div style={{ 
          position: "relative",
          height: "550px", // Visible height of the scrollable area
          overflowY: "auto",
          backgroundColor: "rgba(17, 24, 39, 0.2)",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(156, 163, 175, 0.3) transparent",
          padding: "8px 0"
        }}>
          {/* Hour markers with improved spacing and styling */}
          <div style={{ position: "relative", height: "1200px" }}>
            {hours.map(hour => (
              <div 
                key={hour}
                onClick={() => {
                  const date = new Date(currentMonth);
                  date.setHours(hour, 0, 0, 0);
                  openAddModal(date);
                }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: `${hour * (1200 / 24)}px`, // 1200px / 24 = 50px per hour
                  height: "50px", // Each hour block is now 50px tall
                  paddingTop: "10px",
                  borderTop: hour > 0 ? "2px solid rgba(72, 74, 91, 0.25)" : "none",                
                  zIndex: 1,
                  boxSizing: "border-box"
                }}
              >
                <div style={{ 
                  position: "absolute",
                  left: 0,
                  top: "6px",
                  width: "55px",
                  fontSize: "0.8rem", 
                  fontWeight: "500",
                  color: "#a3a3a3",
                  padding: "9px 12px 0 10px",
                  textAlign: "left",
                  zIndex: 3,
                  letterSpacing: "0.02em"
                }}>
                  {hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour > 12 ? `${hour-12} PM` : `${hour} AM`}
                </div>
                {/* Subtle alternating row highlight (removed for now) */}
              </div>
            ))}
            {/* Positioned events based on their duration */}
            {dayEvents.map(event => {
              const start = new Date(event.start);
              const end = new Date(event.end);
              // Calculate start and end in hours (e.g., 13.5 for 1:30pm)
              const startHour = start.getHours() + start.getMinutes() / 60;
              const endHour = end.getHours() + end.getMinutes() / 60;
              // Clamp endHour to 24 if it exceeds
              const clampedEndHour = Math.min(endHour, 24);
              // Calculate top and height in px (50px per hour)
              const hourHeight = 50;
              const topPx = startHour * hourHeight;
              const heightPx = Math.max((clampedEndHour - startHour) * hourHeight, 28); // min 28px
              return (
                <div
                  key={event.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditModal(event);
                  }}
                  draggable
                  onDragStart={(e) => handleDragStart(event)}
                  onDragEnd={handleDragEnd}
                  style={{
                    fontSize: "0.75rem",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    backgroundColor: `${event.color}80`,
                    borderLeft: `3px solid ${event.color}`,
                    position: "absolute",
                    left: "62px",
                    right: "16px",
                    top: `${topPx}px`,
                    height: `${heightPx}px`,
                    minHeight: "28px",
                    zIndex: 5,
                    boxShadow: "0 1px 2px rgba(0,0,0,0.06)"
                  }}
                  className="hover:brightness-110 hover:translate-x-0.5 hover:shadow-md"
                  aria-label={`Event: ${event.title}`}
                >
                  <div style={{ 
                    fontWeight: "600", 
                    marginBottom: "2px",
                    color: "#fff"
                  }}>{event.title}</div>
                  <div style={{ 
                    fontSize: "0.7rem", 
                    opacity: 0.9,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {formatTime(start)} - {formatTime(end)}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Add event click area */}
          <div 
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2
            }}
          />
        </div>
      </div>
    );
  };
  
  return (
    <div style={{
      maxWidth: "1200px",
      margin: "80px auto 80px",
      padding: "24px",
      background: "transparent",
      borderRadius: "12px",
      border: "1px solid rgba(129, 140, 248, 0.4)", 
      backdropFilter: "blur(8px)",
      position: "relative",
      zIndex: 5,
      color: "#e5e7eb",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)"
    }}>
      {/* Redesigned Calendar Header Layout with Improved Button Arrangement */}
      <div className="relative flex justify-between items-center w-full mb-6 pb-4 border-b border-indigo-400/40">
        {/* Left: View Switcher */}
        <div className="flex items-center space-x-3 z-10">
          <div className="flex border border-gray-500/40 rounded-md overflow-hidden">
            <div
              style={{
                display: "flex",
                position: "relative",
                background: "0 2px 8px #818cf822",
                borderRadius: "8px",
                overflow: "hidden",
                width: "192px", // 3 * (6px+10px+font+padding) = 192px is a safe fixed width for 3 buttons
                height: "36px",
                transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
              }}
            >
              {/* Animated background for active button */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: viewMode === "month" ? 0 : viewMode === "week" ? "64px" : "128px",
                  width: "64px",
                  height: "100%",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "8px",
                  transition: "left 0.28s cubic-bezier(.4,0,.2,1), background 0.2s",
                  zIndex: 1,
                }}
              />
              <button
                onClick={() => handleViewChange('month')}
                style={{
                  ...buttonStyle,
                  padding: "6px 10px",
                  fontSize: "0.875rem",
                  color: viewMode === 'month' ? "#e5e7eb" : "#9ca3af",
                  background: "transparent",
                  width: "64px",
                  zIndex: 2,
                  transition: "color 0.2s"
                }}
                className="hover:bg-white/10"
              >
                Month
              </button>
              <button
                onClick={() => handleViewChange('week')}
                style={{
                  ...buttonStyle,
                  padding: "6px 10px",
                  fontSize: "0.875rem",
                  color: viewMode === 'week' ? "#e5e7eb" : "#9ca3af",
                  background: "transparent",
                  width: "64px",
                  zIndex: 2,
                  transition: "color 0.2s"
                }}
                className="hover:bg-white/10"
              >
                Week
              </button>
              <button
                onClick={() => handleViewChange('day')}
                style={{
                  ...buttonStyle,
                  padding: "6px 10px",
                  fontSize: "0.875rem",
                  color: viewMode === 'day' ? "#e5e7eb" : "#9ca3af",
                  background: "transparent",
                  width: "64px",
                  zIndex: 2,
                  transition: "color 0.2s"
                }}
                className="hover:bg-white/10"
              >
                Day
              </button>
            </div>
          </div>
        </div>
        
        {/* Center: Current Date (absolutely positioned) */}
        <h2 className="absolute left-1/2 -translate-x-1/2 text-xl font-medium text-white m-0">
          {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
        </h2>
        
        {/* Right: Navigation and Add Event */}
        <div className="flex items-center space-x-2 z-10">
          <button 
            onClick={prevPeriod} 
            style={{
              ...buttonStyle,
              padding: "6px 8px",
              borderRadius: "6px",
              cursor: "pointer",
              color: "#e5e7eb",
              transition: "background-color 0.2s"
            }}
            className="hover:bg-white/10"
            aria-label={`Previous ${viewMode}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToToday}
            style={{
              ...buttonStyle,
              borderRadius: "6px",
              padding: "6px 14px",
              fontSize: "0.875rem",
              color: "#e5e7eb",
              cursor: "pointer",
              border: "1px solid rgba(107, 114, 128, 0.4)",
            }}
            className="hover:bg-white/10"
            aria-label="Go to today"
          >
            Today
          </button>
          <button 
            onClick={nextPeriod} 
            style={{
              ...buttonStyle,
              padding: "6px 8px",
              borderRadius: "6px",
              cursor: "pointer",
              color: "#e5e7eb",
              transition: "background-color 0.2s"
            }}
            className="hover:bg-white/10"
            aria-label={`Next ${viewMode}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => openAddModal(new Date())}
            style={{
              ...buttonStyle,
              backgroundColor: "rgba(79, 70, 229, 0.3)",
              color: "#e5e7eb",
              borderRadius: "6px",
              padding: "6px 14px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              border: "1px solid rgba(79, 70, 229, 0.5)",
            }}
            className="hover:bg-indigo-500/40"
            aria-label="Create new event"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: "4px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Event
          </button>
        </div>
      </div>
      
      {/* Calendar View with animation - unchanged */}
      <div style={{
        opacity: animating ? 0.6 : 1,
        transform: animating ? 'scale(0.98)' : 'scale(1)',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
      }}>
        {renderCalendarView()}
      </div>
      
      {/* Modal - unchanged */}
      {modalOpen && (
        <div style={{ 
          position: "fixed",
          inset: 0,
          zIndex: 50,
          overflow: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px"
        }}>
          <div 
            style={{
              backgroundColor: "rgba(17, 24, 39, 0.8)",
              borderRadius: "12px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              border: "1px solid rgba(129, 140, 248, 0.4)", // Updated to indigo border
              padding: "24px",
              width: "100%",
              maxWidth: "448px",
              transform: "scale(1)",
              transition: "all 0.2s"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content */}
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              marginBottom: "24px"
            }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "500", color: "#e7e9eb" }}>
                {modalMode === 'add' ? 'New Event' : 'Edit Event'}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ 
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#d1d5db",
                  marginBottom: "4px"
                }} htmlFor="title">
                  Event Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={eventForm.title}
                  onChange={handleFormChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid rgba(129, 140, 248, 0.4)", // Updated to indigo border
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    transition: "all 0.2s",
                    backgroundColor: "rgba(17, 24, 39, 0.6)",
                    color: "#e7e9eb",
                  }}
                  className="focus:ring-2 focus:ring-indigo-400/70 focus:border-transparent"
                  placeholder="Enter event title"
                  required
                />
              </div>
              
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#d1d5db",
                  marginBottom: "4px"
                }} htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={eventForm.description}
                  onChange={handleFormChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid rgba(129, 140, 248, 0.4)", // Updated to indigo border
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    transition: "all 0.2s",
                    resize: "vertical",
                    rows: 3,
                    backgroundColor: "rgba(17, 24, 39, 0.6)",
                    color: "#e7e9eb",
                  }}
                  className="focus:ring-2 focus:ring-indigo-400/70 focus:border-transparent"
                  placeholder="Add details about this event..."
                />
              </div>
              
              {/* Color selector */}
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#d1d5db",
                  marginBottom: "8px"
                }}>
                  Color Label
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {{
                    '#818cf8': 'Indigo',
                    '#34d399': 'Green',
                    '#fbbf24': 'Yellow',
                    '#f87171': 'Red',
                    '#a78bfa': 'Purple',
                    '#ec4899': 'Pink',
                    '#64748b': 'Slate',
                    '#38bdf8': 'Sky'
                  }[eventForm.color]}
                </div>
              </div>
              
              <div style={{ 
                paddingTop: "8px", 
                display: "flex", 
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                {modalMode === 'edit' && (
                  <button
                    type="button"
                    onClick={handleDeleteEvent}
                    className="bg-red-500/20 hover:bg-red-500/30 border border-red-400/50 text-red-300 rounded-md px-4 py-2 flex items-center transition-all duration-200 ease-out shadow-sm shadow-black/40"
                    aria-label="Delete event"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: "4px" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>
                )}
                <div style={{ marginLeft: modalMode === 'add' ? "auto" : 0 }}>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-500/20 hover:bg-gray-500/30 border border-gray-400/40 text-white rounded-md px-4 py-2 mr-2 transition-all duration-200 ease-out shadow-sm shadow-black/40"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600/40 hover:bg-indigo-500/60 border border-indigo-400/40 text-white rounded-md px-4 py-2 transition-all duration-200 ease-out shadow-sm shadow-black/40"
                  >
                    {modalMode === 'add' ? 'Create' : 'Save'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotionCalendar;