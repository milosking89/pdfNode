
async function generateDocument(htmlContent, outputPath, res) {
    const _createDocument = require('./common/createDocument');

    try {
      const result = await _createDocument(htmlContent, outputPath);
      // Code here will wait until somePromise resolves
      res.send(JSON.stringify(result))

    } catch (error) {
      console.log(error);
    }
  }
