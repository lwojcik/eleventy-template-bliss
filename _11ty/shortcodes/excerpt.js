const moduleName = require('../helpers/moduleName');

const body = (article) => {
  if (!Object.prototype.hasOwnProperty.call(article, 'templateContent')) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  const content = article.templateContent;
  const excerpt = content.slice(0, content.indexOf('\n'));

  return excerpt.replace(/(<([^>]+)>)/gi, '');
};

module.exports = {
  name: moduleName(__filename),
  body,
};
