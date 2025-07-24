/**
 * Utility functions for handling recurring events in calendar
 */

/**
 * Generate recurring event instances based on recurrence pattern
 * @param {Object} baseEvent - The original event with recurrence pattern
 * @param {Date} startDate - The start date for the range to generate occurrences
 * @param {Date} endDate - The end date for the range to generate occurrences
 * @returns {Array} Array of event occurrences
 */
export const generateRecurringEvents = (baseEvent, startDate, endDate) => {
  if (!baseEvent.recurrence) return [baseEvent]; // Not a recurring event
  
  const { recurrence } = baseEvent;
  const occurrences = [];
  
  // Clone base event
  const cloneEvent = (date) => {
    // Calculate time difference between original event date and this occurrence
    const originalDate = new Date(baseEvent.date);
    const timeDiff = date.getTime() - originalDate.getTime();
    
    // Create new start and end times offset by same amount
    const newStart = new Date(new Date(baseEvent.start).getTime() + timeDiff);
    const newEnd = new Date(new Date(baseEvent.end).getTime() + timeDiff);
    
    return {
      ...baseEvent,
      id: `${baseEvent.id}_${date.toISOString()}`,
      date: new Date(date),
      start: newStart.toISOString(),
      end: newEnd.toISOString(),
      isRecurringInstance: true,
      originalEventId: baseEvent.id
    };
  };
  
  // Handle weekly recurrence - support both type and frequency properties
  const recurrenceType = recurrence.type || recurrence.frequency;
  
  if (recurrenceType === 'weekly') {
    const recurStartDate = new Date(recurrence.startDate || baseEvent.date);
    const recurEndDate = recurrence.endDate ? new Date(recurrence.endDate) : null;
    const interval = recurrence.interval || 1; // Default to every week
    
    // Set start point to the first occurrence that falls within our range
    let currentDate = new Date(recurStartDate);
    
    // Generate occurrences within the range
    // Use a wider range to ensure events are visible
    while (currentDate <= endDate) {
      if (!recurEndDate || currentDate <= recurEndDate) {
        // If specific days of week are specified, check if this date matches
        if (!recurrence.daysOfWeek || recurrence.daysOfWeek.includes(currentDate.getDay())) {
          // Only add if the date falls within our search range
          if (currentDate >= startDate) {
            occurrences.push(cloneEvent(new Date(currentDate)));
          }
        }
      }
      
      // Move to next potential occurrence
      currentDate.setDate(currentDate.getDate() + (7 * interval));
      
      // Check if we've hit the count limit
      if (recurrence.count && occurrences.length >= recurrence.count) break;
    }
  }
  
  return occurrences;
};

/**
 * Update a recurring event - either just this instance or the entire series
 * @param {Object} event - The event instance being updated
 * @param {Object} updates - The updates to apply
 * @param {String} updateType - 'instance' or 'series'
 * @param {Array} allEvents - All events in the calendar
 * @returns {Object} Updated events and operations to perform
 */
export const updateRecurringEvent = (event, updates, updateType, allEvents) => {
  if (updateType === 'instance' || !event.isRecurringInstance) {
    // Update just this instance
    if (event.isRecurringInstance) {
      // For instances, create an exception to the recurrence
      return {
        updatedEvents: [{ ...event, ...updates, isException: true }],
        toAdd: [{ ...event, ...updates, isException: true }],
        toUpdate: [],
        toDelete: []
      };
    } else {
      // For non-recurring events, just update normally
      return {
        updatedEvents: [{ ...event, ...updates }],
        toUpdate: [{ ...event, ...updates }],
        toAdd: [],
        toDelete: []
      };
    }
  } else {
    // Update entire series
    const originalEvent = allEvents.find(e => e.id === event.originalEventId);
    if (!originalEvent) return { updatedEvents: [], toUpdate: [], toAdd: [], toDelete: [] };
    
    const updatedOriginal = { ...originalEvent, ...updates };
    
    // Find and remove all instances of this series
    const instancesToDelete = allEvents.filter(
      e => e.isRecurringInstance && e.originalEventId === originalEvent.id
    );
    
    return {
      updatedEvents: [updatedOriginal],
      toUpdate: [updatedOriginal],
      toAdd: [],
      toDelete: instancesToDelete
    };
  }
};
