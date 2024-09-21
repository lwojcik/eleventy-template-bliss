const moduleName = require('../helpers/moduleName');

const body = (num) => {
  if (num < 100) {
    return Math.round(num / 10) * 10;
  } else if (num < 10000) {
    return Math.round(num / 100) * 100;
  } else if (num < 100000) {
    return Math.round(num / 1000) * 1000;
  } else if (num < 1000000) {
    return Math.round(num / 10000) * 10000;
  } else {
    return Math.round(num / 100000) * 100000;
  }
};

module.exports = {
  name: moduleName(__filename),
  body,
};
