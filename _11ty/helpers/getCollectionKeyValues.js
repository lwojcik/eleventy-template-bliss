const slugifyString = require('./slugifyString');
const siteConfig = require('../../content/_data/siteConfig');

const { language, options } = siteConfig.localeSort;

/**
 * Returns array of unique key values for passed collection
 * @param {Array} collection - the collection to search
 * @param {String} key - the key for which we need unique values
 * @returns {Array} unique values corresponding to passed key
 */

const uniqueKeyValues = (collection, key) => {
  // get all used key values
  let collectionKeyValues = collection
    .filter((item) => key in item.data)
    .flatMap((item) => item.data[key])
    .sort((a, b) => a.localeCompare(b, language, options));

  // dedupe
  let uniqueValues = [...new Set(collectionKeyValues)];

  // format and return array of value objects
  let valuesObjects = uniqueValues.map((value) => {
    let postsWithValue = collection.filter((item) =>
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
      item.data[key]?.includes(value)
    );

    return {
      title: value,
      slug: slugifyString(value),
      totalItems: postsWithValue.length,
    };
  });

  return valuesObjects;
};

module.exports = uniqueKeyValues;
