const slugify = require('slugify');
const { SLUGIFY_CONFIG } = require('../constants');
/**
 * Transforms a string into a slug
 * @param {String} str string to slugify
 * @returns slugified string
 */
const slugifyString = (str) => slugify(str, SLUGIFY_CONFIG);

module.exports = slugifyString;
