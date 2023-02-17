const chunk = require('lodash/chunk');
const getCollectionKeyValues = require('./getCollectionKeyValues.js');

/**
 * Returns a chunked array of objects representing
 * categories with posts in each object
 * @param {Array} collection - the collection to use
 * @param {String} key - key to paginate the collection by
 * @param {Number} itemsPerPage - the number of items you want per page (defaults to 10)
 * @returns {Array} - chunked array of objects
 *
 * Returned data structure:
 *
 * - itemsPerPage is 2
 * - there are 2 items including "travel" as a value for the passed key
 * - there are 3 items including "code" as a value for the passed key
 * [
 *   {
 *     title: "travel",
 *     slug: "travel"
 *     currentPage: 1,
 *     totalItems: 2,
 *     totalPages: 1,
 *     items: [{ Object }, { Object }]
 *     slugs: {
 *       all: [Array],
 *       first: travel,
 *       last: travel,
 *       next: null,
 *       previous: null,
 *     }
 *   },
 *   {
 *     title: "code",
 *     slug: "code"
 *     currentPage: 1,
 *     totalItems: 3,
 *     totalPages: 2,
 *     items: [{ Object }, { Object }]
 *     slugs: {
 *       all: [Array],
 *       first: code,
 *       last: code/2,
 *       next: code/2,
 *       previous: null,
 *     }
 *   },
 *   {
 *     title: "code",
 *     slug: "code/2"
 *     currentPage: 2,
 *     totalItems: 3,
 *     totalPages: 2,
 *     items: [{ Object }],
 *     slugs: {
 *       all: [Array],
 *       first: code,
 *       last: code/2,
 *       next: null,
 *       previous: code,
 *     }
 *   }
 * ]
 */
const chunkCollectionByKey = (collection, key, itemsPerPage = 10) => {
  // create empty array
  let paginatedCollection = [];

  // get unique key values
  let uniqueKeyValues = getCollectionKeyValues(collection, key);

  // walk unique key values
  uniqueKeyValues.forEach((value) => {
    // get posts with value in targetted key values
    let itemsWithKeyValues = collection
      .filter((item) =>
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        item.data[key]?.includes(value.title)
      )
      .reverse();

    // chunk posts in category to create pages (lodash)
    let chunkedCollection = chunk(itemsWithKeyValues, itemsPerPage);

    // create array of slugs
    let slugs = chunkedCollection.map((item, index) => {
      return index > 0 ? `${value.slug}/${index + 1}` : value.slug;
    });

    // add formatted objects to empty array
    chunkedCollection.forEach((items, index) => {
      paginatedCollection.push({
        title: value.title,
        slug: slugs[index],
        currentPage: index + 1,
        totalPages: Math.ceil(itemsWithKeyValues.length / itemsPerPage),
        totalItems: itemsWithKeyValues.length,
        items: items,
        hrefs: slugs,
        href: {
          first: slugs[0],
          last: slugs[slugs.length - 1],
          next: slugs[index + 1] ?? null,
          previous: slugs[index - 1] ?? null,
        },
      });
    });
  });

  // return array of objects
  return paginatedCollection;
};

module.exports = {
  chunkCollectionByKey,
};
