const requireDir = require('require-dir');
const initialSetup = require('./initialSetup');
const layoutAliases = require('./layoutAliases');
const collections = requireDir('./collections');
const transforms = requireDir('./transforms');
const shortcodes = requireDir('./shortcodes');
const filters = requireDir('./filters');
const plugins = require('./plugins');
const constants = require('./constants');
const events = require('./events');

module.exports = {
  initialSetup,
  layoutAliases,
  collections,
  transforms,
  shortcodes,
  filters,
  plugins,
  constants,
  events,
};
