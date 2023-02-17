const removeVideosFromContent = (content) => {
  content.querySelectorAll('video').map((video) => {
    video.remove();
  });

  return content;
};

module.exports = removeVideosFromContent;
