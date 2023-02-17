const moduleName = require('../helpers/moduleName');

const body = (str) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');

module.exports = {
  name: moduleName(__filename),
  body,
};
