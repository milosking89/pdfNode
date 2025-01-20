const template = require('./components/common.template.js');
const container = require('./components/container.template.js');

const master = require('./components/masterData.template.js');
const details = require('./components/detailsData.template.js');

const header = require('./components/header.template.js');
const logo = require('./components/logo.template.js');
const footer = require('./components/footer.template.js');

const { appendStyles } = require('./components/styles.templates.js');
const styles = require('./styles/styles-css.js');

const generateDocument = require('../../common/generateDocument.js');
const filterData = require('./components/filterData.js');

const responseData = {
  success: false,
  content: "",
  name: ""
};
 
exports.execute = function (req, res, data) {
    // Logic for action1

    const outputPath = 'rzbsrb/temp/template' + '.pdf';
    const templateName  = 'Account turnover';

    const employees = req.body;

    const headerHtml = header.template(templateName);
    const footerHtml = footer.template();
    const logoHTML = logo.template();

    const masterHtml = master.template(employees[0]);

    const filteredData = filterData(employees, ["processingDate", "orderingBeneficiaryAccountName", "transactionDesc", "debitAmount"]);
    const detailsHtml = details(filteredData, 30);

    const pageHtml = [];

    var counter = 0;
    detailsHtml.forEach(detail => {
      let newPage = '';
      if (counter > 0) {
         newPage = container.template(headerHtml, footerHtml, logoHTML, `<div className="emptyMaster"></div>`, detail); 
      }
      else{
         newPage = container.template(headerHtml, footerHtml, logoHTML, `<div class="master">${masterHtml}</div>`, detail);
      }
      counter = counter + 1;
      pageHtml.push(newPage);
    });

    const htmlContent = template.template(pageHtml.join(''));

    const finalHtml = appendStyles(htmlContent, styles);

    const response = generateDocument(finalHtml, outputPath, templateName, res);

  };