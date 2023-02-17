/* eslint-disable indent */
const { IS_PRODUCTION } = require('./constants');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const pluginEmoji = require('eleventy-plugin-emoji');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const srcSet = require('./plugins/srcset');
const externalLinks = require('eleventy-plugin-external-links');
const pluginPWA = require('eleventy-plugin-pwa-v2');

const EXTERNAL_LINKS_OPTIONS = {
  name: 'external-links',
  regex: /^(([a-z]+:)(?!\/\/offbeatbits.com)|(\/\/))/i,
  rel: 'external noopener noreferrer',
  extensions: ['.html'],
  includeDoctype: false,
};

const productionPlugins = IS_PRODUCTION
  ? [
      {
        body: srcSet,
      },
      {
        body: pluginPWA,
      },
    ]
  : [];

const plugins = [
  {
    body: EleventyHtmlBasePlugin,
  },
  {
    body: pluginRss,
  },
  {
    body: pluginEmoji,
  },
  {
    body: eleventyNavigationPlugin,
  },
  {
    body: externalLinks,
    options: EXTERNAL_LINKS_OPTIONS,
  },
];

module.exports = [...plugins, ...productionPlugins];
