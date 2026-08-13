/**
 * @file types.js
 * @description Shared JSDoc type definitions for webinar data entries.
 * @module data/webinars/types
 */

/**
 * @typedef {Object} WebinarEntry
 * @property {"video"|"image"} mediaType
 * @property {string} mediaSrc - YouTube embed URL, or image path if mediaType is "image"
 * @property {string} title
 * @property {string} date - DD/MM/YYYY
 * @property {string} presenter
 * @property {string[]} notes - one or more caption lines (episode label, announcements, etc.)
 */

export {};