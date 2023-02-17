/**
 * Copyright (c) 2020 Google Inc
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Transformer to set `srcset` for all images, and to create respective
// image versions in different formats and resolutions.
// Modification of original script from https://github.com/google/eleventy-high-performance-blog

// Adapted from https://github.com/muenzpraeger/eleventy-chirpy-blog-template

const { JSDOM } = require('jsdom');
const sharp = require('sharp');
const { copyFileSync, existsSync, mkdirSync, readFileSync } = require('fs');
const { MD5 } = require('crypto-js');
const { extname, join } = require('path');

const widths = [1024, 820, 640, 320];

const extension = {
  jpeg: 'jpg',
  webp: 'webp',
};

const assetsDir = join(process.cwd(), 'assets');
const buildDir = '_site';

// Map filenames to types and width, and then resize
async function srcset(filename, hash, format, metadataWidth) {
  // Create a map of all file names
  const names = await Promise.all(
    widths.map((width) => resize(filename, width, hash, format, metadataWidth))
  );
  return names.map((n, i) => `${n} ${widths[i]}w`).join(', ');
}

async function resize(filename, width, hash, format, metadataWidth) {
  const out = sizedName(filename, width, hash, format);
  if (existsSync(join(buildDir, out))) {
    return out;
  }

  const file = join(assetsDir, filename);

  const resizeWidth = metadataWidth < width ? metadataWidth : width;

  await sharp(file)
    .resize({ width: resizeWidth })
    [format]({
      quality: 80,
      reductionEffort: 6,
    })
    .toFile(buildDir + out);

  return out;
}

function sizedName(filename, width, hash, format) {
  const ext = extension[format];
  if (!ext) {
    throw new Error(`Unknown format ${format}`);
  }
  return filename.replace(
    /\.\w+$/,
    () => '-' + hash + '-' + width + 'w.' + ext
  );
}

function hashedName(filename, hash) {
  return filename.replace(extname(filename), '-' + hash + extname(filename));
}

async function setSrcset(img, src, hash, format, metadataWidth) {
  img.setAttribute('srcset', await srcset(src, hash, format, metadataWidth));
}

const processImage = async (el) => {
  const filename = el.getAttribute('src');

  if (/^(https?:\/\/|\/\/)/i.test(filename)) {
    return;
  }

  if (extname(filename.toLowerCase()) === '.svg') {
    return;
  }

  const file = join(assetsDir, filename);

  // Generate file hash
  const hash = MD5(readFileSync(file).toString());

  // Get image metadata
  const metadata = await sharp(file).metadata();

  el.setAttribute('decoding', 'async');
  el.setAttribute('loading', 'lazy');
  el.setAttribute('height', metadata.height);
  el.setAttribute('width', metadata.width);

  const doc = el.ownerDocument;
  const picture = doc.createElement('picture');
  const webp = doc.createElement('source');
  const jpeg = doc.createElement('source');

  await setSrcset(webp, filename, hash, 'webp', metadata.width);
  webp.setAttribute('type', 'image/webp');
  await setSrcset(jpeg, filename, hash, 'jpeg', metadata.width);
  jpeg.setAttribute('type', 'image/jpeg');

  picture.appendChild(webp);
  picture.appendChild(jpeg);
  el.parentElement.replaceChild(picture, el);
  picture.appendChild(el);

  copyFileSync(
    join(assetsDir, filename),
    join(buildDir, hashedName(filename, hash))
  );
};

const convert = async (rawContent, outputPath) => {
  let content = rawContent;

  const targetDirectory = join('.', buildDir, 'images');

  if (!existsSync(targetDirectory)) {
    mkdirSync(targetDirectory, { recursive: true });
  }

  if (outputPath && outputPath.endsWith('.html')) {
    const dom = new JSDOM(content);
    const images = [
      ...dom.window.document.querySelectorAll('img:not(.skip-conversion)'),
    ];

    if (images.length > 0) {
      await Promise.all(images.map((i) => processImage(i, outputPath)));
      content = dom.serialize();
    }
  }

  return content;
};

module.exports = {
  initArguments: {},
  configFunction: async (eleventyConfig = {}) => {
    eleventyConfig.addTransform('imageConversion', convert);
  },
};
