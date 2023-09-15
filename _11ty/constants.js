const siteConfig = require('../content/_data/siteConfig');

module.exports = {
  EXCLUDED_TAGS: [
    'all',
    'post',
    'page',
    'publishedItems',
    'publishedPages',
    'publishedPosts',
    'publishedPages',
    'tagList',
  ],
  ASSETS_FOLDER: 'assets',
  SCRIPTS_FOLDER: 'src/scripts',
  CONTENT_FOLDER: 'content',
  BUILD_FOLDER: '_site',
  POST_COLLECTION_TAG_NAME: 'post',
  PAGE_COLLECTION_TAG_NAME: 'page',
  POSTS_PER_TAG_PAGE: siteConfig.tags.postsPerPage,
  IS_PRODUCTION: process.env.ELEVENTY_ENV === 'production',
  SLUGIFY_CONFIG: {
    replacement: '-',
    lower: true,
    strict: true,
  },
};
