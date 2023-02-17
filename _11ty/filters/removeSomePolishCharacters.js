const moduleName = require('../helpers/moduleName');

const CHARACTER_MAP = {
  Ł: 'L',
  Ó: 'O',
  ł: 'l',
  ó: 'o',
};

const body = (text) => {
  const characters = Object.keys(CHARACTER_MAP).join('|');
  const allAccents = new RegExp(characters, 'g');
  const matcher = (match) => CHARACTER_MAP[match];

  return text.replace(allAccents, matcher);
};

module.exports = {
  name: moduleName(__filename),
  body,
};
