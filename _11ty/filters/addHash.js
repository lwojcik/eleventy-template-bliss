const { DateTime } = require('luxon');
const moduleName = require('../helpers/moduleName');

const body = (url) => {
  const [urlPart, paramPart] = url.split('?');
  const params = new URLSearchParams(paramPart || '');
  params.set('v', DateTime.local().toFormat('X'));
  return `${urlPart}?${params}`;
};

module.exports = {
  name: moduleName(__filename),
  body,
};
