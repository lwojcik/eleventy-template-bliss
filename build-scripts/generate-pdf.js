const path = require('path');
const fs = require('fs');
const html_to_pdf = require('html-pdf-node');
const siteConfig = require('../content/_data/siteConfig');

const rootPath = '_site';
const pdfContentFolder = 'pdf';
const pdfContentFile = 'pdf-content.html';

const contentFolder = path.join(rootPath, pdfContentFolder);
const contentPath = path.join(contentFolder, pdfContentFile);
const downloadFolder = 'download';
const downloadPath = path.join(rootPath, downloadFolder);
const outputFilePath = path.join(downloadPath, siteConfig.pdf.fileName);

const generatePdf = async () => {
  const file = {
    url: `file:${path.join(process.cwd(), contentPath)}`,
  };

  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  const options = {
    format: siteConfig.pdf.format,
    path: outputFilePath,
    margin: {
      top: '2cm',
      bottom: '2cm',
      left: '2.5cm',
      right: '2.5cm',
    },
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<div/>',
    footerTemplate:
      '<div style="text-align: center;width: 297mm;font-size: 10px;"><span>- <span class="pageNumber"></span> -</span></div>',
  };

  const deleteSourceAfterGeneration = () => {
    fs.rmSync(contentFolder, { recursive: true, force: true });
  };

  html_to_pdf.generatePdf(file, options, deleteSourceAfterGeneration);
};

generatePdf();
