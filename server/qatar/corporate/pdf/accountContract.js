const { JSDOM } = require('jsdom');
const template = require('./components/common.template.js');
const container = require('./components/container.template.js');

const content= require('./custom/accountContract/accountContract.template.js');
const { appendStyles } = require('./components/styles.templates.js');
const commonStyles = require('./styles/styles-css.js');

const generateDocument = require('../../../common/generateDocument.js');

const customStyles = require('./custom/accountTurnover/styles-css.js');
 
exports.execute = function (req, res, data) {

    const outputPath = 'temp/template' + new Date().toISOString() + '.pdf';
    const templateName  = 'Contract';

    const _data = req.body;

    const contentHtml = content.template();

    var pageHtml = [];
    let newPage = container.template(`<div class=""></div>`, `<div class="">${contentHtml}</div>`,`<div class="emptyArea"></div>`);
    pageHtml.push(newPage);


    const htmlContent = template.template(pageHtml.join(''));
    const finalHtml = appendStyles(htmlContent, commonStyles, customStyles);
    generateDocument(finalHtml, outputPath, templateName, res);

  };
