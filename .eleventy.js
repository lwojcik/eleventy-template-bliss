const {
  initialSetup,
  layoutAliases,
  collections,
  shortcodes,
  filters,
  plugins,
  constants,
  events,
} = require('./_11ty');
const minifyHTML = require('./_11ty/transforms/minifyHTML');
const minifyJS = require('./_11ty/transforms/minifyJS');
const minifyJSON = require('./_11ty/transforms/minifyJSON');
const minifyXML = require('./_11ty/transforms/minifyXML');

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

  eleventyConfig.addTransform('minifyHTML', minifyHTML);
  eleventyConfig.addTransform('minifyJSON', minifyJSON);
  eleventyConfig.addTransform('minifyXML', minifyXML);
  eleventyConfig.addTransform('minifyJS', minifyJS);

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
