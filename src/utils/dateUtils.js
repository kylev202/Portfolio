/**
 * Enhanced date utilities for calendar application
 */

/**
 * Format date to YYYY-MM-DD for comparison
 */
export const formatDateKey = (date) => {
  if (!date) return '';
  try {
    return new Date(date).toISOString().split('T')[0];
  } catch (e) {
    console.error("Invalid date in formatDateKey:", date);
    return '';
  }
};

/**
 * Format time to human-readable string (e.g., "2:30 PM")
 */
export const formatTime = (date) => {
  if (!date) return '';
  
  try {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  } catch (e) {
    console.error("Error formatting time:", e);
    return '';
  }
};

/**
 * Format date to a more readable string
 */
export const formatDate = (date) => {
  if (!date) return '';
  
  try {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (e) {
    console.error("Error formatting date:", e);
    return '';
  }
};

/**
 * Calculate event position for time-based views
 */
export const calculateEventPosition = (event, hourHeight = 50, bufferPx = 10) => {
  if (!event || !event.start || !event.end) {
    console.error("Invalid event data for positioning:", event);
    return { top: 0, height: hourHeight, formattedStart: '', formattedEnd: '' };
  }
  
  try {
    // Parse the start and end times
    const startTime = new Date(event.start);
    const endTime = new Date(event.end);
    
    // Calculate hours as decimal (e.g., 12:30 = 12.5)
    const startHour = startTime.getHours() + startTime.getMinutes() / 60;
    const endHour = endTime.getHours() + endTime.getMinutes() / 60;
    
    // Calculate positions with buffer from hour lines
    const topPosition = startHour * hourHeight + bufferPx;
    const height = Math.max((endHour - startHour) * hourHeight - (bufferPx * 2), 25);
    
    return {
      top: topPosition,
      height: height,
      formattedStart: formatTime(startTime),
      formattedEnd: formatTime(endTime),
      duration: endHour - startHour // Duration in hours
    };
  } catch (e) {
    console.error("Error calculating event position:", e);
    return { top: 0, height: hourHeight, formattedStart: '', formattedEnd: '' };
  }
};

/**
 * Get calendar days for a month view
 */
export const getCalendarDays = (currentMonth) => {
  try {
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
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today for comparison
    
    // Previous month days
    for (let i = prevMonthDays - daysFromPrevMonth + 1; i <= prevMonthDays; i++) {
      const dayDate = new Date(month - 1 < 0 ? year - 1 : year, month - 1 < 0 ? 11 : month - 1, i);
      days.push({
        day: i,
        month: month - 1 < 0 ? 11 : month - 1,
        year: month - 1 < 0 ? year - 1 : year,
        currentMonth: false,
        today: dayDate.getTime() === today.getTime(),
        date: dayDate
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i);
      days.push({
        day: i,
        month,
        year,
        currentMonth: true,
        today: dayDate.getTime() === today.getTime(),
        date: dayDate
      });
    }
    
    // Next month days
    for (let i = 1; i <= daysFromNextMonth; i++) {
      const dayDate = new Date(month + 1 > 11 ? year + 1 : year, month + 1 > 11 ? 0 : month + 1, i);
      days.push({
        day: i,
        month: month + 1 > 11 ? 0 : month + 1,
        year: month + 1 > 11 ? year + 1 : year,
        currentMonth: false,
        today: dayDate.getTime() === today.getTime(),
        date: dayDate
      });
    }
    
    return days;
  } catch (e) {
    console.error("Error generating calendar days:", e);
    return [];
  }
};

/**
 * Get week days for week view
 */
export const getWeekDays = (currentDate) => {
  try {
    const currentDay = currentDate.getDay(); // 0-6, starting with Sunday
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(currentDate.getDate() - currentDay);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today for comparison
    
    const weekDays = [];
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(firstDayOfWeek);
      day.setDate(firstDayOfWeek.getDate() + i);
      weekDays.push({
        date: day,
        isToday: day.toDateString() === today.toDateString()
      });
    }
    
    return weekDays;
  } catch (e) {
    console.error("Error generating week days:", e);
    return [];
  }
};

/**
 * Check if a date is today
 */
export const isToday = (date) => {
  try {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  } catch (e) {
    return false;
  }
};

/**
 * Round a date to the nearest interval (e.g., 30 minutes)
 */
export const roundToNearestInterval = (date, intervalMinutes = 30) => {
  try {
    const roundedDate = new Date(date);
    const minutes = roundedDate.getMinutes();
    const remainder = minutes % intervalMinutes;
    
    // Round up or down depending on whether we're closer to the next interval
    const roundUp = remainder >= intervalMinutes / 2;
    
    roundedDate.setMinutes(
      minutes - remainder + (roundUp ? intervalMinutes : 0),
      0, // seconds
      0  // milliseconds
    );
    
    return roundedDate;
  } catch (e) {
    console.error("Error rounding date:", e);
    return new Date();
  }
};

/**
 * Generate an array of hour labels
 */
export const getHourLabels = (use24HourFormat = false) => {
  return Array.from({ length: 24 }, (_, hour) => {
    if (use24HourFormat) {
      return `${hour.toString().padStart(2, '0')}:00`;
    } else {
      return hour === 0 ? '12 AM' : 
             hour === 12 ? '12 PM' : 
             hour < 12 ? `${hour} AM` : 
             `${hour - 12} PM`;
    }
  });
};
