const template = require('./components/common.template.js');
const container = require('./components/container.template.js');

const master = require('./custom/accountTurnover/masterData.template.js');
const details = require('./custom/accountTurnover/detailsData.template.js');
const header = require('./custom/accountTurnover/header.template.js');
const svgQR = require('./custom/accountTurnover/qrCode.template.js');

const { appendStyles } = require('./components/styles.templates.js');
const commonStyles = require('./styles/styles-css.js');

const customStyles = require('./custom/accountTurnover/styles-css.js');

const generateDocument = require('../../../common/generateDocument.js');

exports.execute = function (req, res, data) {
    // Logic for action1

    const outputPath = 'temp/template-' + Math.floor(100000 + Math.random() * 900000) + '.pdf';
    const templateName  = 'Account Turnover';

    const headerHtml = header.template();
    const svgHtml = svgQR.template();

    var masterHtml = '';
    var masterData = req.body[0];
    masterHtml = master.template(masterData[0], svgHtml);

    var detailsData = req.body[1]; 
    var detailsArray = details(detailsData); 

    const pageArray = [];

    var counter = 0;
    detailsArray.forEach(detail => {
      let newPage = '';

      if (counter > 0) {
         newPage = container.template(`<div></div>`, `<div></div>`, `<div class="details-wrapper">${detail}</div>`); 
      }
      else{
         newPage = container.template(headerHtml, `<div class="master">${masterHtml}</div>`, `<div class="details-wrapper">${detail}</div>`);
      }

      counter = counter + 1;
      pageArray.push(newPage);
    });

    const htmlContent = template.template(pageArray.join(''));

    const htmlContentWithStyle = appendStyles(htmlContent, commonStyles, customStyles);

    var pageHeader = `<div style="font-size:10px; width:100%; text-align:center;"><span>Custom Header - Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`

    generateDocument(htmlContentWithStyle, outputPath, templateName, res, pageHeader);

  };
