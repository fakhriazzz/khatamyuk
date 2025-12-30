import { QURAN_CONSTANTS } from './constants';

/**
 * Calculate pages per day needed to complete Quran reading
 * @param {number} days - Number of days to complete reading
 * @param {number} totalPages - Total pages (default: 604)
 * @returns {{pagesPerDay: number, totalDays: number, totalPages: number}}
 */
export const calculatePagesPerDay = (days, totalPages = QURAN_CONSTANTS.STANDARD_PAGES) => {
  const pagesPerDay = Math.ceil(totalPages / days);
  
  return {
    pagesPerDay,
    totalDays: days,
    totalPages,
  };
};

