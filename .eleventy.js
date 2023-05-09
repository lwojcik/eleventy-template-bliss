const {
  initialSetup,
  layoutAliases,
  collections,
  transforms,
  shortcodes,
  filters,
  plugins,
  constants,
  events,
} = require('./_11ty');

module.exports = function (eleventyConfig) {
  // --- Initial config

  initialSetup(eleventyConfig);

  // --- Layout aliases

  Object.entries(layoutAliases).forEach(([name, path]) => {
    eleventyConfig.addLayoutAlias(name, path);
  });

  // --- Collections

  Object.values(collections).forEach(({ name, body }) => {
    eleventyConfig.addCollection(name, body);
  });

  // --- Transformations

  Object.values(transforms).forEach(({ name, body }) => {
    eleventyConfig.addTransform(name, body);
  });

  // --- Filters

  Object.values(filters).forEach(({ name, body }) => {
    eleventyConfig.addFilter(name, body);
  });

  // --- Shortcodes

  Object.values(shortcodes).forEach(({ name, body }) => {
    eleventyConfig.addShortcode(name, body);
  });

  // --- Plugins

  Object.values(plugins).forEach(({ body, options }) => {
    eleventyConfig.addPlugin(body, options && options);
  });

  // --- After build events

  if (events.after.length > 0) {
    Object.values(events.after).forEach((afterBuildEvent) => {
      eleventyConfig.on('eleventy.after', afterBuildEvent);
    });
  }

  // --- Consolidating everything under content folder

  return {
    dir: {
      input: constants.CONTENT_FOLDER,
    },
    templateFormats: ['md', 'njk'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
