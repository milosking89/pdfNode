const template = require('./components/common.template.js');
const container = require('./components/container.template.js');

const master = require('./components/cardTurnover/masterData.template.js');
const details = require('./components/detailsData.template.js');
const header = require('./components/header.template.js');
const footer = require('./components/footer.template.js');

const { appendStyles } = require('./components/styles.templates.js');
const commonStyles = require('./styles/styles-css.js');

const generateDocument = require('../../../common/generateDocument.js');
const filterData = require('../../../common/details/filterData.js');

const customStyles = `
.master {
  width: 100%;
  min-height: 8cm;
}
.detailFirstPage {
  height: 20cm;
}
.detailAnyPage {
  min-height: 29cm;
}`

 
exports.execute = function (req, res, data) {
    // Logic for action1

    const outputPath = 'temp/template' + '.pdf';
    const templateName  = 'Account Turnover';

    const _data = req.body;

    const headerHtml = header.template();

    const masterHtml = master.template(_data[0]);

    //const _filterData = filterDataWithCustomOrder(_data, ["processingDate", "reference","orderingBeneficiaryAccountName", "transactionDesc", "debitAmount", "creditAmount"]);
    
    const _filterData = filterData(_data); 

    const detailsHtml = details(_filterData, 22, 10); //25 represent number of items on first page bcs we have master data || 10 represent number of items additonal items on any other page (25+10)

    const pageHtml = [];

    var counter = 0;
    detailsHtml.forEach(detail => {
      let newPage = '';

      const footerHtml = footer.template(counter+1);

      if (counter > 0) {
         newPage = container.template(headerHtml, footerHtml, `<div class="emptyArea"></div>`, `<div class="detailAnyPage">${detail}</div>`); 
      }
      else{
         newPage = container.template(headerHtml, footerHtml, `<div class="master">${masterHtml}</div>`, `<div class="detailFirstPage">${detail}</div>`);
      }

      counter = counter + 1;
      pageHtml.push(newPage);
    });

    const htmlContent = template.template(pageHtml.join(''));

    const finalHtml = appendStyles(htmlContent, commonStyles, customStyles);

    generateDocument(finalHtml, outputPath, templateName, res);

  };
