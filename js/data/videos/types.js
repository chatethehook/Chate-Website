/**
 * @file types.js
 * @description Shared JSDoc type definitions for video data entries.
 * @module data/videos/types
 */

/**
 * @typedef {Object} VideoEntry
 * @property {string} videoSrc - YouTube embed URL
 * @property {string} title
 * @property {string} rolePrefix - "Written by" or "Interviewing"
 * @property {string} personName - the featured student's name
 * @property {?string} secondaryLine - "Read by someone" / "Interviewed by someone", or null
 * @property {string[]} notes - one or more caption lines (series name with episode number, etc.)
 */

export {};