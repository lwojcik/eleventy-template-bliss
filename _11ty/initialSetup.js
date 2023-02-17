const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItFootnote = require('markdown-it-footnote');
const slugify = require('slugify');
const {
  ASSETS_FOLDER,
  SCRIPTS_FOLDER,
  SLUGIFY_CONFIG,
} = require('./constants');

const MARKDOWN_IT_OPTIONS = {
  html: true,
  typographer: true,
  tabIndex: false,
};

const MARKDOWN_IT_ANCHOR_OPTIONS = {
  slugify: (s) => slugify(s, SLUGIFY_CONFIG),
  tabIndex: false,
  decamelize: false,
};

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary(
    'md',
    markdownIt(MARKDOWN_IT_OPTIONS)
      .use(markdownItAnchor, MARKDOWN_IT_ANCHOR_OPTIONS)
      .use(markdownItFootnote)
  );

  eleventyConfig.addPassthroughCopy({
    [ASSETS_FOLDER]: './',
    [SCRIPTS_FOLDER]: './js',
  });
};
