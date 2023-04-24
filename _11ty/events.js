const fs = require('fs');
const path = require('path');
const Image = require('@11ty/eleventy-img');

const SOCIAL_PREVIEW_IMAGES_DIR = path.join('_site', 'images', 'share');
const OUTPUT_IMAGE_EXTENSION = 'jpg';

const afterBuildEvents = [
  {
    body: () => {
      const files = fs.readdirSync(SOCIAL_PREVIEW_IMAGES_DIR);

      if (files && files.length > 0) {
        files.forEach(async (filename) => {
          if (filename.endsWith('.svg')) {
            const imageUrl = path.join(SOCIAL_PREVIEW_IMAGES_DIR, filename);

            console.log(imageUrl);

            await Image(imageUrl, {
              formats: ['jpeg'],
              outputDir: path.join('.', SOCIAL_PREVIEW_IMAGES_DIR),
              filenameFormat: () => {
                const outputFilename = filename.substring(
                  0,
                  filename.length - 4
                );

                return `${outputFilename}.${OUTPUT_IMAGE_EXTENSION}`;
              },
            });

            // we no longer need SVG files so let's clean them

            fs.unlinkSync(imageUrl);
          }
        });
      }
    },
  },
];

module.exports = {
  after: afterBuildEvents,
};
