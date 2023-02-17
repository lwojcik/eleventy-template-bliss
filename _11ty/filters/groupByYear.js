const { DateTime } = require('luxon');
const moduleName = require('../helpers/moduleName');

const body = (postList) => {
  const yearPosts = {};
  let ret = [];

  postList.forEach((post) => {
    const year = DateTime.fromJSDate(post.date).year;
    yearPosts[year] = yearPosts[year] || [];
    yearPosts[year].push(post);
  });

  const sortedYears = Object.keys(yearPosts).sort().reverse();

  sortedYears.forEach((year) => {
    ret.push({
      year,
      posts: yearPosts[year],
    });
  });

  return ret;
};

module.exports = {
  name: moduleName(__filename),
  body,
};
