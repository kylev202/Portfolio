/**
 * Utility file for creating sample events for the calendar
 */

import { all } from "three/tsl";

/**
 * Generates sample calendar events
 * @returns {Array} Array of sample events
 */
export const createSampleEvents = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  
  return [
  
  //30/6 - 6/7 _______________________________________
  // Monday 30/6
  {
    id: 'week1',
    title: 'Week 1',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 30),
    allDay: true
  },

  {
    id: 'it13006' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 8, 30).toISOString(),
    end: new Date(2025, 5, 30, 9, 30).toISOString(),
  },
  {
    id: 'inv13006' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 9, 30).toISOString(),
    end: new Date(2025, 5, 30, 11, 0).toISOString(),
  },
  {
    id: 'lunch3006' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 11, 0).toISOString(),
    end: new Date(2025, 5, 30, 11, 30).toISOString(),
  },
  {
    id: 'travel13006' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 11, 30).toISOString(),
    end: new Date(2025, 5, 30, 12, 30).toISOString(),
  },
  {
    id: 'com3006' + Date.now(),
    title: 'COM - BA 608',
    description: 'In-person session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 12, 30).toISOString(),
    end: new Date(2025, 5, 30, 15, 0).toISOString(),
  },
  {
    id: 'it23006' + Date.now(),
    title: 'IT - TC230',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 15, 0).toISOString(),
    end: new Date(2025, 5, 30, 17, 30).toISOString(),
  },
  {
    id: 'travel23006' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 17, 30).toISOString(),
    end: new Date(2025, 5, 30, 18, 30).toISOString(),
  },
  {
    id: 'dinner3006' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 18, 30).toISOString(),
    end: new Date(2025, 5, 30, 19, 0).toISOString(),
  },
  {
    id: 'free3006' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 30),
    start: new Date(2025, 5, 30, 19, 0).toISOString(),
    end: new Date(2025, 5, 30, 23, 30).toISOString(),
  },

  // Tuesday 1/7
  {
    id: 'travel10107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 7, 30).toISOString(),
    end: new Date(2025, 6, 1, 8, 30).toISOString(),
  },
  {
    id: 'inv0107' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 8, 30).toISOString(),
    end: new Date(2025, 6, 1, 10, 30).toISOString(),
  },
  {
    id: 'travel20107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 10, 30).toISOString(),
    end: new Date(2025, 6, 1, 11, 30).toISOString(),
  },
  {
    id: 'lunch0107' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 11, 30).toISOString(),
    end: new Date(2025, 6, 1, 12, 0).toISOString(),
  },
  {
    id: 'travel30107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 13, 30).toISOString(),
    end: new Date(2025, 6, 1, 14, 30).toISOString(),
  },
  {
    id: 'mtk0107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 14, 30).toISOString(),
    end: new Date(2025, 6, 1, 16, 30).toISOString(),
  },
  {
    id: 'travel40107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 16, 30).toISOString(),
    end: new Date(2025, 6, 1, 17, 30).toISOString(),
  },
  {
    id: 'study10107' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 17, 30).toISOString(),
    end: new Date(2025, 6, 1, 19, 0).toISOString(),
  },
  {
    id: 'dinner0107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 19, 0).toISOString(),
    end: new Date(2025, 6, 1, 19, 30).toISOString(),
  },
  {
    id: 'study10107' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 1),
    start: new Date(2025, 6, 1, 19, 30).toISOString(),
    end: new Date(2025, 6, 1, 23, 30).toISOString(),
  },

  // Wednesday 2/7

  {
    id: 'travel10207' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 9, 30).toISOString(),
    end: new Date(2025, 6, 2, 10, 30).toISOString(),
  },
  {
    id: 'mtk0207' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 10, 30).toISOString(),
    end: new Date(2025, 6, 2, 12, 30).toISOString(),
  },
  {
    id: 'lunch0207' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 12, 30).toISOString(),
    end: new Date(2025, 6, 2, 13, 30).toISOString(),
  },
  {
    id: 'com0207' + Date.now(),
    title: 'COM - TC332',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 13, 30).toISOString(),
    end: new Date(2025, 6, 2, 16, 30).toISOString(),
  },
  {
    id: 'travel20207' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 16, 30).toISOString(),
    end: new Date(2025, 6, 2, 17, 0).toISOString(),
  },
  {
    id: 'work0207' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 17, 0).toISOString(),
    end: new Date(2025, 6, 2, 20, 0).toISOString(),
  },
  {
    id: 'travel32506' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 20, 0).toISOString(),
    end: new Date(2025, 6, 2, 21, 0).toISOString(),
  },
  {
    id: 'dinner0207' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 21, 0).toISOString(),
    end: new Date(2025, 6, 2, 21, 30).toISOString(),
  },
  {
    id: 'free1' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 2),
    start: new Date(2025, 6, 2, 21, 30).toISOString(),
    end: new Date(2025, 6, 2, 23, 30).toISOString(),
  },

  // Thursday 3/7

  {
    id: 'breakfast0307' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 9, 30).toISOString(),
    end: new Date(2025, 6, 3, 10, 0).toISOString(),
  },
  {
    id: 'free10307' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 10, 0).toISOString(),
    end: new Date(2025, 6, 3, 11, 30).toISOString(),
  },
  {
    id: 'travel10307' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 11, 30).toISOString(),
    end: new Date(2025, 6, 3, 12, 30).toISOString(),
  },
  {
    id: 'mtk0307' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 12, 30).toISOString(),
    end: new Date(2025, 6, 3, 14, 30).toISOString(),
  },
  {
    id: 'it0307' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 14, 30).toISOString(),
    end: new Date(2025, 6, 3, 16, 30).toISOString(),
  },
  {    
    id: 'travel20307' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 16, 30).toISOString(),
    end: new Date(2025, 6, 3, 17, 0).toISOString(),
  },
  {
    id: 'work0307' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 17, 0).toISOString(),
    end: new Date(2025, 6, 3, 20, 0).toISOString(),
  },
  {
    id: 'travel30307' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 20, 0).toISOString(),
    end: new Date(2025, 6, 3, 21, 0).toISOString(),
  },
  {
    id: 'dinner0307' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 21, 0).toISOString(),
    end: new Date(2025, 6, 3, 21, 30).toISOString(),
  },
  {
    id: 'free10307' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 3),
    start: new Date(2025, 6, 3, 21, 30).toISOString(),
    end: new Date(2025, 6, 3, 23, 30).toISOString(),
  },

  // Friday 4/7

  {
    id: 'travel10407' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple 
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 9, 30).toISOString(),
    end: new Date(2025, 6, 4, 10, 30).toISOString(),
  },
  {
    id: 'com0407' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue 
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 10, 30).toISOString(),
    end: new Date(2025, 6, 4, 12, 30).toISOString(),
  },
  {
    id: 'lunch0407' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 12, 30).toISOString(),
    end: new Date(2025, 6, 4, 13, 30).toISOString(),
  },
  {
    id: 'inv0407' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6',  // Blue
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 13, 30).toISOString(),
    end: new Date(2025, 6, 4, 15, 30).toISOString(),
  },
  {
    id: 'it0407' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 15, 30).toISOString(),
    end: new Date(2025, 6, 4, 16, 30).toISOString(),
  },
  {
    id: 'travel20407' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 16, 30).toISOString(),
    end: new Date(2025, 6, 4, 17, 0).toISOString(),
  },
  {
    id: 'work0407' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 17, 0).toISOString(),
    end: new Date(2025, 6, 4, 20, 0).toISOString(),
  },
  {
    id: 'travel30407' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 20, 0).toISOString(),
    end: new Date(2025, 6, 4, 21, 0).toISOString(),
  },
  {
    id: 'dinner0407' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 21, 0).toISOString(),
    end: new Date(2025, 6, 4, 21, 30).toISOString(),
  },
  {
    id: 'free0407' + Date.now(),
    title: 'Freetime', 
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 4),
    start: new Date(2025, 6, 4, 21, 30).toISOString(),
    end: new Date(2025, 6, 4, 23, 30).toISOString(),
  },

  // Saturday 5/7

  {
    id: 'breakfast0507' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 9, 30).toISOString(),
    end: new Date(2025, 6, 5, 10, 0).toISOString(),
  },
  {
    id: 'free10507' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 10, 0).toISOString(),
    end: new Date(2025, 6, 5, 12, 30).toISOString(),
  },
  {
    id: 'lunch0507' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 12, 30).toISOString(),
    end: new Date(2025, 6, 5, 13, 30).toISOString(),
  },
  {
    id: 'free20507' + Date.now(),
    title: 'Freetime',
    description: '', 
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 13, 30).toISOString(),
    end: new Date(2025, 6, 5, 16, 0).toISOString(),
  },
  {
    id: 'travel10507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 16, 0).toISOString(),
    end: new Date(2025, 6, 5, 17, 0).toISOString(),
  },
  {
    id: 'work0507' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 17, 0).toISOString(),
    end: new Date(2025, 6, 5, 20, 0).toISOString(),
  },
  {
    id: 'travel20507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 20, 0).toISOString(),
    end: new Date(2025, 6, 5, 21, 0).toISOString(),
  },
  {
    id: 'dinner0507' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 21, 0).toISOString(),
    end: new Date(2025, 6, 5, 21, 30).toISOString(),
  },
  {
    id: 'free10507' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 5),
    start: new Date(2025, 6, 5, 21, 30).toISOString(),
    end: new Date(2025, 6, 5, 23, 30).toISOString(),
  },

  // Sunday 6/7

  {
    id: 'free10607' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 6),
    allDay: true
  },

  // 7/7 - 13/7 _____________________________________
  // Monday 7/7
    {
      id: 'week2' + Date.now(),
      title: 'Week 2',
      description: '',
      color: '#3b82f6', // Blue
      date: new Date(2025, 6, 7),
      allDay: true
    },
  {
    id: 'it10707' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6',
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 8, 30).toISOString(),
    end: new Date(2025, 6, 7, 9, 30).toISOString(),
  },
  {
    id: 'inv0707' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 9, 30).toISOString(),
    end: new Date(2025, 6, 7, 11, 0).toISOString(),
  },
  {
    id: 'lunch0707' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 11, 0).toISOString(),
    end: new Date(2025, 6, 7, 11, 30).toISOString(),
  },
  {
    id: 'travel10707' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 11, 30).toISOString(),
    end: new Date(2025, 6, 7, 12, 30).toISOString(),
  },
  {
    id: 'com0707' + Date.now(),
    title: 'COM - BA 608',
    description: 'In-person session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 12, 30).toISOString(),
    end: new Date(2025, 6, 7, 15, 0).toISOString(),
  },
  {
    id: 'it20707' + Date.now(),
    title: 'IT - TC230',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 15, 0).toISOString(),
    end: new Date(2025, 6, 7, 17, 30).toISOString(),
  },
  {
    id: 'travel20707' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 17, 30).toISOString(),
    end: new Date(2025, 6, 7, 18, 30).toISOString(),
  },
  {
    id: 'dinner0707' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 18, 30).toISOString(),
    end: new Date(2025, 6, 7, 19, 0).toISOString(),
  },
  {
    id: 'study0707' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 7),
    start: new Date(2025, 6, 7, 19, 0).toISOString(),
    end: new Date(2025, 6, 7, 23, 30).toISOString(),
  },

  // Tuesday 8/7
  {
    id: 'travel10807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 7, 30).toISOString(),
    end: new Date(2025, 6, 8, 8, 30).toISOString(),
  },
  {
    id: 'inv0807' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6',   // Blue
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 8, 30).toISOString(),
    end: new Date(2025, 6, 8, 10, 30).toISOString(),
  },
  {
    id: 'travel20807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 10, 30).toISOString(),
    end: new Date(2025, 6, 8, 11, 30).toISOString(),
  },
  {
    id: 'lunch0807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 11, 30).toISOString(),
    end: new Date(2025, 6, 8, 12, 0).toISOString(),
  },
  {
    id: 'study10807' + Date.now(),
    title: 'Study Session: IT',
    description: 'Internet Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 12, 0).toISOString(),
    end: new Date(2025, 6, 8, 13, 30).toISOString(),
  },
  {
    id: 'travel30807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 13, 30).toISOString(),
    end: new Date(2025, 6, 8, 14, 30).toISOString(),
  },
  {
    id: 'mtk0807' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 14, 30).toISOString(),
    end: new Date(2025, 6, 8, 16, 30).toISOString(),
  },
  {
    id: 'travel40807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 16, 30).toISOString(),
    end: new Date(2025, 6, 8, 17, 30).toISOString(),
  },
  {
    id: 'study10807' + Date.now(),
    title: 'Study Session: IT',
    description: 'Internet Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 17, 30).toISOString(),
    end: new Date(2025, 6, 8, 19, 0).toISOString(),
  },
  {
    id: 'dinner0807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 19, 0).toISOString(),
    end: new Date(2025, 6, 8, 19, 30).toISOString(),
  },
  {
    id: 'study10807' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 8),
    start: new Date(2025, 6, 8, 19, 30).toISOString(),
    end: new Date(2025, 6, 8, 23, 30).toISOString(),
  },

  // Wednesday 9/7

  {
    id: 'travel10907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 9, 30).toISOString(),
    end: new Date(2025, 6, 9, 10, 30).toISOString(),
  },
  {
    id: 'mtk0907' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 10, 30).toISOString(),
    end: new Date(2025, 6, 9, 12, 30).toISOString(),
  },
  {
    id: 'lunch0907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 12, 30).toISOString(),
    end: new Date(2025, 6, 9, 13, 30).toISOString(),
  },
  {
    id: 'com0907' + Date.now(),
    title: 'COM - TC332',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 13, 30).toISOString(),
    end: new Date(2025, 6, 9, 16, 30).toISOString(),
  },
  {
    id: 'travel20907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 16, 30).toISOString(),
    end: new Date(2025, 6, 9, 17, 0).toISOString(),
  },
  {
    id: 'work0907' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 17, 0).toISOString(),
    end: new Date(2025, 6, 9, 20, 0).toISOString(),
  },
  {
    id: 'travel30907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 20, 0).toISOString(),
    end: new Date(2025, 6, 9, 21, 0).toISOString(),
  },
  {
    id: 'dinner0907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 21, 0).toISOString(),
    end: new Date(2025, 6, 9, 21, 30).toISOString(),
  },
  {
    id: 'free10907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 9),
    start: new Date(2025, 6, 9, 21, 30).toISOString(),
    end: new Date(2025, 6, 9, 23, 30).toISOString(),
  },

  // Thursday 10/7

  {
    id: 'breakfast1007' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 9, 30).toISOString(),
    end: new Date(2025, 6, 10, 10, 0).toISOString(),
  },
  {
    id: 'study11007' + Date.now(),
    title: 'Study Session: IT',
    description: 'Internet Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 10, 0).toISOString(),
    end: new Date(2025, 6, 10, 11, 30).toISOString(),
  },
  {
    id: 'travel11007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 11, 30).toISOString(),
    end: new Date(2025, 6, 10, 12, 30).toISOString(),
  },
  {
    id: 'mtk1007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 12, 30).toISOString(),
    end: new Date(2025, 6, 10, 14, 30).toISOString(),
  },
  {
    id: 'it1007' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 14, 30).toISOString(),
    end: new Date(2025, 6, 10, 16, 30).toISOString(),
  },
  {    
    id: 'travel21007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 16, 30).toISOString(),
    end: new Date(2025, 6, 10, 17, 0).toISOString(),
  },
  {
    id: 'work1007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 17, 0).toISOString(),
    end: new Date(2025, 6, 10, 20, 0).toISOString(),
  },
  {
    id: 'travel31007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 20, 0).toISOString(),
    end: new Date(2025, 6, 10, 21, 0).toISOString(),
  },
  {
    id: 'dinner1007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 21, 0).toISOString(),
    end: new Date(2025, 6, 10, 21, 30).toISOString(),
  },
  {
    id: 'study21007' + Date.now(),
    title: 'Study Session: IT',
    description: 'Internet Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 10),
    start: new Date(2025, 6, 10, 21, 30).toISOString(),
    end: new Date(2025, 6, 10, 23, 30).toISOString(),
  },

  // Friday 11/7

  {
    id: 'travel11107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 9, 30).toISOString(),
    end: new Date(2025, 6, 11, 10, 30).toISOString(),
  },
  {
    id: 'com1107' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 10, 30).toISOString(),
    end: new Date(2025, 6, 11, 12, 30).toISOString(),
  },
  {
    id: 'lunch1107' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 12, 30).toISOString(),
    end: new Date(2025, 6, 11, 13, 30).toISOString(),
  },
  {
    id: 'inv1107' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 13, 30).toISOString(),
    end: new Date(2025, 6, 11, 15, 30).toISOString(),
  },
  {
    id: 'it1107' + Date.now(),
    title: 'IT Test - TA110',
    description: 'IT Internet Test',
    color: '#ef4444', // Red
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 15, 30).toISOString(),
    end: new Date(2025, 6, 11, 16, 30).toISOString(),
  },
  {
    id: 'travel21107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 16, 30).toISOString(),
    end: new Date(2025, 6, 11, 17, 0).toISOString(),
  },
  {
    id: 'work1107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 17, 0).toISOString(),
    end: new Date(2025, 6, 11, 20, 0).toISOString(),
  },
  {
    id: 'travel31107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 20, 0).toISOString(),
    end: new Date(2025, 6, 11, 21, 0).toISOString(),
  },
  {
    id: 'dinner1107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 21, 0).toISOString(),
    end: new Date(2025, 6, 11, 21, 30).toISOString(),
  },
  {
    id: 'free1107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 11),
    start: new Date(2025, 6, 11, 21, 30).toISOString(),
    end: new Date(2025, 6, 11, 23, 30).toISOString(),
  },

  // Saturday 12/7

  {
    id: 'breakfast1207' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 9, 30).toISOString(),
    end: new Date(2025, 6, 12, 10, 0).toISOString(),
  },
  {
    id: 'study11207' + Date.now(),
    title: 'Study Session: MTK',
    description: 'WebCam Presentation',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 10, 0).toISOString(),
    end: new Date(2025, 6, 12, 12, 30).toISOString(),
  },
  {
    id: 'lunch1207' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 12, 30).toISOString(),
    end: new Date(2025, 6, 12, 13, 30).toISOString(),
  },
  {
    id: 'study11207' + Date.now(),
    title: 'Study Session: MTK',
    description: 'WebCam Presentation',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 13, 30).toISOString(),
    end: new Date(2025, 6, 12, 16, 0).toISOString(),
  },
  {
    id: 'travel11207' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 16, 0).toISOString(),
    end: new Date(2025, 6, 12, 17, 0).toISOString(),
  },
  {
    id: 'work1207' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 17, 0).toISOString(),
    end: new Date(2025, 6, 12, 20, 0).toISOString(),
  },
  {
    id: 'travel21207' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 20, 0).toISOString(),
    end: new Date(2025, 6, 12, 21, 0).toISOString(),
  },
  {
    id: 'dinner1207' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 21, 0).toISOString(),
    end: new Date(2025, 6, 12, 21, 30).toISOString(),
  },
  {
    id: 'study11207' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 12),
    start: new Date(2025, 6, 12, 21, 30).toISOString(),
    end: new Date(2025, 6, 12, 23, 30).toISOString(),
  },

  // Sunday 13/7

  {
    id: 'lunch1307' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 13),
    start: new Date(2025, 6, 13, 11, 30).toISOString(),
    end: new Date(2025, 6, 13, 12, 30).toISOString(),
  },
  {
    id: 'study1307' + Date.now(),
    title: 'Study Session: MTK',
    description: 'WebCam Presentation',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 13),
    start: new Date(2025, 6, 13, 12, 30).toISOString(),
    end: new Date(2025, 6, 13, 13, 30).toISOString(),  
  },
  {
    id: 'break11207' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 13),
    start: new Date(2025, 6, 13, 13, 30).toISOString(),
    end: new Date(2025, 6, 13, 14, 0).toISOString(),
  },
  {
    id: 'study21307' + Date.now(),
    title: 'Study Session: MTK',
    description: 'WebCam Presentation',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 13),
    start: new Date(2025, 6, 13, 14, 0).toISOString(),
    end: new Date(2025, 6, 13, 15, 0).toISOString(),
  },
  {
    id: 'break21307' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 13),
    start: new Date(2025, 6, 13, 15, 0).toISOString(),
    end: new Date(2025, 6, 13, 18, 30).toISOString(),
  },
  {
    id: 'dinner1307' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 13),
    start: new Date(2025, 6, 13, 18, 30).toISOString(),
    end: new Date(2025, 6, 13, 19, 0).toISOString(),
  },
  {
    id: 'study21307' + Date.now(),
    title: 'Study Session: MTK',
    description: 'WebCam Presentation',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 13),
    start: new Date(2025, 6, 13, 19, 0).toISOString(),
    end: new Date(2025, 6, 13, 21, 0).toISOString(),
  },
  {
    id: 'free1307' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 13),
    start: new Date(2025, 6, 13, 21, 0).toISOString(),
    end: new Date(2025, 6, 13, 23, 30).toISOString(),
  },

  // 14/7 - 20/7 _______________________________________
  // Monday 14/7
  {
    id: 'week3' + Date.now(),
    title: 'Week 3',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 14),
    allDay: true
  },
  {
    id: 'it1407' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 8, 30).toISOString(),
    end: new Date(2025, 6, 14, 9, 30).toISOString(),
  },
  {
    id: 'inv1407' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 9, 30).toISOString(),
    end: new Date(2025, 6, 14, 11, 0).toISOString(),
  },
  {
    id: 'lunch1407' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 11, 0).toISOString(),
    end: new Date(2025, 6, 14, 11, 30).toISOString(),
  },
  {
    id: 'travel11407' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 11, 30).toISOString(),
    end: new Date(2025, 6, 14, 12, 30).toISOString(),
  },
  {
    id: 'com1407' + Date.now(),
    title: 'COM - BA 608',
    description: 'In-person session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 12, 30).toISOString(),
    end: new Date(2025, 6, 14, 15, 0).toISOString(),
  },
  {
    id: 'it21407' + Date.now(),
    title: 'IT - TC230',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 15, 0).toISOString(),
    end: new Date(2025, 6, 14, 17, 30).toISOString(),
  },
  {
    id: 'travel21407' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 17, 30).toISOString(),
    end: new Date(2025, 6, 14, 18, 30).toISOString(),
  },
  {
    id: 'dinner1407' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 18, 30).toISOString(),
    end: new Date(2025, 6, 14, 19, 0).toISOString(),
  },
  {
    id: 'study1407' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 14),
    start: new Date(2025, 6, 14, 19, 0).toISOString(),
    end: new Date(2025, 6, 14, 23, 30).toISOString(),
  },

  // Tuesday 15/7

  {
    id: 'travel11507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 7, 30).toISOString(),
    end: new Date(2025, 6, 15, 8, 30).toISOString(),
  },
  {
    id: 'inv1507' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 8, 30).toISOString(),
    end: new Date(2025, 6, 15, 10, 30).toISOString(),
  },
  {
    id: 'travel21507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 10, 30).toISOString(),
    end: new Date(2025, 6, 15, 11, 30).toISOString(),
  },
  {
    id: 'lunch1507' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 11, 30).toISOString(),
    end: new Date(2025, 6, 15, 12, 0).toISOString(),
  },
  {
    id: 'free11507' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 12, 0).toISOString(),
    end: new Date(2025, 6, 15, 13, 30).toISOString(),
  },
  {
    id: 'travel31507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 13, 30).toISOString(),
    end: new Date(2025, 6, 15, 14, 30).toISOString(),
  },
  {
    id: 'mtk1507' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 14, 30).toISOString(),
    end: new Date(2025, 6, 15, 16, 30).toISOString(),
  },
  {
    id: 'travel41507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 16, 30).toISOString(),
    end: new Date(2025, 6, 15, 17, 30).toISOString(),
  },
  {
    id: 'free21507' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 17, 30).toISOString(),
    end: new Date(2025, 6, 15, 19, 0).toISOString(),
  },
  {
    id: 'dinner1507' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 19, 0).toISOString(),
    end: new Date(2025, 6, 15, 19, 30).toISOString(),
  },
  {
    id: 'study11507' + Date.now(),
    title: 'Study Session: MTK',
    description: 'WebCam Presentation',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 15),
    start: new Date(2025, 6, 15, 19, 30).toISOString(),
    end: new Date(2025, 6, 15, 23, 30).toISOString(),
  },

  // Wednesday 16/7

  {
    id: 'travel11607' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 9, 30).toISOString(),
    end: new Date(2025, 6, 16, 10, 30).toISOString(),
  },
  {
    id: 'mtk1607' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 10, 30).toISOString(),
    end: new Date(2025, 6, 16, 12, 30).toISOString(),
  },
  {
    id: 'lunch1607' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 12, 30).toISOString(),
    end: new Date(2025, 6, 16, 13, 30).toISOString(),
  },
  {
    id: 'com1607' + Date.now(),
    title: 'COM - TC332',
    description: '',
    color: '#3b82f6',
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 13, 30).toISOString(),
    end: new Date(2025, 6, 16, 16, 30).toISOString(),
  },
  {
    id: 'travel21607' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 16, 30).toISOString(),
    end: new Date(2025, 6, 16, 17, 0).toISOString(),
  },
  {
    id: 'work1607' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 17, 0).toISOString(),
    end: new Date(2025, 6, 16, 20, 0).toISOString(),
  },
  {
    id: 'travel31607' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 20, 0).toISOString(),
    end: new Date(2025, 6, 16, 21, 0).toISOString(),
  },
  {
    id: 'dinner1607' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 21, 0).toISOString(),
    end: new Date(2025, 6, 16, 21, 30).toISOString(),
  },
  {
    id: 'free11607' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 16),
    start: new Date(2025, 6, 16, 21, 30).toISOString(),
    end: new Date(2025, 6, 16, 23, 30).toISOString(),
  },

  // Thursday 17/7

  {
    id: 'breakfast1707' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 9, 30).toISOString(),
    end: new Date(2025, 6, 17, 10, 0).toISOString(),
  },
  {
    id: 'free11707' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 10, 0).toISOString(),
    end: new Date(2025, 6, 17, 11, 30).toISOString(),
  },
  {
    id: 'travel11707' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 11, 30).toISOString(),
    end: new Date(2025, 6, 17, 12, 30).toISOString(),
  },
  {
    id: 'mtk1707' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 12, 30).toISOString(),
    end: new Date(2025, 6, 17, 14, 30).toISOString(),
  },
  {
    id: 'it1707' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 14, 30).toISOString(),
    end: new Date(2025, 6, 17, 16, 30).toISOString(),
  },
  {
    id: 'travel21707' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 16, 30).toISOString(),
    end: new Date(2025, 6, 17, 17, 0).toISOString(),
  },
  {
    id: 'work1707' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 17, 0).toISOString(),
    end: new Date(2025, 6, 17, 20, 0).toISOString(),
  },
  {
    id: 'travel31707' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 20, 0).toISOString(),
    end: new Date(2025, 6, 17, 21, 0).toISOString(),
  },
  {
    id: 'dinner1707' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 21, 0).toISOString(),
    end: new Date(2025, 6, 17, 21, 30).toISOString(),
  },
  {
    id: 'free11707' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 17),
    start: new Date(2025, 6, 17, 21, 30).toISOString(),
    end: new Date(2025, 6, 17, 23, 30).toISOString(),
  },

  // Friday 18/7

  {
    id: 'travel11807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 9, 0).toISOString(),
    end: new Date(2025, 6, 18, 10, 30).toISOString(),
  },
  {
    id: 'com1807' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 10, 30).toISOString(),
    end: new Date(2025, 6, 18, 12, 30).toISOString(),
  },
  {
    id: 'lunch1807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 12, 30).toISOString(),
    end: new Date(2025, 6, 18, 13, 30).toISOString(),
  },
  {
    id: 'inv1807' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 13, 30).toISOString(),
    end: new Date(2025, 6, 18, 15, 30).toISOString(),
  },
  {
    id: 'it1807' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 15, 30).toISOString(),
    end: new Date(2025, 6, 18, 16, 30).toISOString(),
  },
  {
    id: 'travel21807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 16, 30).toISOString(),
    end: new Date(2025, 6, 18, 17, 0).toISOString(),
  },
  {
    id: 'work1807' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 17, 0).toISOString(),
    end: new Date(2025, 6, 18, 20, 0).toISOString(),
  },
  {
    id: 'travel31807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 20, 0).toISOString(),
    end: new Date(2025, 6, 18, 21, 0).toISOString(),
  },
  {
    id: 'dinner1807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 21, 0).toISOString(),
    end: new Date(2025, 6, 18, 21, 30).toISOString(),
  },
  {
    id: 'free11807' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 18),
    start: new Date(2025, 6, 18, 21, 30).toISOString(),
    end: new Date(2025, 6, 18, 23, 30).toISOString(),
  },
  {
    id: 'deadline1807' + Date.now(),
    title: 'Deadline: MTK',
    description: 'Submit WebCam Presentation',
    color: '#ef4444', // Red
    date: new Date(2025, 6, 18),
    allDay: true,
  },

  // Saturday 19/7

  {
    id: 'breakfast1907' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 9, 30).toISOString(),
    end: new Date(2025, 6, 19, 10, 0).toISOString(),
  },
  {
    id: 'study11907' + Date.now(),
    title: 'Study Session: INV',
    description: 'Innovation Class Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 10, 0).toISOString(),
    end: new Date(2025, 6, 19, 12, 30).toISOString(),
  },
  {
    id: 'lunch1907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 12, 30).toISOString(),
    end: new Date(2025, 6, 19, 13, 30).toISOString(),
  },
  {
    id: 'study11907' + Date.now(),
    title: 'Study Session: INV',
    description: 'Innovation Class Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 13, 30).toISOString(),
    end: new Date(2025, 6, 19, 16, 0).toISOString(),
  },
  {
    id: 'travel11907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 16, 0).toISOString(),
    end: new Date(2025, 6, 19, 17, 0).toISOString(),
  },
  {
    id: 'work1907' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 17, 0).toISOString(),
    end: new Date(2025, 6, 19, 20, 0).toISOString(),
  },
  {
    id: 'travel21907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 20, 0).toISOString(),
    end: new Date(2025, 6, 19, 21, 0).toISOString(),
  },
  {
    id: 'dinner1907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 21, 0).toISOString(),
    end: new Date(2025, 6, 19, 21, 30).toISOString(),
  },
  {
    id: 'free11907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 19),
    start: new Date(2025, 6, 19, 21, 30).toISOString(),
    end: new Date(2025, 6, 19, 23, 30).toISOString(),
  },

  // Sunday 20/7

  {
    id: 'lunch2007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 11, 30).toISOString(),
    end: new Date(2025, 6, 20, 12, 30).toISOString(),
  },
  {
    id: 'study2007' + Date.now(),
    title: 'Study Session: INV',
    description: 'Innovation Class Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 12, 30).toISOString(),
    end: new Date(2025, 6, 20, 13, 30).toISOString(),
  },
  {
    id: 'break12007' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 13, 30).toISOString(),
    end: new Date(2025, 6, 20, 14, 0).toISOString(),
  },
  {
    id: 'study22007' + Date.now(),
    title: 'Study Session: INV',
    description: 'Innovation Class Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 14, 0).toISOString(),
    end: new Date(2025, 6, 20, 15, 0).toISOString(),
  },
  {
    id: 'break22007' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 15, 0).toISOString(),
    end: new Date(2025, 6, 20, 15, 30).toISOString(),
  },
  {
    id: 'study32007' + Date.now(),
    title: 'Study Session: INV',
    description: 'Innovation Class Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 15, 30).toISOString(),
    end: new Date(2025, 6, 20, 16, 30).toISOString(),
  },
  {
    id: 'break32007' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 16, 30).toISOString(),
    end: new Date(2025, 6, 20, 18, 30).toISOString(),
  },
  {
    id: 'dinner2007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 18, 30).toISOString(),
    end: new Date(2025, 6, 20, 19, 0).toISOString(),
  },
  {
    id: 'study22007' + Date.now(),
    title: 'Study Session: INV',
    description: 'Innovation Class Test',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 19, 0).toISOString(),
    end: new Date(2025, 6, 20, 21, 0).toISOString(),
  },
  {
    id: 'free2007' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 20),
    start: new Date(2025, 6, 20, 21, 0).toISOString(),
    end: new Date(2025, 6, 20, 23, 30).toISOString(),
  },

  // 21/7 - 27/7 _______________________________________
  // Monday 21/7
  {
    id: 'week4' + Date.now(),
    title: 'Week 4',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 21),
    allDay: true
  },
  {
    id: 'it2107' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 8, 30).toISOString(),
    end: new Date(2025, 6, 21, 9, 30).toISOString(),
  },
  {
    id: 'inv2107' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 9, 30).toISOString(),
    end: new Date(2025, 6, 21, 11, 0).toISOString(),
  },
  {
    id: 'lunch2107' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 11, 0).toISOString(),
    end: new Date(2025, 6, 21, 11, 30).toISOString(),
  },
  {
    id: 'travel12107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 11, 30).toISOString(),
    end: new Date(2025, 6, 21, 12, 30).toISOString(),
  },
  {
    id: 'com2107' + Date.now(),
    title: 'COM - BA608',
    description: 'In-person session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 12, 30).toISOString(),
    end: new Date(2025, 6, 21, 15, 0).toISOString(),
  },
  {
    id: 'it22107' + Date.now(),
    title: 'IT - TC230',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 15, 0).toISOString(),
    end: new Date(2025, 6, 21, 17, 30).toISOString(),
  },
  {
    id: 'travel22107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 17, 30).toISOString(),
    end: new Date(2025, 6, 21, 18, 30).toISOString(),
  },
  {
    id: 'dinner2107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 18, 30).toISOString(),
    end: new Date(2025, 6, 21, 19, 0).toISOString(),
  },
  {
    id: 'study2107' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 21),
    start: new Date(2025, 6, 21, 19, 0).toISOString(),
    end: new Date(2025, 6, 21, 23, 30).toISOString(),
  },

  // Tuesday 22/7

  {
    id: 'travel12207' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 7, 30).toISOString(),
    end: new Date(2025, 6, 22, 8, 30).toISOString(),
  },
  {
    id: 'inv2207' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 8, 30).toISOString(),
    end: new Date(2025, 6, 22, 10, 30).toISOString(),
  },
  {
    id: 'travel22207' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 10, 30).toISOString(),
    end: new Date(2025, 6, 22, 11, 30).toISOString(),
  },
  {
    id: 'lunch2207' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 11, 30).toISOString(),
    end: new Date(2025, 6, 22, 12, 0).toISOString(),
  },
  {
    id: 'free12207' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 12, 0).toISOString(),
    end: new Date(2025, 6, 22, 13, 30).toISOString(),
  },
  {
    id: 'travel32207' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 13, 30).toISOString(),
    end: new Date(2025, 6, 22, 14, 30).toISOString(),
  },
  {
    id: 'mtk2207' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 14, 30).toISOString(),
    end: new Date(2025, 6, 22, 16, 30).toISOString(),
  },
  {
    id: 'travel42207' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 16, 30).toISOString(),
    end: new Date(2025, 6, 22, 17, 30).toISOString(),
  },
  {
    id: 'study2207' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 17, 30).toISOString(),
    end: new Date(2025, 6, 22, 19, 0).toISOString(),
  },
  {
    id: 'dinner2207' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 19, 0).toISOString(),
    end: new Date(2025, 6, 22, 19, 30).toISOString(),
  },
  {
    id: 'free22207' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 22),
    start: new Date(2025, 6, 22, 19, 30).toISOString(),
    end: new Date(2025, 6, 22, 23, 30).toISOString(),
  },

  // Wednesday 23/7

  {
    id: 'travel12307' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 23),
    start: new Date(2025, 6, 23, 9, 30).toISOString(),
    end: new Date(2025, 6, 23, 10, 30).toISOString(),
  },
  {
    id: 'mtk2307' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 23),
    start: new Date(2025, 6, 23, 10, 30).toISOString(),
    end: new Date(2025, 6, 23, 12, 30).toISOString(),
  },
  {
    id: 'lunch2307' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 23),
    start: new Date(2025, 6, 23, 12, 30).toISOString(),
    end: new Date(2025, 6, 23, 13, 30).toISOString(),
  },
  {
    id: 'com2307' + Date.now(),
    title: 'COM - TC332',
    description: '',
    color: '#3b82f6',
    date: new Date(2025, 6, 23),
    start: new Date(2025, 6, 23, 13, 30).toISOString(),
    end: new Date(2025, 6, 23, 16, 30).toISOString(),
  },
  {
    id: 'travel22307' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 23),
    start: new Date(2025, 6, 23, 16, 30).toISOString(),
    end: new Date(2025, 6, 23, 17, 30).toISOString(),
  },
  {
    id: 'study2307' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 23),
    start: new Date(2025, 6, 23, 17, 30).toISOString(),
    end: new Date(2025, 6, 23, 21, 0).toISOString(),
  },
  {
    id: 'dinner2307' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 23),
    start: new Date(2025, 6, 23, 21, 0).toISOString(),
    end: new Date(2025, 6, 23, 21, 30).toISOString(),
  },
  {
    id: 'free12307' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 23),
    start: new Date(2025, 6, 23, 21, 30).toISOString(),
    end: new Date(2025, 6, 23, 23, 30).toISOString(),
  },

  // Thursday 24/7

  {
    id: 'breakfast2407' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 9, 30).toISOString(),
    end: new Date(2025, 6, 24, 10, 0).toISOString(),
  },
  {
    id: 'free12407' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 10, 0).toISOString(),
    end: new Date(2025, 6, 24, 11, 30).toISOString(),
  },
  {
    id: 'travel12407' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 11, 30).toISOString(),
    end: new Date(2025, 6, 24, 12, 30).toISOString(),
  },
  {
    id: 'mtk2407' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 12, 30).toISOString(),
    end: new Date(2025, 6, 24, 14, 30).toISOString(),
  },
  {
    id: 'it2407' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 14, 30).toISOString(),
    end: new Date(2025, 6, 24, 16, 30).toISOString(),
  },
  {
    id: 'travel22407' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 16, 30).toISOString(),
    end: new Date(2025, 6, 24, 17, 0).toISOString(),
  },
  {
    id: 'work2407' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 17, 0).toISOString(),
    end: new Date(2025, 6, 24, 20, 0).toISOString(),
  },
  {
    id: 'travel32407' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 20, 0).toISOString(),
    end: new Date(2025, 6, 24, 21, 0).toISOString(),
  },
  {
    id: 'dinner2407' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 21, 0).toISOString(),
    end: new Date(2025, 6, 24, 21, 30).toISOString(),
  },
  {
    id: 'free12407' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 24),
    start: new Date(2025, 6, 24, 21, 30).toISOString(),
    end: new Date(2025, 6, 24, 23, 30).toISOString
  },
  // Friday 25/7

  {
    id: 'travel12507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 9, 0).toISOString(),
    end: new Date(2025, 6, 25, 10, 30).toISOString(),
  },
  {
    id: 'com2507' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 10, 30).toISOString(),
    end: new Date(2025, 6, 25, 12, 30).toISOString(),
  },
  {
    id: 'lunch2507' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 12, 30).toISOString(),
    end: new Date(2025, 6, 25, 13, 30).toISOString(),
  },
  {
    id: 'inv2507' + Date.now(),
    title: 'INV Test - TC232',
    description: 'Innovation Class Test',
    color: '#ef4444', // Blue
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 13, 30).toISOString(),
    end: new Date(2025, 6, 25, 15, 30).toISOString(),
  },
  {
    id: 'it2507' + Date.now(),
    title: 'IT Test - TA110',
    description: 'IT Word Test',
    color: '#ef4444', // Blue
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 15, 30).toISOString(),
    end: new Date(2025, 6, 25, 17, 30).toISOString(),
  },
  {
    id: 'travel22507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 17, 30).toISOString(),
    end: new Date(2025, 6, 25, 18, 0).toISOString(),
  },
  {
    id: 'work2507' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 18, 0).toISOString(),
    end: new Date(2025, 6, 25, 20, 0).toISOString(),
  },
  {
    id: 'travel32507' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 20, 0).toISOString(),
    end: new Date(2025, 6, 25, 21, 0).toISOString(),
  },
  {
    id: 'dinner2507' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 21, 0).toISOString(),
    end: new Date(2025, 6, 25, 21, 30).toISOString(),
  },
  {
    id: 'free12507' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 25),
    start: new Date(2025, 6, 25, 21, 30).toISOString(),
    end: new Date(2025, 6, 25, 23, 30).toISOString(),
  },

  // Saturday 26/7

  {
    id: 'breakfast2607' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 9, 30).toISOString(),
    end: new Date(2025, 6, 26, 10, 0).toISOString(),
  },
  {
    id: 'study12607' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 10, 0).toISOString(),
    end: new Date(2025, 6, 26, 12, 30).toISOString(),
  },
  {
    id: 'lunch2607' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 12, 30).toISOString(),
    end: new Date(2025, 6, 26, 13, 30).toISOString(),
  },
  {
    id: 'study22607' + Date.now(),
    title: 'Study Session: COM',
    description: 'Portfolio',
    color: '#22c55e', // Green
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 13, 30).toISOString(),
    end: new Date(2025, 6, 26, 16, 0).toISOString(),
  },
  {
    id: 'travel12607' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 16, 0).toISOString(),
    end: new Date(2025, 6, 26, 17, 0).toISOString(),
  },
  {
    id: 'work2607' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 17, 0).toISOString(),
    end: new Date(2025, 6, 26, 20, 0).toISOString(),
  },
  {
    id: 'travel22607' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 20, 0).toISOString(),
    end: new Date(2025, 6, 26, 21, 0).toISOString(),
  },
  {
    id: 'dinner2607' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 21, 0).toISOString(),
    end: new Date(2025, 6, 26, 21, 30).toISOString(),
  },
  {
    id: 'free12607' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 26),
    start: new Date(2025, 6, 26, 21, 30).toISOString(),
    end: new Date(2025, 6, 26, 23, 30).toISOString(),
  },

  // Sunday 27/7

  {
    id: 'deadline2707' + Date.now(),
    title: 'Deadline: COM',
    description: 'Submit Setup Portfolio',
    color: '#ef4444', // Red
    date: new Date(2025, 6, 27),
    allDay: true,
  },

  // 28/7 - 3/8 _______________________________________
  // Monday 28/7

  {
    id: 'week5' + Date.now(),
    title: 'Week 5',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 28),
    allDay: true,
  },
  {
    id: 'it2807' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 8, 30).toISOString(),
    end: new Date(2025, 6, 28, 9, 30).toISOString(),
  },
  {
    id: 'inv2807' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 9, 30).toISOString(),
    end: new Date(2025, 6, 28, 10, 30).toISOString(),
  },
  {
    id: 'lunch2807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 10, 30).toISOString(),
    end: new Date(2025, 6, 28, 11, 0).toISOString(),
  },
  {
    id: 'travel12807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 11, 0).toISOString(),
    end: new Date(2025, 6, 28, 12, 0).toISOString(),
  },
  {
    id: 'com2807' + Date.now(),
    title: 'COM - BA608',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 12, 0).toISOString(),
    end: new Date(2025, 6, 28, 14, 30).toISOString(),
  },
  {
    id: 'it22807' + Date.now(),
    title: 'IT - TC230',  
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 14, 30).toISOString(),
    end: new Date(2025, 6, 28, 17, 0).toISOString(),
  },
  {
    id: 'travel22807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 17, 0).toISOString(),
    end: new Date(2025, 6, 28, 18, 0).toISOString(),
  },
  {
    id: 'dinner2807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 18, 0).toISOString(),
    end: new Date(2025, 6, 28, 18, 30).toISOString(),
  },
  {
    id: 'free12807' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 28),
    start: new Date(2025, 6, 28, 18, 30).toISOString(),
    end: new Date(2025, 6, 28, 23, 30).toISOString(),
  },

  // Tuesday 29/7

  {
    id: 'travel12907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 7, 30).toISOString(),
    end: new Date(2025, 6, 29, 8, 30).toISOString(),
  },
  {
    id: 'inv2907' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 8, 30).toISOString(),
    end: new Date(2025, 6, 29, 10, 30).toISOString(),
  },
  {
    id: 'travel22907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 10, 30).toISOString(),
    end: new Date(2025, 6, 29, 11, 30).toISOString(),
  },
  {
    id: 'lunch2907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 11, 30).toISOString(),
    end: new Date(2025, 6, 29, 12, 0).toISOString(),
  },
  {
    id: 'free12907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 12, 0).toISOString(),
    end: new Date(2025, 6, 29, 13, 30).toISOString(),
  },
  {
    id: 'travel32907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 13, 30).toISOString(),
    end: new Date(2025, 6, 29, 14, 30).toISOString(),
  },  
  {
    id: 'mtk2907' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 14, 30).toISOString(),
    end: new Date(2025, 6, 29, 16, 30).toISOString(),
  },
  {
    id: 'travel42907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 16, 30).toISOString(),
    end: new Date(2025, 6, 29, 17, 30).toISOString(),
  },
  {
    id: 'free2907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 17, 30).toISOString(),
    end: new Date(2025, 6, 29, 18, 0).toISOString(),
  },
  {
    id: 'dinner2907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 18, 0).toISOString(),
    end: new Date(2025, 6, 29, 18, 30).toISOString(),
  },  
  {
    id: 'free22907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 29),
    start: new Date(2025, 6, 29, 18, 30).toISOString(),
    end: new Date(2025, 6, 29, 23, 30).toISOString(),
  },

  // Wednesday 30/7

  {
    id: 'travel13007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 9, 30).toISOString(),
    end: new Date(2025, 6, 30, 10, 30).toISOString(),
  },
  {
    id: 'mtk3007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 10, 30).toISOString(),
    end: new Date(2025, 6, 30, 12, 30).toISOString(),
  },
  {
    id: 'lunch3007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 12, 30).toISOString(),
    end: new Date(2025, 6, 30, 13, 30).toISOString(),
  },
  {
    id: 'com3007' + Date.now(),
    title: 'COM - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 13, 30).toISOString(),
    end: new Date(2025, 6, 30, 16, 30).toISOString(),
  },
  {
    id: 'travel23007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 16, 30).toISOString(),
    end: new Date(2025, 6, 30, 17, 0).toISOString(),
  },
  {
    id: 'work3007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 17, 0).toISOString(),
    end: new Date(2025, 6, 30, 20, 0).toISOString(),
  },
  {
    id: 'travel33007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 20, 0).toISOString(),
    end: new Date(2025, 6, 30, 21, 0).toISOString(),
  },
  {
    id: 'dinner3007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 21, 0).toISOString(),
    end: new Date(2025, 6, 30, 22, 0).toISOString(),
  },
  {
    id: 'free13007' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 30),
    start: new Date(2025, 6, 30, 22, 0).toISOString(),
    end: new Date(2025, 6, 30, 23, 0).toISOString(),
  },

  // Thursday 31/7

  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 8, 30).toISOString(),
    end: new Date(2025, 6, 31, 11, 30).toISOString(),
  },
  {
    id: 'travel13107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 11, 30).toISOString(),
    end: new Date(2025, 6, 31, 12, 30).toISOString(),
  },
  {
    id: 'mtk3107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 12, 30).toISOString(),
    end: new Date(2025, 6, 31, 14, 30).toISOString(),
  },
  {
    id: 'it3107' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 14, 30).toISOString(),
    end: new Date(2025, 6, 31, 16, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 16, 30).toISOString(),
    end: new Date(2025, 6, 31, 17, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 17, 0).toISOString(),
    end: new Date(2025, 6, 31, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 20, 0).toISOString(),
    end: new Date(2025, 6, 31, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 21, 0).toISOString(),
    end: new Date(2025, 6, 31, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 6, 31),
    start: new Date(2025, 6, 31, 21, 30).toISOString(),
    end: new Date(2025, 6, 31, 23, 30).toISOString(),
  },
  
  // Friday 1/8

  {
    id: 'travel14108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 9, 30).toISOString(),
    end: new Date(2025, 7, 1, 10, 30).toISOString(),
  },
  {
    id: 'com108' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 10, 30).toISOString(),
    end: new Date(2025, 7, 1, 12, 30).toISOString(),
  },
  {
    id: 'lunch108' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 12, 30).toISOString(),
    end: new Date(2025, 7, 1, 13, 30).toISOString(),
  },
  {
    id: 'inv108' + Date.now(),
    title: 'INV Test - TC232',
    description: 'Innovation Class Test',
    color: '#ef4444', // Blue
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 13, 30).toISOString(),
    end: new Date(2025, 7, 1, 15, 30).toISOString(),
  },
  {
    id: 'it108' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 15, 30).toISOString(),
    end: new Date(2025, 7, 1, 17, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 17, 30).toISOString(),
    end: new Date(2025, 7, 1, 18, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 18, 0).toISOString(),
    end: new Date(2025, 7, 1, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 20, 0).toISOString(),
    end: new Date(2025, 7, 1, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 21, 0).toISOString(),
    end: new Date(2025, 7, 1, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 1),
    start: new Date(2025, 7, 1, 21, 30).toISOString(),
    end: new Date(2025, 7, 1, 23, 30).toISOString(),
  },

  // Saturday 2/8
  
  {
    id: 'free13208' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 2),
    allDay: true,
  },

  // Sunday 3/8

  {
    id: 'free13208' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 3),
    allDay: true,
  },

  // 4/8 - 10/8 _______________________________________
  // Monday 4/8

  {
    id: 'week6' + Date.now(),
    title: 'Week 6',
    description: 'Mid-term break',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 4),
    allDay: true,
  },

  // Tuesday 5/8
  // Wednesday 6/8
  // Thursday 7/8
  // Friday 8/8
  // Saturday 9/8
  // Sunday 10/8

  // 11/8 - 17/8 _______________________________________
  // Monday 11/8

  {
    id: 'week7' + Date.now(),
    title: 'Week 7',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 11),
    allDay: true,
  },
  {
    id: 'deadline1108' + Date.now(),
    title: 'Deadline: MTK',
    description: 'Online Test',
    color: '#ef4444', // Red
    date: new Date(2025, 7, 11),
    allDay: true,
  },
  {
    id: 'it1108' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 8, 30).toISOString(),
    end: new Date(2025, 7, 11, 9, 30).toISOString(),
  },
  {
    id: 'inv1108' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 9, 30).toISOString(),
    end: new Date(2025, 7, 11, 11, 0).toISOString(),
  },
  {
    id: 'lunch1108' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 11, 0).toISOString(),
    end: new Date(2025, 7, 11, 11, 30).toISOString(),
  },
  {
    id: 'travel11108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 11, 30).toISOString(),
    end: new Date(2025, 7, 11, 12, 30).toISOString(),
  },
  {
    id: 'com1108' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 12, 30).toISOString(),
    end: new Date(2025, 7, 11, 15, 30).toISOString(),
  },
  {
    id: 'it21108' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 15, 30).toISOString(),
    end: new Date(2025, 7, 11, 17, 30).toISOString(),
  },
  {
    id: 'travel21108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 17, 30).toISOString(),
    end: new Date(2025, 7, 11, 18, 30).toISOString(),
  },
  {
    id: 'dinner1108' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 18, 30).toISOString(),
    end: new Date(2025, 7, 11, 19, 30).toISOString(),
  },
  {
    id: 'free11108' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 11),
    start: new Date(2025, 7, 11, 19, 30).toISOString(),
    end: new Date(2025, 7, 11, 23, 30).toISOString(),
  },

  // Tuesday 12/8
  {
    id: 'travel12907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 7, 30).toISOString(),
    end: new Date(2025, 7, 12, 8, 30).toISOString(),
  },
  {
    id: 'inv2907' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 8, 30).toISOString(),
    end: new Date(2025, 7, 12, 10, 30).toISOString(),
  },
  {
    id: 'travel22907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 10, 30).toISOString(),
    end: new Date(2025, 7, 12, 11, 30).toISOString(),
  },
  {
    id: 'lunch2907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 11, 30).toISOString(),
    end: new Date(2025, 7, 12, 12, 0).toISOString(),
  },
  {
    id: 'free12907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 12, 0).toISOString(),
    end: new Date(2025, 7, 12, 13, 30).toISOString(),
  },
  {
    id: 'travel32907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 13, 30).toISOString(),
    end: new Date(2025, 7, 12, 14, 30).toISOString(),
  },  
  {
    id: 'mtk2907' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 14, 30).toISOString(),
    end: new Date(2025, 7, 12, 16, 30).toISOString(),
  },
  {
    id: 'travel42907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 16, 30).toISOString(),
    end: new Date(2025, 7, 12, 17, 30).toISOString(),
  },
  {
    id: 'study2907' + Date.now(),
    title: 'Study Session: IT',
    description: '',
    color: '#22c55e', // Green
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 17, 30).toISOString(),
    end: new Date(2025, 7, 12, 18, 0).toISOString(),
  },
  {
    id: 'dinner2907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 18, 0).toISOString(),
    end: new Date(2025, 7, 12, 18, 30).toISOString(),
  },  
  {
    id: 'free22907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 12),
    start: new Date(2025, 7, 12, 18, 30).toISOString(),
    end: new Date(2025, 7, 12, 23, 30).toISOString(),
  },

  // Wednesday 13/8

  {
    id: 'travel13007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 9, 30).toISOString(),
    end: new Date(2025, 7, 13, 10, 30).toISOString(),
  },
  {
    id: 'mtk3007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 10, 30).toISOString(),
    end: new Date(2025, 7, 13, 12, 30).toISOString(),
  },
  {
    id: 'lunch3007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 12, 30).toISOString(),
    end: new Date(2025, 7, 13, 13, 30).toISOString(),
  },
  {
    id: 'inv3007' + Date.now(),
    title: 'INV - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 13, 30).toISOString(),
    end: new Date(2025, 7, 13, 15, 30).toISOString(),
  },
  {
    id: 'it3007' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 15, 30).toISOString(),
    end: new Date(2025, 7, 13, 16, 30).toISOString(),
  },
  {
    id: 'travel23007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 16, 30).toISOString(),
    end: new Date(2025, 7, 13, 17, 0).toISOString(),
  },
  {
    id: 'work3007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 17, 0).toISOString(),
    end: new Date(2025, 7, 13, 20, 0).toISOString(),
  },
  {
    id: 'travel33007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 20, 0).toISOString(),
    end: new Date(2025, 7, 13, 21, 0).toISOString(),
  },
  {
    id: 'dinner3007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 21, 0).toISOString(),
    end: new Date(2025, 7, 13, 22, 0).toISOString(),
  },
  {
    id: 'free13007' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 13),
    start: new Date(2025, 7, 13, 22, 0).toISOString(),
    end: new Date(2025, 7, 13, 23, 0).toISOString(),
  },

  // Thursday 14/8

  
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 8, 30).toISOString(),
    end: new Date(2025, 7, 14, 11, 30).toISOString(),
  },
  {
    id: 'travel13107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 11, 30).toISOString(),
    end: new Date(2025, 7, 14, 12, 30).toISOString(),
  },
  {
    id: 'mtk3107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 12, 30).toISOString(),
    end: new Date(2025, 7, 14, 14, 30).toISOString(),
  },
  {
    id: 'it3107' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 14, 30).toISOString(),
    end: new Date(2025, 7, 14, 16, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 16, 30).toISOString(),
    end: new Date(2025, 7, 14, 17, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 17, 0).toISOString(),
    end: new Date(2025, 7, 14, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 20, 0).toISOString(),
    end: new Date(2025, 7, 14, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 21, 0).toISOString(),
    end: new Date(2025, 7, 14, 21, 30).toISOString(),
  },
  {
    id: 'study3107' + Date.now(),
    title: 'Study',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 7, 14),
    start: new Date(2025, 7, 14, 21, 30).toISOString(),
    end: new Date(2025, 7, 14, 23, 30).toISOString(),
  },

  // Friday 15/8

  {
    id: 'deadline1508' + Date.now(),
    title: 'Deadline: IT',
    description: 'Excel test',
    color: '#ef4444', // Red
    date: new Date(2025, 7, 15),
    allDay: true,
  },
  
  {
    id: 'travel14108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 9, 30).toISOString(),
    end: new Date(2025, 7, 15, 10, 30).toISOString(),
  },
  {
    id: 'com108' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 10, 30).toISOString(),
    end: new Date(2025, 7, 15, 12, 30).toISOString(),
  },
  {
    id: 'lunch108' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 12, 30).toISOString(),
    end: new Date(2025, 7, 15, 13, 30).toISOString(),
  },
  {
    id: 'inv108' + Date.now(),
    title: 'INV Test - TC232',
    description: 'Innovation Class Test',
    color: '#ef4444', // Blue
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 13, 30).toISOString(),
    end: new Date(2025, 7, 15, 15, 30).toISOString(),
  },
  {
    id: 'it108' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 15, 30).toISOString(),
    end: new Date(2025, 7, 15, 17, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 17, 30).toISOString(),
    end: new Date(2025, 7, 15, 18, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 18, 0).toISOString(),
    end: new Date(2025, 7, 15, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 20, 0).toISOString(),
    end: new Date(2025, 7, 15, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 21, 0).toISOString(),
    end: new Date(2025, 7, 15, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 15),
    start: new Date(2025, 7, 15, 21, 30).toISOString(),
    end: new Date(2025, 7, 15, 23, 30).toISOString(),
  },

  // Saturday 16/8

  {
    id: 'free13208' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 16),
    allDay: true,
  },

  // Sunday 17/8
  {
    id: 'free13208' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 17),
    allDay: true,
  },

  // 18/8 - 24/8 _______________________________________
  // Monday 18/8

  {
    id: 'week8' + Date.now(),
    title: 'Week 8',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 18),
    allDay: true,
  },
  {
    id: 'it2807' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 8, 30).toISOString(),
    end: new Date(2025, 7, 18, 9, 30).toISOString(),
  },
  {
    id: 'inv2807' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 9, 30).toISOString(),
    end: new Date(2025, 7, 18, 10, 30).toISOString(),
  },
  {
    id: 'lunch2807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 10, 30).toISOString(),
    end: new Date(2025, 7, 18, 11, 0).toISOString(),
  },
  {
    id: 'travel12807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 11, 0).toISOString(),
    end: new Date(2025, 7, 18, 12, 0).toISOString(),
  },
  {
    id: 'com2807' + Date.now(),
    title: 'COM - BA608',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 12, 0).toISOString(),
    end: new Date(2025, 7, 18, 14, 30).toISOString(),
  },
  {
    id: 'it22807' + Date.now(),
    title: 'IT - TC230',  
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 14, 30).toISOString(),
    end: new Date(2025, 7, 18, 17, 0).toISOString(),
  },
  {
    id: 'travel22807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 17, 0).toISOString(),
    end: new Date(2025, 7, 18, 18, 0).toISOString(),
  },
  {
    id: 'dinner2807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 18, 0).toISOString(),
    end: new Date(2025, 7, 18, 18, 30).toISOString(),
  },
  {
    id: 'free12807' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 18),
    start: new Date(2025, 7, 18, 18, 30).toISOString(),
    end: new Date(2025, 7, 18, 23, 30).toISOString(),
  },
  // Tuesday 19/8

  {
    id: 'travel12907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 7, 30).toISOString(),
    end: new Date(2025, 7, 19, 8, 30).toISOString(),
  },
  {
    id: 'inv2907' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 8, 30).toISOString(),
    end: new Date(2025, 7, 19, 10, 30).toISOString(),
  },
  {
    id: 'travel22907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 10, 30).toISOString(),
    end: new Date(2025, 7, 19, 11, 30).toISOString(),
  },
  {
    id: 'lunch2907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 11, 30).toISOString(),
    end: new Date(2025, 7, 19, 12, 0).toISOString(),
  },
  {
    id: 'free12907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 12, 0).toISOString(),
    end: new Date(2025, 7, 19, 13, 30).toISOString(),
  },
  {
    id: 'travel32907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 13, 30).toISOString(),
    end: new Date(2025, 7, 19, 14, 30).toISOString(),
  },
  {
    id: 'mtk2907' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 14, 30).toISOString(),
    end: new Date(2025, 7, 19, 16, 30).toISOString(),
  },
  {
    id: 'travel42907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 16, 30).toISOString(),
    end: new Date(2025, 7, 19, 17, 30).toISOString(),
  },
  {
    id: 'free2907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 17, 30).toISOString(),
    end: new Date(2025, 7, 19, 18, 0).toISOString(),
  },
  {
    id: 'dinner2907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 18, 0).toISOString(),
    end: new Date(2025, 7, 19, 18, 30).toISOString(),
  },  
  {
    id: 'free22907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 19),
    start: new Date(2025, 7, 19, 18, 30).toISOString(),
    end: new Date(2025, 7, 19, 23, 30).toISOString(),
  },

  // Wednesday 20/8
  
  
  {
    id: 'travel13007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 9, 30).toISOString(),
    end: new Date(2025, 7, 20, 10, 30).toISOString(),
  },
  {
    id: 'mtk3007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 10, 30).toISOString(),
    end: new Date(2025, 7, 20, 12, 30).toISOString(),
  },
  {
    id: 'lunch3007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 12, 30).toISOString(),
    end: new Date(2025, 7, 20, 13, 30).toISOString(),
  },
  {
    id: 'com3007' + Date.now(),
    title: 'COM - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 13, 30).toISOString(),
    end: new Date(2025, 7, 20, 16, 30).toISOString(),
  },
  {
    id: 'travel23007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 16, 30).toISOString(),
    end: new Date(2025, 7, 20, 17, 0).toISOString(),
  },
  {
    id: 'work3007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 17, 0).toISOString(),
    end: new Date(2025, 7, 20, 20, 0).toISOString(),
  },
  {
    id: 'travel33007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 20, 0).toISOString(),
    end: new Date(2025, 7, 20, 21, 0).toISOString(),
  },
  {
    id: 'dinner3007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 21, 0).toISOString(),
    end: new Date(2025, 7, 20, 22, 0).toISOString(),
  },
  {
    id: 'free13007' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 20),
    start: new Date(2025, 7, 20, 22, 0).toISOString(),
    end: new Date(2025, 7, 20, 23, 0).toISOString(),
  },

  // Thursday 21/8

  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 8, 30).toISOString(),
    end: new Date(2025, 7, 21, 11, 30).toISOString(),
  },
  {
    id: 'travel13107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 11, 30).toISOString(),
    end: new Date(2025, 7, 21, 12, 30).toISOString(),
  },
  {
    id: 'mtk3107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 12, 30).toISOString(),
    end: new Date(2025, 7, 21, 14, 30).toISOString(),
  },
  {
    id: 'it3107' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 14, 30).toISOString(),
    end: new Date(2025, 7, 21, 16, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 16, 30).toISOString(),
    end: new Date(2025, 7, 21, 17, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 17, 0).toISOString(),
    end: new Date(2025, 7, 21, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 20, 0).toISOString(),
    end: new Date(2025, 7, 21, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 21, 0).toISOString(),
    end: new Date(2025, 7, 21, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 21),
    start: new Date(2025, 7, 21, 21, 30).toISOString(),
    end: new Date(2025, 7, 21, 23, 30).toISOString(),
  },
  
  // Friday 22/8
  
  {
    id: 'travel14108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 9, 30).toISOString(),
    end: new Date(2025, 7, 22, 10, 30).toISOString(),
  },
  {
    id: 'com108' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 10, 30).toISOString(),
    end: new Date(2025, 7, 22, 12, 30).toISOString(),
  },
  {
    id: 'lunch108' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 12, 30).toISOString(),
    end: new Date(2025, 7, 22, 13, 30).toISOString(),
  },
  {
    id: 'inv108' + Date.now(),
    title: 'INV Test - TC232',
    description: 'Innovation Class Test',
    color: '#ef4444', // Blue
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 13, 30).toISOString(),
    end: new Date(2025, 7, 22, 15, 30).toISOString(),
  },
  {
    id: 'it108' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 15, 30).toISOString(),
    end: new Date(2025, 7, 22, 17, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 17, 30).toISOString(),
    end: new Date(2025, 7, 22, 18, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 18, 0).toISOString(),
    end: new Date(2025, 7, 22, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 20, 0).toISOString(),
    end: new Date(2025, 7, 22, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 21, 0).toISOString(),
    end: new Date(2025, 7, 22, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 22),
    start: new Date(2025, 7, 22, 21, 30).toISOString(),
    end: new Date(2025, 7, 22, 23, 30).toISOString(),
  },


  // Saturday 23/8

  {
    id: 'free13208' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 23),
    allDay: true,
  },

  // Sunday 24/8

  {
    id: 'free13208' + Date.now(),
    title: 'Freetime',  
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 24),
    allDay: true,
  },

  // 25/8 - 31/8 _______________________________________
  // Monday 25/8

  {
    id: 'week9' + Date.now(),
    title: 'Week 9',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 25),
    allDay: true,
  },
  
  {
    id: 'it2807' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 8, 30).toISOString(),
    end: new Date(2025, 7, 25, 9, 30).toISOString(),
  },
  {
    id: 'inv2807' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 9, 30).toISOString(),
    end: new Date(2025, 7, 25, 10, 30).toISOString(),
  },
  {
    id: 'lunch2807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 10, 30).toISOString(),
    end: new Date(2025, 7, 25, 11, 0).toISOString(),
  },
  {
    id: 'travel12807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 11, 0).toISOString(),
    end: new Date(2025, 7, 25, 12, 0).toISOString(),
  },
  {
    id: 'com2807' + Date.now(),
    title: 'COM - BA608',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 12, 0).toISOString(),
    end: new Date(2025, 7, 25, 14, 30).toISOString(),
  },
  {
    id: 'it22807' + Date.now(),
    title: 'IT - TC230',  
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 14, 30).toISOString(),
    end: new Date(2025, 7, 25, 17, 0).toISOString(),
  },
  {
    id: 'travel22807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 17, 0).toISOString(),
    end: new Date(2025, 7, 25, 18, 0).toISOString(),
  },
  {
    id: 'dinner2807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 18, 0).toISOString(),
    end: new Date(2025, 7, 25, 18, 30).toISOString(),
  },
  {
    id: 'study2528' + Date.now(),
    title: 'Study Session: INV',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 7, 25),
    start: new Date(2025, 7, 25, 18, 30).toISOString(),
    end: new Date(2025, 7, 25, 23, 30).toISOString(),
  },

  // Tuesday 26/8

  {
    id: 'travel12907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 7, 30).toISOString(),
    end: new Date(2025, 7, 26, 8, 30).toISOString(),
  },
  {
    id: 'inv2907' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 8, 30).toISOString(),
    end: new Date(2025, 7, 26, 10, 30).toISOString(),
  },
  {
    id: 'travel22907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 10, 30).toISOString(),
    end: new Date(2025, 7, 26, 11, 30).toISOString(),
  },
  {
    id: 'lunch2907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 11, 30).toISOString(),
    end: new Date(2025, 7, 26, 12, 0).toISOString(),
  },
  {
    id: 'free12907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 12, 0).toISOString(),
    end: new Date(2025, 7, 26, 13, 30).toISOString(),
  },
  {
    id: 'travel32907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 13, 30).toISOString(),
    end: new Date(2025, 7, 26, 14, 30).toISOString(),
  },
  {
    id: 'mtk2907' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 14, 30).toISOString(),
    end: new Date(2025, 7, 26, 16, 30).toISOString(),
  },
  {
    id: 'travel42907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 16, 30).toISOString(),
    end: new Date(2025, 7, 26, 17, 30).toISOString(),
  },
  {
    id: 'free2907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 17, 30).toISOString(),
    end: new Date(2025, 7, 26, 18, 0).toISOString(),
  },
  {
    id: 'dinner2907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 18, 0).toISOString(),
    end: new Date(2025, 7, 26, 18, 30).toISOString(),
  },
  {
    id: 'study2907' + Date.now(),
    title: 'Study Session: INV',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 7, 26),
    start: new Date(2025, 7, 26, 18, 30).toISOString(),
    end: new Date(2025, 7, 26, 23, 30).toISOString(),
  },

  // Wednesday 27/8
  
  {
    id: 'travel13007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 9, 30).toISOString(),
    end: new Date(2025, 7, 27, 10, 30).toISOString(),
  },
  {
    id: 'mtk3007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 10, 30).toISOString(),
    end: new Date(2025, 7, 27, 12, 30).toISOString(),
  },
  {
    id: 'lunch3007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 12, 30).toISOString(),
    end: new Date(2025, 7, 27, 13, 30).toISOString(),
  },
  {
    id: 'com3007' + Date.now(),
    title: 'COM - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 13, 30).toISOString(),
    end: new Date(2025, 7, 27, 16, 30).toISOString(),
  },
  {
    id: 'travel23007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 16, 30).toISOString(),
    end: new Date(2025, 7, 27, 17, 0).toISOString(),
  },
  {
    id: 'work3007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 17, 0).toISOString(),
    end: new Date(2025, 7, 27, 20, 0).toISOString(),
  },
  {
    id: 'travel33007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 20, 0).toISOString(),
    end: new Date(2025, 7, 27, 21, 0).toISOString(),
  },
  {
    id: 'dinner3007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 21, 0).toISOString(),
    end: new Date(2025, 7, 27, 22, 0).toISOString(),
  },
  {
    id: 'free13007' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 27),
    start: new Date(2025, 7, 27, 22, 0).toISOString(),
    end: new Date(2025, 7, 27, 23, 0).toISOString(),
  },

  // Thursday 28/8

  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 8, 30).toISOString(),
    end: new Date(2025, 7, 28, 11, 30).toISOString(),
  },
  {
    id: 'travel13107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 11, 30).toISOString(),
    end: new Date(2025, 7, 28, 12, 30).toISOString(),
  },
  {
    id: 'mtk3107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 12, 30).toISOString(),
    end: new Date(2025, 7, 28, 14, 30).toISOString(),
  },
  {
    id: 'it3107' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 14, 30).toISOString(),
    end: new Date(2025, 7, 28, 16, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 16, 30).toISOString(),
    end: new Date(2025, 7, 28, 17, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 17, 0).toISOString(),
    end: new Date(2025, 7, 28, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 20, 0).toISOString(),
    end: new Date(2025, 7, 28, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 21, 0).toISOString(),
    end: new Date(2025, 7, 28, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 28),
    start: new Date(2025, 7, 28, 21, 30).toISOString(),
    end: new Date(2025, 7, 28, 23, 30).toISOString(),
  },

  // Friday 29/8
  {
    id: 'deadline2908' + Date.now(),
    title: 'INV Pitch',
    description: 'Innovation Oral Presentation',
    color: '#ef4444', // Red
    date: new Date(2025, 7, 29),
    allDay: true,
  },
  
  {
    id: 'travel14108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 9, 30).toISOString(),
    end: new Date(2025, 7, 29, 10, 30).toISOString(),
  },
  {
    id: 'com108' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 10, 30).toISOString(),
    end: new Date(2025, 7, 29, 12, 30).toISOString(),
  },
  {
    id: 'lunch108' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 12, 30).toISOString(),
    end: new Date(2025, 7, 29, 13, 30).toISOString(),
  },
  {
    id: 'inv108' + Date.now(),
    title: 'INV Test - TC232',
    description: 'Innovation Class Test',
    color: '#ef4444', // Blue
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 13, 30).toISOString(),
    end: new Date(2025, 7, 29, 15, 30).toISOString(),
  },
  {
    id: 'it108' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 15, 30).toISOString(),
    end: new Date(2025, 7, 29, 17, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 17, 30).toISOString(),
    end: new Date(2025, 7, 29, 18, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 18, 0).toISOString(),
    end: new Date(2025, 7, 29, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 20, 0).toISOString(),
    end: new Date(2025, 7, 29, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 21, 0).toISOString(),
    end: new Date(2025, 7, 29, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 29),
    start: new Date(2025, 7, 29, 21, 30).toISOString(),
    end: new Date(2025, 7, 29, 23, 30).toISOString(),
  },

  // Saturday 30/8
  {
    id: 'free13208' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 30),
    allDay: true,
  },

  // Sunday 31/8

  {
    id: 'free13208' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 7, 31),
    allDay: true,
  },
  
  // 1/9 - 7/9 _______________________________________
  // Monday 1/9
  {
    id: 'week10' + Date.now(),
    title: 'Week 10',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 1),
    allDay: true,
  },
  {
    id: 'it2807' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 8, 30).toISOString(),
    end: new Date(2025, 8, 1, 9, 30).toISOString(),
  },
  {
    id: 'inv2807' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 9, 30).toISOString(),
    end: new Date(2025, 8, 1, 10, 30).toISOString(),
  },
  {
    id: 'lunch2807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 10, 30).toISOString(),
    end: new Date(2025, 8, 1, 11, 0).toISOString(),
  },
  {
    id: 'travel12807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 11, 0).toISOString(),
    end: new Date(2025, 8, 1, 12, 0).toISOString(),
  },
  {
    id: 'com2807' + Date.now(),
    title: 'COM - BA608',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 12, 0).toISOString(),
    end: new Date(2025, 8, 1, 14, 30).toISOString(),
  },
  {
    id: 'it22807' + Date.now(),
    title: 'IT - TC230',  
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 14, 30).toISOString(),
    end: new Date(2025, 8, 1, 17, 0).toISOString(),
  },
  {
    id: 'travel22807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 17, 0).toISOString(),
    end: new Date(2025, 8, 1, 18, 0).toISOString(),
  },
  {
    id: 'dinner2807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 18, 0).toISOString(),
    end: new Date(2025, 8, 1, 18, 30).toISOString(),
  },
  {
    id: 'study0109' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 1),
    start: new Date(2025, 8, 1, 18, 30).toISOString(),
    end: new Date(2025, 8, 1, 23, 30).toISOString(),
  },

  // Tuesday 2/9
  
  
  {
    id: 'travel12907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 7, 30).toISOString(),
    end: new Date(2025, 8, 2, 8, 30).toISOString(),
  },
  {
    id: 'inv2907' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 8, 30).toISOString(),
    end: new Date(2025, 8, 2, 10, 30).toISOString(),
  },
  {
    id: 'travel22907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 10, 30).toISOString(),
    end: new Date(2025, 8, 2, 11, 30).toISOString(),
  },
  {
    id: 'lunch2907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 11, 30).toISOString(),
    end: new Date(2025, 8, 2, 12, 0).toISOString(),
  },
  {
    id: 'free12907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 12, 0).toISOString(),
    end: new Date(2025, 8, 2, 13, 30).toISOString(),
  },
  {
    id: 'travel32907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 13, 30).toISOString(),
    end: new Date(2025, 8, 2, 14, 30).toISOString(),
  },
  {
    id: 'mtk2907' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 14, 30).toISOString(),
    end: new Date(2025, 8, 2, 16, 30).toISOString(),
  },
  {
    id: 'travel42907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 16, 30).toISOString(),
    end: new Date(2025, 8, 2, 17, 30).toISOString(),
  },
  {
    id: 'free2907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 17, 30).toISOString(),
    end: new Date(2025, 8, 2, 18, 0).toISOString(),
  },
  {
    id: 'dinner2907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 18, 0).toISOString(),
    end: new Date(2025, 8, 2, 18, 30).toISOString(),
  },  
  {
    id: 'study0209' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 2),
    start: new Date(2025, 8, 2, 18, 30).toISOString(),
    end: new Date(2025, 8, 2, 23, 30).toISOString(),
  },

  // Wednesday 3/9
  
  
  {
    id: 'travel13007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 9, 30).toISOString(),
    end: new Date(2025, 8, 3, 10, 30).toISOString(),
  },
  {
    id: 'mtk3007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 10, 30).toISOString(),
    end: new Date(2025, 8, 3, 12, 30).toISOString(),
  },
  {
    id: 'lunch3007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 12, 30).toISOString(),
    end: new Date(2025, 8, 3, 13, 30).toISOString(),
  },
  {
    id: 'com3007' + Date.now(),
    title: 'COM - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 13, 30).toISOString(),
    end: new Date(2025, 8, 3, 16, 30).toISOString(),
  },
  {
    id: 'travel23007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 16, 30).toISOString(),
    end: new Date(2025, 8, 3, 17, 0).toISOString(),
  },
  {
    id: 'work3007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 17, 0).toISOString(),
    end: new Date(2025, 8, 3, 20, 0).toISOString(),
  },
  {
    id: 'travel33007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 20, 0).toISOString(),
    end: new Date(2025, 8, 3, 21, 0).toISOString(),
  },
  {
    id: 'dinner3007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 21, 0).toISOString(),
    end: new Date(2025, 8, 3, 22, 0).toISOString(),
  },
  {
    id: 'free13007' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 3),
    start: new Date(2025, 8, 3, 22, 0).toISOString(),
    end: new Date(2025, 8, 3, 23, 0).toISOString(),
  },

  // Thursday 4/9

  
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 8, 30).toISOString(),
    end: new Date(2025, 8, 4, 11, 30).toISOString(),
  },
  {
    id: 'travel13107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 11, 30).toISOString(),
    end: new Date(2025, 8, 4, 12, 30).toISOString(),
  },
  {
    id: 'mtk3107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 12, 30).toISOString(),
    end: new Date(2025, 8, 4, 14, 30).toISOString(),
  },
  {
    id: 'it3107' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 14, 30).toISOString(),
    end: new Date(2025, 8, 4, 16, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 16, 30).toISOString(),
    end: new Date(2025, 8, 4, 17, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 17, 0).toISOString(),
    end: new Date(2025, 8, 4, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 20, 0).toISOString(),
    end: new Date(2025, 8, 4, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 21, 0).toISOString(),
    end: new Date(2025, 8, 4, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 4),
    start: new Date(2025, 8, 4, 21, 30).toISOString(),
    end: new Date(2025, 8, 4, 23, 30).toISOString(),
  },

  // Friday 5/9

  
  {
    id: 'travel14108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 9, 30).toISOString(),
    end: new Date(2025, 8, 5, 10, 30).toISOString(),
  },
  {
    id: 'com108' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 10, 30).toISOString(),
    end: new Date(2025, 8, 5, 12, 30).toISOString(),
  },
  {
    id: 'lunch108' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 12, 30).toISOString(),
    end: new Date(2025, 8, 5, 13, 30).toISOString(),
  },
  {
    id: 'inv108' + Date.now(),
    title: 'INV Test - TC232',
    description: 'Innovation Class Test',
    color: '#ef4444', // Blue
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 13, 30).toISOString(),
    end: new Date(2025, 8, 5, 15, 30).toISOString(),
  },
  {
    id: 'it108' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 15, 30).toISOString(),
    end: new Date(2025, 8, 5, 17, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 17, 30).toISOString(),
    end: new Date(2025, 8, 5, 18, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 18, 0).toISOString(),
    end: new Date(2025, 8, 5, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 20, 0).toISOString(),
    end: new Date(2025, 8, 5, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 21, 0).toISOString(),
    end: new Date(2025, 8, 5, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 5),
    start: new Date(2025, 8, 5, 21, 30).toISOString(),
    end: new Date(2025, 8, 5, 23, 30).toISOString(),
  },

  // Saturday 6/9
  
  {
    id: 'beakfast0609' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 9, 30).toISOString(),
    end: new Date(2025, 8, 6, 10, 0).toISOString(),
  },
  {
    id: 'study10609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#3b82f6', // Green
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 10, 0).toISOString(),
    end: new Date(2025, 8, 6, 12, 30).toISOString(),
  },
  {
    id: 'lunch0609' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 12, 30).toISOString(),
    end: new Date(2025, 8, 6, 13, 30).toISOString(),
  },
  {
    id: 'study20609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#3b82f6', // Green
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 13, 30).toISOString(),
    end: new Date(2025, 8, 6, 16, 0).toISOString(),
  },
  {
    id: 'travel0609' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 16, 0).toISOString(),
    end: new Date(2025, 8, 6, 17, 0).toISOString(),
  },
  {
    id: 'work0609' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 17, 0).toISOString(),
    end: new Date(2025, 8, 6, 20, 0).toISOString(),
  },
  {
    id: 'travel20609' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 20, 0).toISOString(),
    end: new Date(2025, 8, 6, 21, 0).toISOString(),
  },
  {
    id: 'dinner0609' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 21, 0).toISOString(),
    end: new Date(2025, 8, 6, 21, 30).toISOString(),
  },
  {
    id: 'free0609' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 6),
    start: new Date(2025, 8, 6, 21, 30).toISOString(),
    end: new Date(2025, 8, 6, 23, 30).toISOString(),
  },

  // Sunday 7/9

  {
    id: 'deadline0709' + Date.now(),
    title: 'Deadline: COM',
    description: 'Written Research Report',
    color: '#ef4444', // Red
    date: new Date(2025, 8, 7),
    allDay: true,
  },
  {
    id: 'beakfast0609' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 9, 30).toISOString(),
    end: new Date(2025, 8, 7, 10, 0).toISOString(),
  },
  {
    id: 'study10609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 10, 0).toISOString(),
    end: new Date(2025, 8, 7, 12, 30).toISOString(),
  },
  {
    id: 'lunch0609' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 12, 30).toISOString(),
    end: new Date(2025, 8, 7, 13, 30).toISOString(),
  },
  {
    id: 'study20609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 13, 30).toISOString(),
    end: new Date(2025, 8, 7, 16, 0).toISOString(),
  },
  {
    id: 'break10709' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 16, 0).toISOString(),
    end: new Date(2025, 8, 7, 17, 0).toISOString(),
  },
  {
    id: 'study30609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 17, 0).toISOString(),
    end: new Date(2025, 8, 7, 20, 0).toISOString(),
  },
  {
    id: 'break20609' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 20, 0).toISOString(),
    end: new Date(2025, 8, 7, 21, 0).toISOString(),
  },
  {
    id: 'dinner0609' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 21, 0).toISOString(),
    end: new Date(2025, 8, 7, 21, 30).toISOString(),
  },
  {
    id: 'study30609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 7),
    start: new Date(2025, 8, 7, 21, 30).toISOString(),
    end: new Date(2025, 8, 7, 23, 30).toISOString(),
  },

  // 8/9 - 14/9 _______________________________________
  // Monday 8/9
  {
    id: 'week11' + Date.now(),
    title: 'Week 11',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 8),
    allDay: true,
  },
  {
    id: 'it2807' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 8, 30).toISOString(),
    end: new Date(2025, 8, 8, 9, 30).toISOString(),
  },
  {
    id: 'inv2807' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 9, 30).toISOString(),
    end: new Date(2025, 8, 8, 10, 30).toISOString(),
  },
  {
    id: 'lunch2807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 10, 30).toISOString(),
    end: new Date(2025, 8, 8, 11, 0).toISOString(),
  },
  {
    id: 'travel12807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 11, 0).toISOString(),
    end: new Date(2025, 8, 8, 12, 0).toISOString(),
  },
  {
    id: 'com2807' + Date.now(),
    title: 'COM - BA608',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 12, 0).toISOString(),
    end: new Date(2025, 8, 8, 14, 30).toISOString(),
  },
  {
    id: 'it22807' + Date.now(),
    title: 'IT - TC230',  
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 14, 30).toISOString(),
    end: new Date(2025, 8, 8, 17, 0).toISOString(),
  },
  {
    id: 'travel22807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 17, 0).toISOString(),
    end: new Date(2025, 8, 8, 18, 0).toISOString(),
  },
  {
    id: 'dinner2807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 18, 0).toISOString(),
    end: new Date(2025, 8, 8, 18, 30).toISOString(),
  },
  {
    id: 'study0109' + Date.now(),
    title: 'Study Session: INV',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 8),
    start: new Date(2025, 8, 8, 18, 30).toISOString(),
    end: new Date(2025, 8, 8, 23, 30).toISOString(),
  },

  // Tuesday 9/9

  
  {
    id: 'travel12907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 7, 30).toISOString(),
    end: new Date(2025, 8, 9, 8, 30).toISOString(),
  },
  {
    id: 'inv2907' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 8, 30).toISOString(),
    end: new Date(2025, 8, 9, 10, 30).toISOString(),
  },
  {
    id: 'travel22907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 10, 30).toISOString(),
    end: new Date(2025, 8, 9, 11, 30).toISOString(),
  },
  {
    id: 'lunch2907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 11, 30).toISOString(),
    end: new Date(2025, 8, 9, 12, 0).toISOString(),
  },
  {
    id: 'free12907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 12, 0).toISOString(),
    end: new Date(2025, 8, 9, 13, 30).toISOString(),
  },
  {
    id: 'travel32907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 13, 30).toISOString(),
    end: new Date(2025, 8, 9, 14, 30).toISOString(),
  },
  {
    id: 'mtk2907' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 14, 30).toISOString(),
    end: new Date(2025, 8, 9, 16, 30).toISOString(),
  },
  {
    id: 'travel42907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 16, 30).toISOString(),
    end: new Date(2025, 8, 9, 17, 30).toISOString(),
  },
  {
    id: 'free2907' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 17, 30).toISOString(),
    end: new Date(2025, 8, 9, 18, 0).toISOString(),
  },
  {
    id: 'dinner2907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 18, 0).toISOString(),
    end: new Date(2025, 8, 9, 18, 30).toISOString(),
  },
  {
    id: 'study0209' + Date.now(),
    title: 'Study Session: INV',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 9),
    start: new Date(2025, 8, 9, 18, 30).toISOString(),
    end: new Date(2025, 8, 9, 23, 30).toISOString(),
  },

  // Wednesday 10/9

  
  {
    id: 'travel13007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 9, 30).toISOString(),
    end: new Date(2025, 8, 10, 10, 30).toISOString(),
  },
  {
    id: 'mtk3007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 10, 30).toISOString(),
    end: new Date(2025, 8, 10, 12, 30).toISOString(),
  },
  {
    id: 'lunch3007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 12, 30).toISOString(),
    end: new Date(2025, 8, 10, 13, 30).toISOString(),
  },
  {
    id: 'com3007' + Date.now(),
    title: 'COM - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 13, 30).toISOString(),
    end: new Date(2025, 8, 10, 16, 30).toISOString(),
  },
  {
    id: 'travel23007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 16, 30).toISOString(),
    end: new Date(2025, 8, 10, 17, 0).toISOString(),
  },
  {
    id: 'work3007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 17, 0).toISOString(),
    end: new Date(2025, 8, 10, 20, 0).toISOString(),
  },
  {
    id: 'travel33007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 20, 0).toISOString(),
    end: new Date(2025, 8, 10, 21, 0).toISOString(),
  },
  {
    id: 'dinner3007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 21, 0).toISOString(),
    end: new Date(2025, 8, 10, 22, 0).toISOString(),
  },
  {
    id: 'free13007' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 10),
    start: new Date(2025, 8, 10, 22, 0).toISOString(),
    end: new Date(2025, 8, 10, 23, 0).toISOString(),
  },

  // Thursday 11/9
  
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 8, 30).toISOString(),
    end: new Date(2025, 8, 11, 11, 30).toISOString(),
  },
  {
    id: 'travel13107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 11, 30).toISOString(),
    end: new Date(2025, 8, 11, 12, 30).toISOString(),
  },
  {
    id: 'mtk3107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 12, 30).toISOString(),
    end: new Date(2025, 8, 11, 14, 30).toISOString(),
  },
  {
    id: 'it3107' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 14, 30).toISOString(),
    end: new Date(2025, 8, 11, 16, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 16, 30).toISOString(),
    end: new Date(2025, 8, 11, 17, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 17, 0).toISOString(),
    end: new Date(2025, 8, 11, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 20, 0).toISOString(),
    end: new Date(2025, 8, 11, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 21, 0).toISOString(),
    end: new Date(2025, 8, 11, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 11),
    start: new Date(2025, 8, 11, 21, 30).toISOString(),
    end: new Date(2025, 8, 11, 23, 30).toISOString(),
  },

  // Friday 12/9

  {
    id: 'deadline1209' + Date.now(),
    title: 'Deadline: INV',
    description: 'Submit INV Report',
    color: '#ef4444', // Red
    date: new Date(2025, 8, 12),
    allDay: true,
  },
  {
    id: 'travel14108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 9, 30).toISOString(),
    end: new Date(2025, 8, 12, 10, 30).toISOString(),
  },
  {
    id: 'com108' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 10, 30).toISOString(),
    end: new Date(2025, 8, 12, 12, 30).toISOString(),
  },
  {
    id: 'lunch108' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 12, 30).toISOString(),
    end: new Date(2025, 8, 12, 13, 30).toISOString(),
  },
  {
    id: 'inv108' + Date.now(),
    title: 'INV - TC232',
    description: 'Innovation Class Test',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 13, 30).toISOString(),
    end: new Date(2025, 8, 12, 15, 30).toISOString(),
  },
  {
    id: 'it108' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 15, 30).toISOString(),
    end: new Date(2025, 8, 12, 17, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 17, 30).toISOString(),
    end: new Date(2025, 8, 12, 18, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 18, 0).toISOString(),
    end: new Date(2025, 8, 12, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 20, 0).toISOString(),
    end: new Date(2025, 8, 12, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 21, 0).toISOString(),
    end: new Date(2025, 8, 12, 21, 30).toISOString(),
  },
  {
    id: 'study3107' + Date.now(),
    title: 'Study Session: IT',
    description: '',
    color: '#22c55e', // Green
    date: new Date(2025, 8, 12),
    start: new Date(2025, 8, 12, 21, 30).toISOString(),
    end: new Date(2025, 8, 12, 23, 30).toISOString(),
  },

  // Saturday 13/9
  
  
  {
    id: 'beakfast0609' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 9, 30).toISOString(),
    end: new Date(2025, 8, 13, 10, 0).toISOString(),
  },
  {
    id: 'study10609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#22c55e', // Green
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 10, 0).toISOString(),
    end: new Date(2025, 8, 13, 12, 30).toISOString(),
  },
  {
    id: 'lunch0609' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 12, 30).toISOString(),
    end: new Date(2025, 8, 13, 13, 30).toISOString(),
  },
  {
    id: 'study20609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#22c55e', // Green
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 13, 30).toISOString(),
    end: new Date(2025, 8, 13, 16, 0).toISOString(),
  },
  {
    id: 'travel0609' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 16, 0).toISOString(),
    end: new Date(2025, 8, 13, 17, 0).toISOString(),
  },
  {
    id: 'work0609' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 17, 0).toISOString(),
    end: new Date(2025, 8, 13, 20, 0).toISOString(),
  },
  {
    id: 'travel20609' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 20, 0).toISOString(),
    end: new Date(2025, 8, 13, 21, 0).toISOString(),
  },
  {
    id: 'dinner0609' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 21, 0).toISOString(),
    end: new Date(2025, 8, 13, 21, 30).toISOString(),
  },
  {
    id: 'free0609' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 13),
    start: new Date(2025, 8, 13, 21, 30).toISOString(),
    end: new Date(2025, 8, 13, 23, 30).toISOString(),
  },

  // Sunday 14/9

  // 15/9 - 21/9 _______________________________________
  // Monday 15/9
  {
    id: 'week12' + Date.now(),
    title: 'Week 12',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 15),
    allDay: true,
  },
  {
    id: 'it2807' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 8, 30).toISOString(),
    end: new Date(2025, 8, 15, 9, 30).toISOString(),
  },
  {
    id: 'inv2807' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 9, 30).toISOString(),
    end: new Date(2025, 8, 15, 10, 30).toISOString(),
  },
  {
    id: 'lunch2807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 10, 30).toISOString(),
    end: new Date(2025, 8, 15, 11, 0).toISOString(),
  },
  {
    id: 'travel12807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 11, 0).toISOString(),
    end: new Date(2025, 8, 15, 12, 0).toISOString(),
  },
  {
    id: 'com2807' + Date.now(),
    title: 'COM - BA608',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 12, 0).toISOString(),
    end: new Date(2025, 8, 15, 14, 30).toISOString(),
  },
  {
    id: 'it22807' + Date.now(),
    title: 'IT - TC230',  
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 14, 30).toISOString(),
    end: new Date(2025, 8, 15, 17, 0).toISOString(),
  },
  {
    id: 'travel22807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 17, 0).toISOString(),
    end: new Date(2025, 8, 15, 18, 0).toISOString(),
  },
  {
    id: 'dinner2807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 18, 0).toISOString(),
    end: new Date(2025, 8, 15, 18, 30).toISOString(),
  },
  {
    id: 'study0109' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 15),
    start: new Date(2025, 8, 15, 18, 30).toISOString(),
    end: new Date(2025, 8, 15, 23, 30).toISOString(),
  },

  // Tuesday 16/9
  
  
  {
    id: 'travel12907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 7, 30).toISOString(),
    end: new Date(2025, 8, 16, 8, 30).toISOString(),
  },
  {
    id: 'inv2907' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 8, 30).toISOString(),
    end: new Date(2025, 8, 16, 10, 30).toISOString(),
  },
  {
    id: 'travel22907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 10, 30).toISOString(),
    end: new Date(2025, 8, 16, 11, 30).toISOString(),
  },
  {
    id: 'lunch2907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 11, 30).toISOString(),
    end: new Date(2025, 8, 16, 12, 0).toISOString(),
  },
  {
    id: 'study2907' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 12, 0).toISOString(),
    end: new Date(2025, 8, 16, 13, 30).toISOString(),
  },
  {
    id: 'travel32907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 13, 30).toISOString(),
    end: new Date(2025, 8, 16, 14, 30).toISOString(),
  },
  {
    id: 'mtk2907' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 14, 30).toISOString(),
    end: new Date(2025, 8, 16, 16, 30).toISOString(),
  },
  {
    id: 'travel42907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 16, 30).toISOString(),
    end: new Date(2025, 8, 16, 17, 30).toISOString(),
  },
  {
    id: 'study2907' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 17, 30).toISOString(),
    end: new Date(2025, 8, 16, 18, 0).toISOString(),
  },
  {
    id: 'dinner2907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 18, 0).toISOString(),
    end: new Date(2025, 8, 16, 18, 30).toISOString(),
  },
  {
    id: 'study0209' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 16),
    start: new Date(2025, 8, 16, 18, 30).toISOString(),
    end: new Date(2025, 8, 16, 23, 30).toISOString(),
  },

  // Wednesday 17/9
  
  {
    id: 'travel13007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 9, 30).toISOString(),
    end: new Date(2025, 8, 17, 10, 30).toISOString(),
  },
  {
    id: 'mtk3007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 10, 30).toISOString(),
    end: new Date(2025, 8, 17, 12, 30).toISOString(),
  },
  {
    id: 'lunch3007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 12, 30).toISOString(),
    end: new Date(2025, 8, 17, 13, 30).toISOString(),
  },
  {
    id: 'com3007' + Date.now(),
    title: 'COM - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 13, 30).toISOString(),
    end: new Date(2025, 8, 17, 16, 30).toISOString(),
  },
  {
    id: 'travel23007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 16, 30).toISOString(),
    end: new Date(2025, 8, 17, 17, 0).toISOString(),
  },
  {
    id: 'work3007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 17, 0).toISOString(),
    end: new Date(2025, 8, 17, 20, 0).toISOString(),
  },
  {
    id: 'travel33007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 20, 0).toISOString(),
    end: new Date(2025, 8, 17, 21, 0).toISOString(),
  },
  {
    id: 'dinner3007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 21, 0).toISOString(),
    end: new Date(2025, 8, 17, 22, 0).toISOString(),
  },
  {
    id: 'study1709' + Date.now(),
    title: 'Study Session: IT',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 17),
    start: new Date(2025, 8, 17, 22, 0).toISOString(),
    end: new Date(2025, 8, 17, 23, 0).toISOString(),
  },

  // Thursday 18/9

  
  {
    id: 'study1809' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 8, 30).toISOString(),
    end: new Date(2025, 8, 18, 11, 30).toISOString(),
  },
  {
    id: 'travel13107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 11, 30).toISOString(),
    end: new Date(2025, 8, 18, 12, 30).toISOString(),
  },
  {
    id: 'mtk3107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 12, 30).toISOString(),
    end: new Date(2025, 8, 18, 14, 30).toISOString(),
  },
  {
    id: 'it3107' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 14, 30).toISOString(),
    end: new Date(2025, 8, 18, 16, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 16, 30).toISOString(),
    end: new Date(2025, 8, 18, 17, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 17, 0).toISOString(),
    end: new Date(2025, 8, 18, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 20, 0).toISOString(),
    end: new Date(2025, 8, 18, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 21, 0).toISOString(),
    end: new Date(2025, 8, 18, 21, 30).toISOString(),
  },
  {
    id: 'study1809' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 18),
    start: new Date(2025, 8, 18, 21, 30).toISOString(),
    end: new Date(2025, 8, 18, 23, 30).toISOString(),
  },

  // Friday 19/9
  {
    id: 'deadline1909' + Date.now(),
    title: 'Deadline: COM',
    description: 'Complete ePortfolio',
    color: '#ef4444', // Red
    date: new Date(2025, 8, 19),
    allDay: true,
  },
  {
    id: 'travel14108' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 9, 30).toISOString(),
    end: new Date(2025, 8, 19, 10, 30).toISOString(),
  },
  {
    id: 'com108' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 10, 30).toISOString(),
    end: new Date(2025, 8, 19, 12, 30).toISOString(),
  },
  {
    id: 'lunch108' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 12, 30).toISOString(),
    end: new Date(2025, 8, 19, 13, 30).toISOString(),
  },
  {
    id: 'inv108' + Date.now(),
    title: 'INV - TC232',
    description: 'Innovation Class Test',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 13, 30).toISOString(),
    end: new Date(2025, 8, 19, 15, 30).toISOString(),
  },
  {
    id: 'it108' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 15, 30).toISOString(),
    end: new Date(2025, 8, 19, 17, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 17, 30).toISOString(),
    end: new Date(2025, 8, 19, 18, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 18, 0).toISOString(),
    end: new Date(2025, 8, 19, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 20, 0).toISOString(),
    end: new Date(2025, 8, 19, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 21, 0).toISOString(),
    end: new Date(2025, 8, 19, 21, 30).toISOString(),
  },
  {
    id: 'study1809' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 19),
    start: new Date(2025, 8, 19, 21, 30).toISOString(),
    end: new Date(2025, 8, 19, 23, 30).toISOString(),
  },

  // Saturday 20/9

  {
    id: 'beakfast0609' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 9, 30).toISOString(),
    end: new Date(2025, 8, 20, 10, 0).toISOString(),
  },
  {
    id: 'study10609' + Date.now(),
    title: 'Study Session: COM',
    description: '',
    color: '#22c55e', // Green
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 10, 0).toISOString(),
    end: new Date(2025, 8, 20, 12, 30).toISOString(),
  },
  {
    id: 'lunch0609' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 12, 30).toISOString(),
    end: new Date(2025, 8, 20, 13, 30).toISOString(),
  },
  {
    id: 'study20609' + Date.now(),
    title: 'Study Session: INV',
    description: '',
    color: '#22c55e', // Green
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 13, 30).toISOString(),
    end: new Date(2025, 8, 20, 16, 0).toISOString(),
  },
  {
    id: 'travel0609' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 16, 0).toISOString(),
    end: new Date(2025, 8, 20, 17, 0).toISOString(),
  },
  {
    id: 'work0609' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 17, 0).toISOString(),
    end: new Date(2025, 8, 20, 20, 0).toISOString(),
  },
  {
    id: 'travel20609' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 20, 0).toISOString(),
    end: new Date(2025, 8, 20, 21, 0).toISOString(),
  },
  {
    id: 'dinner0609' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 21, 0).toISOString(),
    end: new Date(2025, 8, 20, 21, 30).toISOString(),
  },
  {
    id: 'study20609' + Date.now(),
    title: 'Study Session: INV',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 20),
    start: new Date(2025, 8, 20, 21, 30).toISOString(),
    end: new Date(2025, 8, 20, 23, 30).toISOString(),
  },

  // Sunday 21/9

  {
    id: 'beakfast0609' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 9, 30).toISOString(),
    end: new Date(2025, 8, 21, 10, 0).toISOString(),
  },
  {
    id: 'study10609' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#22c55e', // Green
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 10, 0).toISOString(),
    end: new Date(2025, 8, 21, 12, 30).toISOString(),
  },
  {
    id: 'lunch0609' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 12, 30).toISOString(),
    end: new Date(2025, 8, 21, 13, 30).toISOString(),
  },
  {
    id: 'study20609' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#22c55e', // Green
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 13, 30).toISOString(),
    end: new Date(2025, 8, 21, 16, 0).toISOString(),
  },
  {
    id: 'break10709' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 16, 0).toISOString(),
    end: new Date(2025, 8, 21, 17, 0).toISOString(),
  },
  {
    id: 'study30609' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 17, 0).toISOString(),
    end: new Date(2025, 8, 21, 20, 0).toISOString(),
  },
  {
    id: 'break20609' + Date.now(),
    title: 'Break',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 20, 0).toISOString(),
    end: new Date(2025, 8, 21, 21, 0).toISOString(),
  },
  {
    id: 'dinner0609' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 21, 0).toISOString(),
    end: new Date(2025, 8, 21, 21, 30).toISOString(),
  },
  {
    id: 'study30609' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 21),
    start: new Date(2025, 8, 21, 21, 30).toISOString(),
    end: new Date(2025, 8, 21, 23, 30).toISOString(),
  },

  // 22/9 - 28/9 _______________________________________
  // Monday 22/9
  {
    id: 'week13' + Date.now(),
    title: 'Week 13',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 22),
    allDay: true,
  },
  {
    id: 'deadline12609' + Date.now(),
    title: 'Deadline: COM',
    description: 'Oral Presentation',
    color: '#ef4444', // Red
    date: new Date(2025, 8, 22),
    allDay: true,
  },
  {
    id: 'it2807' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 22, 8, 30).toISOString(),
    end: new Date(2025, 8, 22, 9, 30).toISOString(),
  },
  {
    id: 'inv2807' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 22, 9, 30).toISOString(),
    end: new Date(2025, 8, 22, 10, 30).toISOString(),
  },
  {
    id: 'lunch2807' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 8, 10, 30).toISOString(),
    end: new Date(2025, 8, 8, 11, 0).toISOString(),
  },
  {
    id: 'travel12807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 8, 11, 0).toISOString(),
    end: new Date(2025, 8, 8, 12, 0).toISOString(),
  },
  {
    id: 'com2807' + Date.now(),
    title: 'COM - BA608',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 8, 12, 0).toISOString(),
    end: new Date(2025, 8, 8, 14, 30).toISOString(),
  },
  {
    id: 'it22807' + Date.now(),
    title: 'IT - TC230',  
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 22, 14, 30).toISOString(),
    end: new Date(2025, 8, 22, 17, 0).toISOString(),
  },
  {
    id: 'travel22807' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 22, 17, 0).toISOString(),
    end: new Date(2025, 8, 22, 18, 0).toISOString(),
  },
  {
    id: 'dinner2807' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 22, 18, 0).toISOString(),
    end: new Date(2025, 8, 22, 18, 30).toISOString(),
  },
  {
    id: 'study0109' + Date.now(),
    title: 'Study Session: IT',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 22),
    start: new Date(2025, 8, 22, 18, 30).toISOString(),
    end: new Date(2025, 8, 22, 23, 30).toISOString(),
  },

  // Tuesday 23/9
  
  {
    id: 'travel12907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 7, 30).toISOString(),
    end: new Date(2025, 8, 23, 8, 30).toISOString(),
  },
  {
    id: 'inv2907' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 8, 30).toISOString(),
    end: new Date(2025, 8, 23, 10, 30).toISOString(),
  },
  {
    id: 'travel22907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 10, 30).toISOString(),
    end: new Date(2025, 8, 23, 11, 30).toISOString(),
  },
  {
    id: 'lunch2907' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 11, 30).toISOString(),
    end: new Date(2025, 8, 23, 12, 0).toISOString(),
  },
  {
    id: 'study2907' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 12, 0).toISOString(),
    end: new Date(2025, 8, 23, 13, 30).toISOString(),
  },
  {
    id: 'travel32907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 13, 30).toISOString(),
    end: new Date(2025, 8, 23, 14, 30).toISOString(),
  },
  {
    id: 'mtk2907' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 14, 30).toISOString(),
    end: new Date(2025, 8, 23, 16, 30).toISOString(),
  },
  {
    id: 'travel42907' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 16, 30).toISOString(),
    end: new Date(2025, 8, 23, 17, 30).toISOString(),
  },
  {
    id: 'free2907' + Date.now(),
    title: 'Study Session: INV',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 17, 30).toISOString(),
    end: new Date(2025, 8, 23, 18, 0).toISOString(),
  },
  {
    id: 'dinner2907' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 18, 0).toISOString(),
    end: new Date(2025, 8, 23, 18, 30).toISOString(),
  },
  {
    id: 'study0209' + Date.now(),
    title: 'Study Session: INV',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 23),
    start: new Date(2025, 8, 23, 18, 30).toISOString(),
    end: new Date(2025, 8, 23, 23, 30).toISOString(),
  },

  // Wednesday 24/9

  
  {
    id: 'travel13007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 9, 30).toISOString(),
    end: new Date(2025, 8, 24, 10, 30).toISOString(),
  },
  {
    id: 'mtk3007' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 10, 30).toISOString(),
    end: new Date(2025, 8, 24, 12, 30).toISOString(),
  },
  {
    id: 'lunch3007' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 12, 30).toISOString(),
    end: new Date(2025, 8, 24, 13, 30).toISOString(),
  },
  {
    id: 'com3007' + Date.now(),
    title: 'COM - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 13, 30).toISOString(),
    end: new Date(2025, 8, 24, 16, 30).toISOString(),
  },
  {
    id: 'travel23007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 16, 30).toISOString(),
    end: new Date(2025, 8, 24, 17, 0).toISOString(),
  },
  {
    id: 'work3007' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 17, 0).toISOString(),
    end: new Date(2025, 8, 24, 20, 0).toISOString(),
  },
  {
    id: 'travel33007' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 20, 0).toISOString(),
    end: new Date(2025, 8, 24, 21, 0).toISOString(),
  },
  {
    id: 'dinner3007' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 21, 0).toISOString(),
    end: new Date(2025, 8, 24, 22, 0).toISOString(),
  },
  {
    id: 'free13007' + Date.now(),
    title: 'Study Session: MTK',
    description: '',
    color: '#4ade80', // Green
    date: new Date(2025, 8, 24),
    start: new Date(2025, 8, 24, 22, 0).toISOString(),
    end: new Date(2025, 8, 24, 23, 0).toISOString(),
  },

  // Thursday 25/9
  
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 8, 30).toISOString(),
    end: new Date(2025, 8, 25, 11, 30).toISOString(),
  },
  {
    id: 'travel13107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 11, 30).toISOString(),
    end: new Date(2025, 8, 25, 12, 30).toISOString(),
  },
  {
    id: 'mtk3107' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 12, 30).toISOString(),
    end: new Date(2025, 8, 25, 14, 30).toISOString(),
  },
  {
    id: 'it3107' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 14, 30).toISOString(),
    end: new Date(2025, 8, 25, 16, 30).toISOString(),
  },
  {
    id: 'travel23107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 16, 30).toISOString(),
    end: new Date(2025, 8, 25, 17, 0).toISOString(),
  },
  {
    id: 'work3107' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 17, 0).toISOString(),
    end: new Date(2025, 8, 25, 20, 0).toISOString(),
  },
  {
    id: 'travel33107' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 20, 0).toISOString(),
    end: new Date(2025, 8, 25, 21, 0).toISOString(),
  },
  {
    id: 'dinner3107' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 21, 0).toISOString(),
    end: new Date(2025, 8, 25, 21, 30).toISOString(),
  },
  {
    id: 'free13107' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 8, 25),
    start: new Date(2025, 8, 25, 21, 30).toISOString(),
    end: new Date(2025, 8, 25, 23, 30).toISOString(),
  },
  // Friday 26/9
  {
    id: 'deadline12609' + Date.now(),
    title: 'Deadline: MTK',
    description: 'Marketing Report',
    color: '#ef4444', // Red
    date: new Date(2025, 8, 26),
    allDay: true,
  },
  {
    id: 'deadline12609' + Date.now(),
    title: 'Deadline: IT',
    description: 'Scratch and WordPress Group Project',
    color: '#ef4444', // Red
    date: new Date(2025, 8, 26),
    allDay: true,
  },
  {
    id: 'deadline12609' + Date.now(),
    title: 'Deadline: INV',
    description: 'Progress Evaluation',
    color: '#ef4444', // Red
    date: new Date(2025, 8, 26),
    allDay: true,
  },
]
};

/**
 * Adds sample events to calendar
 * @param {Function} addEvent - The function to add events
 * @param {number} existingEventsCount - Current number of events
 */
export const addSampleEvents = (addEvent, existingEventsCount) => {
  // Only add sample events if there are no existing events
  if (existingEventsCount === 0) {
    const sampleEvents = createSampleEvents();
    sampleEvents.forEach(event => addEvent(event));
  }
};

export default { createSampleEvents, addSampleEvents };
