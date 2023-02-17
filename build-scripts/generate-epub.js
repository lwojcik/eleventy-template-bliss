const siteConfig = require('../content/_data/siteConfig');
const Epub = require('epub-gen');
const fs = require('fs');
const path = require('path');

const rootPath = '_site';
const contentFolder = path.join(rootPath, 'epub');
const contentPath = path.join(contentFolder, 'content.json');
const downloadFolder = 'download';
const downloadPath = path.join(rootPath, downloadFolder);
const outputFilePath = path.join(downloadPath, siteConfig.epub.fileName);

const generateEpub = async () => {
  const content = fs.readFileSync(contentPath, {
    encoding: 'utf8',
    flag: 'r',
    css: 'body{font-family: Georgia, Cambria, Times New Roman, Times, serif}',
  });

  const epubSettings = {
    title: siteConfig.epub.title,
    author: siteConfig.epub.author,
    publisher: siteConfig.epub.author,
    cover: path.join(process.cwd(), siteConfig.epub.cover),
    fileName: siteConfig.epub.fileName,
  };

  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  await new Epub(
    {
      ...epubSettings,
      content: JSON.parse(content),
    },
    outputFilePath
  );

  fs.rmSync(contentFolder, { recursive: true, force: true });
};

generateEpub();
