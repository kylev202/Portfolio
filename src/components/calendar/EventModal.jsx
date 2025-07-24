import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/eventModal.css";

const EventModal = ({ mode, initialData, onSubmit, onDelete, onClose }) => {
  const [formData, setFormData] = useState(initialData);
  const [formAnimation, setFormAnimation] = useState("open");
  const [showRecurrence, setShowRecurrence] = useState(
    !!initialData.recurrence
  );
  const [errors, setErrors] = useState({});
  const [isDirty, setIsDirty] = useState(false);

  // Reset form data when initialData changes
  useEffect(() => {
    setFormData(initialData);
    setErrors({});
    setIsDirty(false);
  }, [initialData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsDirty(true);

    // Clear errors for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    // Time validation
    const startDate = new Date(formData.start);
    const endDate = new Date(formData.end);

    if (endDate <= startDate) {
      newErrors.end = "End time must be after start time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    } else {
      // Add shake animation to form
      const form = e.target;
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 600);
    }
  };

  // Handle event deletion with confirmation
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      onDelete(formData.id);
    }
  };

  // Handle color selection
  const handleColorChange = (color) => {
    setFormData((prev) => ({
      ...prev,
      color,
    }));
    setIsDirty(true);
  };

  // Gracefully close the modal with animation
  const handleClose = () => {
    // If form is dirty, confirm before closing
    if (
      isDirty &&
      !window.confirm("You have unsaved changes. Discard changes?")
    ) {
      return;
    }

    setFormAnimation("close");
    setTimeout(() => {
      onClose();
    }, 200);
  };

  // Available colors with labels for better accessibility
  const availableColors = [
    { value: "#818cf8", label: "Indigo" },
    { value: "#34d399", label: "Green" },
    { value: "#fbbf24", label: "Yellow" },
    { value: "#f87171", label: "Red" },
    { value: "#a78bfa", label: "Purple" },
    { value: "#ec4899", label: "Pink" },
    { value: "#64748b", label: "Slate" },
    { value: "#38bdf8", label: "Sky" },
  ];

  // Format date for input fields
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toISOString().split("T")[0];
    } catch (e) {
      console.error("Invalid date:", dateString);
      return new Date().toISOString().split("T")[0];
    }
  };

  // Format time for input fields
  const formatTime = (dateString) => {
    try {
      return new Date(dateString).toTimeString().slice(0, 5);
    } catch (e) {
      console.error("Invalid date for time:", dateString);
      return "00:00";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={`event-modal ${formAnimation}`}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div className="modal-header">
            <h3>{mode === "add" ? "New Event" : "Edit Event"}</h3>
            <button
              onClick={handleClose}
              className="close-button"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="event-form">
            <div className="form-group">
              <label htmlFor="title">Event Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                required
                className={errors.title ? "error" : ""}
              />
              {errors.title && (
                <div className="error-message">{errors.title}</div>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  value={formatDate(formData.start)}
                  onChange={(e) => {
                    const newDate = new Date(e.target.value);
                    const oldDate = new Date(formData.start);

                    newDate.setHours(oldDate.getHours(), oldDate.getMinutes());

                    setFormData((prev) => ({
                      ...prev,
                      start: newDate.toISOString(),
                      date: newDate,
                    }));
                    setIsDirty(true);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="start-time">Start Time</label>
                <input
                  type="time"
                  id="start-time"
                  name="start-time"
                  value={formatTime(formData.start)}
                  onChange={(e) => {
                    const [hours, minutes] = e.target.value
                      .split(":")
                      .map(Number);
                    const newDate = new Date(formData.start);
                    newDate.setHours(hours, minutes);

                    setFormData((prev) => ({
                      ...prev,
                      start: newDate.toISOString(),
                    }));
                    setIsDirty(true);

                    // Clear end time error if it exists
                    if (errors.end) {
                      setErrors((prev) => ({ ...prev, end: "" }));
                    }
                  }}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  value={formatDate(formData.end)}
                  className={errors.end ? "error" : ""}
                  onChange={(e) => {
                    const newDate = new Date(e.target.value);
                    const oldDate = new Date(formData.end);

                    newDate.setHours(oldDate.getHours(), oldDate.getMinutes());

                    setFormData((prev) => ({
                      ...prev,
                      end: newDate.toISOString(),
                    }));
                    setIsDirty(true);

                    // Clear end time error if it exists
                    if (errors.end) {
                      setErrors((prev) => ({ ...prev, end: "" }));
                    }
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="end-time">End Time</label>
                <input
                  type="time"
                  id="end-time"
                  name="end-time"
                  value={formatTime(formData.end)}
                  className={errors.end ? "error" : ""}
                  onChange={(e) => {
                    const [hours, minutes] = e.target.value
                      .split(":")
                      .map(Number);
                    const newDate = new Date(formData.end);
                    newDate.setHours(hours, minutes);

                    setFormData((prev) => ({
                      ...prev,
                      end: newDate.toISOString(),
                    }));
                    setIsDirty(true);

                    // Clear end time error if it exists
                    if (errors.end) {
                      setErrors((prev) => ({ ...prev, end: "" }));
                    }
                  }}
                />
              </div>
            </div>
            {errors.end && (
              <div className="error-message time-error">{errors.end}</div>
            )}

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Add details about this event..."
              />
            </div>

            <div className="form-group">
              <label>Color</label>
              <div className="color-options">
                {availableColors.map((color) => (
                  <motion.div
                    key={color.value}
                    onClick={() => handleColorChange(color.value)}
                    className={`color-option ${
                      formData.color === color.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.label}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </div>
              <div className="selected-color-name">
                Selected:{" "}
                {availableColors.find((c) => c.value === formData.color)
                  ?.label || "Custom"}
              </div>
            </div>

            {/* Add recurrence options */}
            <div className="form-group">
              <div className="recurrence-toggle">
                <label htmlFor="recurrence-toggle">Repeat</label>
                <input
                  type="checkbox"
                  id="recurrence-toggle"
                  checked={showRecurrence}
                  onChange={() => {
                    setShowRecurrence(!showRecurrence);
                    if (!showRecurrence) {
                      // Set default recurrence when enabling
                      setFormData((prev) => ({
                        ...prev,
                        recurrence: {
                          type: "weekly",
                          interval: 1,
                          startDate: new Date(prev.start)
                            .toISOString()
                            .split("T")[0],
                          endDate: null,
                          count: null,
                        },
                      }));
                    } else {
                      // Remove recurrence when disabling
                      setFormData((prev) => {
                        const { recurrence, ...rest } = prev;
                        return rest;
                      });
                    }
                  }}
                />
              </div>

              {showRecurrence && (
                <div className="recurrence-options">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="recurrence-type">Repeat every</label>
                      <select
                        id="recurrence-interval"
                        value={formData.recurrence?.interval || 1}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            recurrence: {
                              ...prev.recurrence,
                              interval: parseInt(e.target.value),
                            },
                          }));
                        }}
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>

                      <select
                        id="recurrence-type"
                        value={formData.recurrence?.type || "weekly"}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            recurrence: {
                              ...prev.recurrence,
                              type: e.target.value,
                            },
                          }));
                        }}
                      >
                        <option value="weekly">week</option>
                        {/* Add more options later */}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="form-actions">
              {mode === "edit" && (
                <motion.button
                  type="button"
                  onClick={handleDelete}
                  className="delete-button"
                  whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.35)" }}
                  whileTap={{ scale: 0.98 }}
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </motion.button>
              )}
              <div className={mode === "add" ? "ml-auto" : ""}>
                <motion.button
                  type="button"
                  onClick={handleClose}
                  className="cancel-button"
                  whileHover={{ backgroundColor: "rgba(75, 85, 99, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {mode === "add" ? "Create" : "Save"}
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EventModal;
