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
  // 23/6 - 29/6 _____________________________________
  // Monday 23/6
  {
    id: 'it12306' + Date.now(),
    title: 'IT - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 8, 30).toISOString(),
    end: new Date(2025, 5, 23, 9, 30).toISOString(),
  },
  {
    id: 'inv12306' + Date.now(),
    title: 'INV - Online Lecture',
    description: 'Online session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 9, 30).toISOString(),
    end: new Date(2025, 5, 23, 11, 0).toISOString(),
  },
  {
    id: 'lunch2306' + Date.now(),
    title: 'Lunch', 
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 11, 0).toISOString(),
    end: new Date(2025, 5, 23, 11, 30).toISOString(),
  },
  {
    id: 'travel12306' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 11, 30).toISOString(),
    end: new Date(2025, 5, 23, 12, 30).toISOString(),
  },
  {
    id: 'com2306' + Date.now(),
    title: 'COM - BA 608',
    description: 'In-person session',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 12, 30).toISOString(),
    end: new Date(2025, 5, 23, 15, 0).toISOString(),
  },
  {
    id: 'it22306' + Date.now(),
    title: 'IT - TC230',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 15, 0).toISOString(),
    end: new Date(2025, 5, 23, 17, 30).toISOString(),
  },
  {
    id: 'travel22306' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 17, 30).toISOString(),
    end: new Date(2025, 5, 23, 18, 30).toISOString(),
  },
  {
    id: 'dinner2306' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 18, 30).toISOString(),
    end: new Date(2025, 5, 23, 19, 0).toISOString(),
  },
  {
    id: 'free' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 19, 0).toISOString(),
    end: new Date(2025, 5, 23, 23, 30).toISOString(),
  },

  // Tuesday 24/6

  {
    id: 'travel12406' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7',   // Purple
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 7, 30).toISOString(),
    end: new Date(2025, 5, 24, 8, 30).toISOString(),
  },
  {
    id: 'inv12406' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6',   // Blue
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 8, 30).toISOString(),
    end: new Date(2025, 5, 24, 10, 30).toISOString(),
  },
  {
    id: 'travel22406' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7',   // Purple
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 10, 30).toISOString(),
    end: new Date(2025, 5, 24, 11, 30).toISOString(),
  },
  {
    id: 'lunch2406' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 11, 30).toISOString(),
    end: new Date(2025, 5, 24, 12, 0).toISOString(),
  },
  {
    id: 'free12406' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 12, 0).toISOString(),
    end: new Date(2025, 5, 24, 13, 30).toISOString(),
  },
  {
    id: 'travel32406' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 13, 30).toISOString(),
    end: new Date(2025, 5, 24, 14, 30).toISOString(),
  },
  {
    id: 'mtk2406' + Date.now(),
    title: 'MTK - TC231',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 14, 30).toISOString(),
    end: new Date(2025, 5, 24, 16, 30).toISOString(),
  },
  {
    id: 'travel42406' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 16, 30).toISOString(),
    end: new Date(2025, 5, 24, 17, 30).toISOString(),
  },
  {
    id: 'dinner2306' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 23),
    start: new Date(2025, 5, 23, 18, 30).toISOString(),
    end: new Date(2025, 5, 23, 19, 0).toISOString(),
  },
  {
    id: 'free22406' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 24),
    start: new Date(2025, 5, 24, 17, 30).toISOString(),
    end: new Date(2025, 5, 24, 23, 30).toISOString(),
  },

  // Wednesday 25/6

  {
    id: 'travel12506' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 9, 30).toISOString(),
    end: new Date(2025, 5, 25, 10, 30).toISOString(),
  },
  {
    id: 'mtk2506' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 10, 30).toISOString(),
    end: new Date(2025, 5, 25, 12, 30).toISOString(),
  },
  {
    id: 'lunch2506' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 12, 30).toISOString(),
    end: new Date(2025, 5, 25, 13, 30).toISOString(),
  },
  {
    id: 'com2506' + Date.now(),
    title: 'COM - TC332',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 13, 30).toISOString(),
    end: new Date(2025, 5, 25, 16, 30).toISOString(),
  },
  {
    id: 'travel22506' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 16, 30).toISOString(),
    end: new Date(2025, 5, 25, 17, 0).toISOString(),
  },
  {
    id: 'work2506' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 17, 0).toISOString(),
    end: new Date(2025, 5, 25, 20, 0).toISOString(),
  },
  {
    id: 'travel32506' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 20, 0).toISOString(),
    end: new Date(2025, 5, 25, 21, 0).toISOString(),
  },
  {
    id: 'dinner2506' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 21, 0).toISOString(),
    end: new Date(2025, 5, 25, 21, 30).toISOString(),
  },
  {
    id: 'free12506' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 25),
    start: new Date(2025, 5, 25, 21, 30).toISOString(),
    end: new Date(2025, 5, 25, 23, 30).toISOString(),
  },

  // Thursday 26/6

  {
    id: 'breakfast2606' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 9, 30).toISOString(),
    end: new Date(2025, 5, 26, 10, 0).toISOString(),
  },
  {
    id: 'free12606' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 10, 0).toISOString(),
    end: new Date(2025, 5, 26, 11, 30).toISOString(),
  },
  {
    id: 'travel12606' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 11, 30).toISOString(),
    end: new Date(2025, 5, 26, 12, 30).toISOString(),
  },
  {
    id: 'mtk2606' + Date.now(),
    title: 'MTK - TC331',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 12, 30).toISOString(),
    end: new Date(2025, 5, 26, 14, 30).toISOString(),
  },
  {
    id: 'it2606' + Date.now(),
    title: 'IT - TB220',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 14, 30).toISOString(),
    end: new Date(2025, 5, 26, 16, 30).toISOString(),
  },
  {    
    id: 'travel22506' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 16, 30).toISOString(),
    end: new Date(2025, 5, 26, 17, 0).toISOString(),
  },
  {
    id: 'work2506' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 17, 0).toISOString(),
    end: new Date(2025, 5, 26, 20, 0).toISOString(),
  },
  {
    id: 'travel32506' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 20, 0).toISOString(),
    end: new Date(2025, 5, 26, 21, 0).toISOString(),
  },
  {
    id: 'dinner2606' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 21, 0).toISOString(),
    end: new Date(2025, 5, 26, 21, 30).toISOString(),
  },
  {
    id: 'free12506' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 26),
    start: new Date(2025, 5, 26, 21, 30).toISOString(),
    end: new Date(2025, 5, 26, 23, 30).toISOString(),
  },

  // Friday 27/6

  {
    id: 'travel12706' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 9, 30).toISOString(),
    end: new Date(2025, 5, 27, 10, 30).toISOString(),
  },
  {
    id: 'com2706' + Date.now(),
    title: 'COM - ATC427',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 10, 30).toISOString(),
    end: new Date(2025, 5, 27, 12, 30).toISOString(),
  },
  {
    id: 'lunch2706' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 12, 30).toISOString(),
    end: new Date(2025, 5, 27, 13, 30).toISOString(),
  },
  {
    id: 'inv2706' + Date.now(),
    title: 'INV - TC232',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 13, 30).toISOString(),
    end: new Date(2025, 5, 27, 15, 30).toISOString(),
  },
  {
    id: 'it2706' + Date.now(),
    title: 'IT - TA110',
    description: '',
    color: '#3b82f6', // Blue
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 15, 30).toISOString(),
    end: new Date(2025, 5, 27, 16, 30).toISOString(),
  },
  {
    id: 'travel22706' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 16, 30).toISOString(),
    end: new Date(2025, 5, 27, 17, 0).toISOString(),
  },
  {
    id: 'work2706' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 17, 0).toISOString(),
    end: new Date(2025, 5, 27, 20, 0).toISOString(),
  },
  {
    id: 'travel32706' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 20, 0).toISOString(),
    end: new Date(2025, 5, 27, 21, 0).toISOString(),
  },
  {
    id: 'dinner2706' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 21, 0).toISOString(),
    end: new Date(2025, 5, 27, 21, 30).toISOString(),
  },
  {
    id: 'free2706' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 27),
    start: new Date(2025, 5, 27, 21, 30).toISOString(),
    end: new Date(2025, 5, 27, 23, 30).toISOString(),
  },

  // Saturday 28/6

  {
    id: 'breakfast2806' + Date.now(),
    title: 'Breakfast',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 9, 30).toISOString(),
    end: new Date(2025, 5, 28, 10, 0).toISOString(),
  },
  {
    id: 'free12806' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 10, 0).toISOString(),
    end: new Date(2025, 5, 28, 12, 30).toISOString(),
  },
  {
    id: 'lunch2806' + Date.now(),
    title: 'Lunch',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 12, 30).toISOString(),
    end: new Date(2025, 5, 28, 13, 30).toISOString(),
  },
  {
    id: 'free22806' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 13, 30).toISOString(),
    end: new Date(2025, 5, 28, 16, 0).toISOString(),
  },
  {
    id: 'travel12806' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 16, 0).toISOString(),
    end: new Date(2025, 5, 28, 17, 0).toISOString(),
  },
  {
    id: 'work2806' + Date.now(),
    title: 'Work',
    description: '',
    color: '#737373', // Gray
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 17, 0).toISOString(),
    end: new Date(2025, 5, 28, 20, 0).toISOString(),
  },
  {
    id: 'travel22806' + Date.now(),
    title: 'Travel',
    description: '',
    color: '#a855f7', // Purple
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 20, 0).toISOString(),
    end: new Date(2025, 5, 28, 21, 0).toISOString(),
  },
  {
    id: 'dinner2806' + Date.now(),
    title: 'Dinner',
    description: '',
    color: '#f97316', // Orange
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 21, 0).toISOString(),
    end: new Date(2025, 5, 28, 21, 30).toISOString(),
  },
  {
    id: 'free12806' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 28),
    start: new Date(2025, 5, 28, 21, 30).toISOString(),
    end: new Date(2025, 5, 28, 23, 30).toISOString(),
  },

  // Sunday 29/6

  {
    id: 'free12906' + Date.now(),
    title: 'Freetime',
    description: '',
    color: '#fde047', // Yellow
    date: new Date(2025, 5, 29),
    allDay: true
  },

  //30/6 - 6/7 _______________________________________
  // Monday 30/6

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
