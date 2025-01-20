const template = require('./components/common.template');
const container = require('./components/container.template.js');

const master = require('./components/masterData.template');
const details = require('./components/detailsData.template');

const header = require('./components/header.template');
const footer = require('./components/footer.template');

const { appendStyles } = require('./components/styles.templates.js');
const styles = require('../styles/styles-css.js');

const generateDocument = require('../../common/generateDocument');

const responseData = {
  success: false,
  content: "",
  name: ""
};

exports.execute = function (req, res, data) {
    // Logic for action1

    const outputPath = 'rzbsrb/temp/template' + '.pdf';
    const templateName  = 'Account turnover';


    const employees = [
      {id: 1, name: 'MilosKing', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
      {id: 1, name: 'Alice', country: 'Austria', test: 'RKC', surname: 'Demo', city: 'View', amount: '200.00'},
    ];

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