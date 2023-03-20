/* eslint-disable indent */
const { IS_PRODUCTION } = require('./constants');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const pluginEmoji = require('eleventy-plugin-emoji');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const srcSet = require('./plugins/srcset');
const pluginPWA = require('eleventy-plugin-pwa-v2');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const productionPlugins = IS_PRODUCTION
  ? [
      {
        body: srcSet,
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
    body: pluginPWA,
  },
  {
    body: syntaxHighlight,
  },
];

module.exports = [...plugins, ...productionPlugins];
