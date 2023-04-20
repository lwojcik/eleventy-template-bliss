const {
  initialSetup,
  layoutAliases,
  collections,
  transforms,
  shortcodes,
  filters,
  plugins,
  constants,
} = require('./_11ty');
const fs = require('fs');
const Image = require('@11ty/eleventy-img');

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

  // --- After build

  eleventyConfig.on('afterBuild', () => {
    const socialPreviewImagesDir = '_site/images/share/';
    fs.readdir(socialPreviewImagesDir, function (_err, files) {
      if (files.length > 0) {
        files.forEach(function (filename) {
          if (filename.endsWith('.svg')) {
            const imageUrl = socialPreviewImagesDir + filename;
            Image(imageUrl, {
              formats: ['jpeg'],
              outputDir: './' + socialPreviewImagesDir,
              filenameFormat: () => {
                const outputFilename = filename.substring(
                  0,
                  filename.length - 4
                );

                return `${outputFilename}.jpg`;
              },
            });
          }
        });
      }
    });
  });

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
