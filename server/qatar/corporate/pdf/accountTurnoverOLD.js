const template = require('./components/common.template.js');
const container = require('./components/container.template.js');

const master = require('./components/accountTurnover/masterData.template.js');
const details = require('./components/detailsData.template.js');
const header = require('./components/header.template.js');
const footer = require('./components/footer.template.js');

const { appendStyles } = require('./components/styles.templates.js');
const commonStyles = require('./styles/styles-css.js');

const generateDocument = require('../../../common/generateDocument.js');
const filterData = require('../../../common/details/filterData.js');

const customStyles = `

.qrCode {
  width: 120px!important;
  height: 120px!important;
  border: 1px solid gray;
  float: right;
  position: relative;
  right: 10px;
  top: -10px;
}

.qrCode img{
  position: relative;
  width: 100%;
  height: 100%;
}`

 
exports.execute = function (req, res, data) {
    // Logic for action1

    const outputPath = 'temp/template' + '.pdf';
    const templateName  = 'Account Turnover';

    const headerHtml = header.template();

    var masterHtml = '';
    var masterData = req.body[0];
    masterHtml = master.template(masterData[0]);

    var detailsHtml = '';
    var detailsData = req.body[1];
    var filteredData = filterData(detailsData); 

    //const _filterData = filterDataWithCustomOrder(_data, ["processingDate", "reference","orderingBeneficiaryAccountName", "transactionDesc", "debitAmount", "creditAmount"]);
  
    detailsHtml = details(filteredData, 15, 20); 
    //1st number represent number of items on first page bcs we have master data
    //2nd number represent number of additional item to add on every next page

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
