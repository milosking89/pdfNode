const template = require('./components/common.template');
const page = require('./components/page.template');

const master = require('./templates/cardTurnover.master');
const details = require('./components/detailsData.template');

//const details = require('../../common/createDetail');

const header = require('./components/header.template');
const footer = require('./components/footer.template');

const { appendStyles } = require('./components/styles.js');

const generateDocument = require('../../common/generateDocument');

const responseData = {
  success: false,
  content: "",
  name: ""
};

exports.execute = function (req, res, data) {
    // Logic for action1

    const outputPath = 'rzbsrb/temp/template' + '.pdf';
    const templateName  = 'Card turnover';

    const employees = req;

    const headerHtml = header.template();
    const footerHtml = footer.template();

    const detailsHtml = details(employees, 35);
    const masterHtml = master.template(employees[0]);

    const pageHtml = [];

    var counter = 0;
    detailsHtml.forEach(detail => {
      counter = counter + 1;
      let newPage = '';
      if (counter > 1) {
         newPage = page.template(headerHtml, footerHtml, '<div stlye="height: 300px"></div>', detail); 
      }
      else{
         newPage = page.template(headerHtml, footerHtml, masterHtml, detail);
      }
      pageHtml.push(newPage);
    });

    const htmlContent = template.template(pageHtml.join(''));

    const styles = '.page { background: white; display: block; margin: 0 auto; margin-bottom: 8.5em; width: 21cm; padding: 5em 30px 0 30px; }; .details {border: 1px solid black}; .tableItem { width 200px; font-size: 16px;}; .master { font-size: 20px; font-weigth: bold }';

    const finalHtml = appendStyles(htmlContent, styles);

    console.log(finalHtml);

    const response = generateDocument(finalHtml, outputPath, templateName, res);

  };