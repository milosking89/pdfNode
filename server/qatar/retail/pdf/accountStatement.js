const template = require('./components/common.template.js');
const container = require('./components/container.template.js');

const master = require('./components/masterData.template.js');
const details = require('./components/detailsData.template.js');
const header = require('./components/header.template.js');
const pageHeader = require('./custom/accountStatement/pageHeader.template.js');
const customStyles = require('./custom/accountStatement/styles-css.js');

const { appendStyles } = require('./components/styles.templates.js');
const commonStyles = require('./styles/styles-css.js');

const generateDocument = require('../../../common/generateDocument.js');

exports.execute = function (req, res, data) {
    // Logic for action1

    const outputPath = 'temp/template' + '.pdf';
    const templateName  = 'Account Turnover';

    const headerHtml = header.template();
    const pageHeaderHtml = pageHeader.template();

    var masterHtml = '';
    var masterData = req.body[0];
    masterHtml = master.template(masterData[0], `<div></div>`);

    var detailsData = req.body[1]; 
    var detailsArray = details(detailsData); 

    const pageArray = [];

    var counter = 0;
    detailsArray.forEach(detail => {
      let newPage = '';

      if (counter > 0) {
         newPage = container.template(`<div></div>`, `<div class="emptyArea"></div>`, `<div class="details-wrapper">${detail}</div>`); 
      }
      else{
         newPage = container.template(headerHtml, `<div class="master">${masterHtml}</div>`, `<div class="details-wrapper">${detail}</div>`);
      }

      counter = counter + 1;
      pageArray.push(newPage);
    });

    const htmlContent = template.template(pageArray.join(''));

    const htmlContentWithStyle = appendStyles(htmlContent, commonStyles, customStyles);

    generateDocument(htmlContentWithStyle, outputPath, templateName, res, pageHeaderHtml);

  };
