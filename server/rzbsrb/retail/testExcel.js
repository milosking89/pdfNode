const Excel = require('exceljs');
const fs = require('fs');

exports.execute = function (req, res, data) {

// Create a new Excel workbook
const workbook = new Excel.Workbook();

// Create a worksheet and set its name
const worksheet = workbook.addWorksheet('Sheet1');

// Load HTML structure into worksheet
worksheet.addRows([
  ['Name', 'Age', 'Country'],
  ['John', 30, 'USA'],
  ['Alice', 25, 'Canada']
]);

// Save workbook to a file
workbook.xlsx.writeFile('output.xlsx')
  .then(() => {
    console.log('Excel file created successfully');
  })
  .catch(err => {
    console.error('Error creating Excel file:', err);
  });  
};