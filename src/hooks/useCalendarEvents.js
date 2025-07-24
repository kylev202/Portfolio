import { useState, useEffect, useCallback } from 'react';
import { formatDateKey, roundToNearestInterval } from '../utils/dateUtils';
import { generateRecurringEvents } from '../utils/recurrenceUtils';

/**
 * Custom hook to manage calendar events with recurring event support
 * 
 * @param {Object} options Configuration options
 * @param {boolean} options.useLocalStorage Whether to persist events in localStorage
 * @param {Array} options.initialEvents Initial events to use
 * @returns {Object} Event management methods and data
 */
export const useCalendarEvents = ({ 
  useLocalStorage = true,
  initialEvents = []
} = {}) => {
  // Empty default events - removed all sample events
  const defaultEvents = initialEvents.length > 0 ? initialEvents : [];

  const [events, setEvents] = useState(defaultEvents);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Load events from localStorage on mount
  useEffect(() => {
    if (useLocalStorage) {
      try {
        setIsLoading(true);
        const savedEvents = localStorage.getItem('notionCalendarEvents');
        if (savedEvents) {
          // Convert date strings back to Date objects
          const parsedEvents = JSON.parse(savedEvents).map(event => ({
            ...event,
            date: new Date(event.date)
          }));
          setEvents(parsedEvents);
        }
      } catch (error) {
        console.error('Error loading events from localStorage:', error);
        setError('Failed to load saved events.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [useLocalStorage]);
  
  // Save events to localStorage whenever they change
  useEffect(() => {
    if (useLocalStorage && !isLoading) {
      try {
        localStorage.setItem('notionCalendarEvents', JSON.stringify(events));
      } catch (error) {
        console.error('Error saving events to localStorage:', error);
        setError('Failed to save events.');
      }
    }
  }, [events, isLoading, useLocalStorage]);
  
  // CRUD operations for events
  const addEvent = useCallback((newEvent) => {
    setEvents(prev => {
      // Ensure date is a Date object
      const processedEvent = {
        ...newEvent,
        date: newEvent.date instanceof Date ? newEvent.date : new Date(newEvent.date)
      };
      
      // Add the new event and sort by start time
      const updated = [...prev, processedEvent];
      return updated.sort((a, b) => new Date(a.start) - new Date(b.start));
    });
  }, []);
  
  const updateEvent = useCallback((updatedEvent) => {
    setEvents(prev => 
      prev.map(event => 
        event.id === updatedEvent.id 
          ? {
              ...updatedEvent,
              date: updatedEvent.date instanceof Date 
                ? updatedEvent.date 
                : new Date(updatedEvent.date)
            } 
          : event
      )
    );
  }, []);
  
  const deleteEvent = useCallback((eventId) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  }, []);
  
  // Move an event to a different date
  const moveEvent = useCallback((eventId, newDate) => {
    setEvents(prev => {
      return prev.map(event => {
        if (event.id !== eventId) return event;
        
        // Calculate the time difference between old and new dates
        const oldDate = new Date(event.date);
        const timeDiff = newDate.getTime() - oldDate.getTime();
        
        // Adjust the start and end times by the same amount
        const newStart = new Date(event.start);
        newStart.setTime(newStart.getTime() + timeDiff);
        
        const newEnd = new Date(event.end);
        newEnd.setTime(newEnd.getTime() + timeDiff);
        
        return {
          ...event,
          date: newDate,
          start: newStart.toISOString(),
          end: newEnd.toISOString()
        };
      });
    });
  }, []);
  
  // Enhanced function to get events for a day, including recurring events
  const getEventsForDay = useCallback((date) => {
    if (!date) return [];
    
    const dateKey = formatDateKey(date);
    
    // Get regular events for this day
    const regularEvents = events.filter(event => 
      !event.recurrence && formatDateKey(new Date(event.date)) === dateKey
    );
    
    // Get and process recurring events
    const recurringBaseEvents = events.filter(event => event.recurrence);
    
    // Calculate a wider date range to generate occurrences
    // This ensures we catch weekly recurring events
    const rangeStart = new Date(date);
    rangeStart.setMonth(rangeStart.getMonth() - 3); // Look back 3 months
    
    const rangeEnd = new Date(date);
    rangeEnd.setMonth(rangeEnd.getMonth() + 3); // Look ahead 3 months
    
    // Generate occurrences for all recurring events
    const recurringEvents = recurringBaseEvents.flatMap(event => 
      generateRecurringEvents(event, rangeStart, rangeEnd)
    );
    
    // Filter to only include occurrences that fall on our target date
    const matchingRecurringEvents = recurringEvents.filter(
      event => formatDateKey(new Date(event.date)) === dateKey
    );
    
    // Combine regular and recurring events
    return [...regularEvents, ...matchingRecurringEvents].sort(
      (a, b) => new Date(a.start) - new Date(b.start)
    );
  }, [events]);
  
  // Create a new event with default values
  const createEventTemplate = useCallback((date = new Date()) => {
    // Round to nearest 30 minutes
    const roundedDate = roundToNearestInterval(date);
    
    // Default to a 1-hour event
    const endDate = new Date(roundedDate);
    endDate.setHours(endDate.getHours() + 1);
    
    return {
      id: '',
      title: '',
      description: '',
      color: '#818cf8', // Default indigo
      date: date,
      start: roundedDate.toISOString(),
      end: endDate.toISOString()
    };
  }, []);
  
  return {
    events,
    isLoading,
    error,
    addEvent,
    updateEvent,
    deleteEvent,
    moveEvent,
    getEventsForDay,
    createEventTemplate
  };
};

export default useCalendarEvents;
