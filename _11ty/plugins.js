/* eslint-disable indent */
const { IS_PRODUCTION } = require('./constants');
const siteConfig = require('../content/_data/siteConfig');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const pluginEmoji = require('eleventy-plugin-emoji');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const srcSet = require('./plugins/srcset');
const pluginPWA = require('eleventy-plugin-pwa-v2');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const faviconsPlugin = require('eleventy-plugin-gen-favicons');

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
  {
    body: faviconsPlugin,
    options: {
      manifestData: {
        name: siteConfig.site.title,
        lang: siteConfig.site.language,
        short_name: siteConfig.site.title,
        description: siteConfig.site.description,
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: siteConfig.manifestJson.themeColor,
        background_color: siteConfig.manifestJson.backgroundColor,
        orientation: 'any',
      },
    }
  },
];

module.exports = [...plugins, ...productionPlugins];
