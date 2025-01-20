module.exports = function (htmlContent,outputPath, name, res, headerInfo) {

  //const _createDocument = require('./lib/Html2Pdf');
  const _createDocument = require('./lib/Puppeteer');

    try {
      const result = _createDocument(htmlContent, outputPath, name, res, headerInfo);
    } catch (error) {
      console.log(error);
    }
};
