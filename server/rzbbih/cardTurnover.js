const fs = require('fs');
const pdf = require('html-pdf');
const pdf2base64 = require('pdf-to-base64');

const template = require('./template/cardTurnover.template');

const responseData = {
  Success: false,
  Content: "",
  Name: ""
};

exports.execute = async function (req, res, data) {
    // Logic for action1

    var newDate = new Date().toJSON();
    const outputPath = 'rzbbih/temp/template.pdf';

        const reportData = [
          {id: 1, name: 'Alice', country: 'Austria', value: 10000},
          {id: 2, name: 'Bobby Hadz', country: 'Belgium',value: 2000},
          {id: 3, name: 'Carl', country: 'Canada', value: 50050},
          {id: 4, name: 'Alice', country: 'Austria', value: 10000},
          {id: 5, name: 'Bobby Hadz', country: 'Belgium',value: 2000},
          {id: 6, name: 'Carl', country: 'Canada', value: 50050}
        ];

        const subreportData = [
          {id: 1, name: 'Rasko', surname: 'Kordic'},
          {id: 2, name: 'Slavenko', surname: 'Miljic'},
          {id: 3, name: 'Zoran', surname: 'Milanov'},
        ];

        //report part
        const _createTable = require('./common/createTable');
        const tableHTML = _createTable(reportData);
        const tableResult = `<div>${tableHTML}</div>`;

        const htmlContent = template.template(data, tableResult); 

        generatePDF(htmlContent, outputPath, res).then(
          console.log("Success but then.....")
        )
        .catch((error) => console.error('Error generating PDF:', error));

  };

  async function generatePDF(htmlContent, outputPath, res) {
    const _createDocument = require('./common/createDocument');

    try {
      const result = await _createDocument(htmlContent, outputPath);
      // Code here will wait until somePromise resolves
      res.send(JSON.stringify(result))

    } catch (error) {
      console.log(error);
    }
  }
