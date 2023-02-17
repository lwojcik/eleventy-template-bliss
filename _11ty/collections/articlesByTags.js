// Paginated collection by tags
// Based on briliant solution by Jérôme Coupé
// https://github.com/jeromecoupe/11ty-paginate-taxonomies

const moduleName = require('../helpers/moduleName');
const {
  POSTS_PER_TAG_PAGE,
  POST_COLLECTION_TAG_NAME,
} = require('../constants');
const { chunkCollectionByKey } = require('../helpers/chunkCollectionByKey');

const collectionKey = 'tags';

module.exports = {
  name: moduleName(__filename),
  body: (collectionApi) => {
    const taggedPosts = collectionApi.getFilteredByTag(
      POST_COLLECTION_TAG_NAME
    );

    return chunkCollectionByKey(taggedPosts, collectionKey, POSTS_PER_TAG_PAGE);
  },
};
