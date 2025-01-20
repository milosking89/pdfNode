const template = require('./components/common.template.js');
const container = require('./components/container.template.js');

const master = require('./components/masterData.template.js');
const details = require('./components/detailsData.template.js');

const header = require('./components/header.template.js');
const footer = require('./components/footer.template.js');

const { appendStyles } = require('./components/styles.templates.js');
const styles = require('../styles/styles-css.js');

const generateDocument = require('../../common/generateDocument.js');

const responseData = {
  success: false,
  content: "",
  name: ""
};

exports.execute = function (req, res, data) {
    // Logic for action1

    const outputPath = 'rzbsrb/temp/template' + '.pdf';
    const templateName  = 'Nena turnover';

    const employees = req.body;

    const headerHtml = header.template();
    const footerHtml = footer.template();

    const detailsHtml = details(employees, 30);
    const masterHtml = master.template(employees[0]);

    const pageHtml = [];

    var counter = 0;
    detailsHtml.forEach(detail => {
      let newPage = '';
      if (counter > 0) {
         newPage = container.template(headerHtml, footerHtml, `<div className="emptyMaster"></div>`, detail); 
      }
      else{
         newPage = container.template(headerHtml, footerHtml, `<div class="master">${masterHtml}</div>`, detail);
      }
      counter = counter + 1;
      pageHtml.push(newPage);
    });

    const htmlContent = template.template(pageHtml.join(''));

    const finalHtml = appendStyles(htmlContent, styles);

    const response = generateDocument(finalHtml, outputPath, templateName, res);

  };