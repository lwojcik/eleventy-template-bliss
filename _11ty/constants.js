const siteConfig = require('../content/_data/siteConfig');

module.exports = {
  EXCLUDED_TAGS: [
    'all',
    'post',
    'page',
    'publishedItems',
    'publishedPages',
    'publishedPosts',
    'publishedEnglishPosts',
    'publishedInEnglishOrForcedPosts',
    'publishedPolishPosts',
    'publishedPages',
    'tagList',
  ],
  ASSETS_FOLDER: 'assets',
  SCRIPTS_FOLDER: 'src/scripts',
  CONTENT_FOLDER: 'content',
  BUILD_FOLDER: '_site',
  PDF_CONTENT_PATH: 'pdf/pdf-content.html',
  POST_COLLECTION_TAG_NAME: 'post',
  PAGE_COLLECTION_TAG_NAME: 'page',
  POSTS_PER_TAG_PAGE: siteConfig.tags.postsPerPage,
  IS_PRODUCTION: process.env.NODE_ENV !== 'development',
  SLUGIFY_CONFIG: {
    replacement: '-',
    lower: true,
    strict: true,
  },
};
