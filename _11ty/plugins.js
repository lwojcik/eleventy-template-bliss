const { IS_PRODUCTION } = require('./constants');
const siteConfig = require('../content/_data/siteConfig');
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

const pwaPluginConfig = siteConfig.enablePWA
  ? [
      {
        body: pluginPWA,
        options: {
          cacheId: siteConfig.site.title,
          runtimeCaching: [
            {
              urlPattern: /\/$/,
              handler: 'NetworkFirst',
            },
            {
              urlPattern: /\.html$/,
              handler: 'NetworkFirst',
            },
            {
              urlPattern:
                /^.*\.(jpg|png|mp4|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,
              handler: 'StaleWhileRevalidate',
            },
          ],
        },
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
    body: syntaxHighlight,
  },
];

module.exports = [...plugins, ...pwaPluginConfig, ...productionPlugins];
