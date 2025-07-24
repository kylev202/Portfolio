import { useState, useRef } from 'react';

/**
 * Custom hook for handling drag and drop functionality in the calendar
 * 
 * @param {Function} onEventMove Callback function when an event is moved
 * @returns {Object} Drag and drop handlers and state
 */
export const useDragDrop = (onEventMove) => {
  const [draggingEvent, setDraggingEvent] = useState(null);
  const [dragOrigin, setDragOrigin] = useState({ x: 0, y: 0 });
  const draggedOver = useRef(null);
  
  /**
   * Handle the start of a drag operation
   * 
   * @param {Object} event The event being dragged
   * @param {Object} e The drag event
   */
  const handleDragStart = (event, e) => {
    // Prevent default ghost image (in browsers that support it)
    if (e.dataTransfer) {
      const emptyImg = new Image();
      emptyImg.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      e.dataTransfer.setDragImage(emptyImg, 0, 0);
    }
    
    // Store the event being dragged
    setDraggingEvent(event);
    
    // Store the coordinates where the drag started
    setDragOrigin({
      x: e.clientX,
      y: e.clientY
    });
    
    // Add a class to the body to show we're dragging
    document.body.classList.add('dragging-event');
  };
  
  /**
   * Handle dragover event - allows drop
   * 
   * @param {Object} e The drag event
   * @param {Date} date The date being dragged over
   */
  const handleDragOver = (e, date) => {
    e.preventDefault();
    draggedOver.current = date;
    
    // Update cursor to show a valid drop target
    e.dataTransfer.dropEffect = 'move';
  };
  
  /**
   * Handle drop event - complete the move
   * 
   * @param {Object} e The drop event
   * @param {Date} date The date where the event is dropped
   */
  const handleDrop = (e, date) => {
    e.preventDefault();
    
    if (draggingEvent && draggedOver.current) {
      // Call the callback with the dragged event and target date
      if (typeof onEventMove === 'function') {
        onEventMove(draggingEvent.id, date);
      }
    }
    
    // Reset state
    setDraggingEvent(null);
    draggedOver.current = null;
    document.body.classList.remove('dragging-event');
  };
  
  /**
   * Handle the end of a drag operation
   */
  const handleDragEnd = () => {
    setDraggingEvent(null);
    draggedOver.current = null;
    document.body.classList.remove('dragging-event');
  };
  
  return {
    draggingEvent,
    dragOrigin,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd
  };
};

export default useDragDrop;
