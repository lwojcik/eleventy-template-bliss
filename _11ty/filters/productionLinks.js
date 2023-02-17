const { parse } = require('node-html-parser');
const moduleName = require('../helpers/moduleName');
const siteConfig = require('../../content/_data/siteConfig');

const body = (content) => {
  const root = parse(content);
  const links = root.querySelectorAll('a');

  if (links) {
    links.forEach((link) => {
      const href = link.getAttribute('href');

      if (href && href.startsWith('/')) {
        const newHref = new URL(href, siteConfig.site.url);
        link.setAttribute('href', newHref);
      }
    });

    return root.toString();
  }
  return content;
};

module.exports = {
  name: moduleName(__filename),
  body,
};
