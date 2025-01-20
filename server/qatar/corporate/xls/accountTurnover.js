const Excel = require('exceljs');
const fs = require('fs');
const filterData = require('../../../common/details/filterDataWithCustomOrder');

exports.execute = function (req, res, data) {

  const responseData = {
    Success: false,
    Content: "",
    Name: ""
  };

const outputPath = 'temp/excel' + '.xlsx';

const employees = req.body;
const filteredData = filterData(employees, ["processingDate", "reference", "debitAmount", "creditAmount"]);

const transformedArray = filteredData.map(obj => Object.values(obj));
// Create a new Excel workbook
const workbook = new Excel.Workbook();

// Create a worksheet and set its name
const worksheet = workbook.addWorksheet('Sheet1');

// Load HTML structure into worksheet
worksheet.addRows([
  ["ID", "Processing date", "Reference", "Debit amount", "Credit amount"]
]);

worksheet.addRows(transformedArray);

// Style the header row
const headerRow = worksheet.getRow(1);
headerRow.eachCell(cell => {
    cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'D22131' }
    };
    cell.font = {
      color: { argb: 'FFFFFFFF' }
  };
});

worksheet.columns.forEach((column, index) => {
  column.width = 30;
});

// Save workbook to a file
workbook.xlsx.writeFile(outputPath)
  .then(() => {

    console.log('Excel file created successfully');
    const fileBuffer = fs.readFileSync(outputPath);
    const base64String = fileBuffer.toString('base64');

    responseData.Success = true;
    responseData.Content = base64String;
    responseData.Name = "Account turnover";

    return res.send(JSON.stringify(responseData));
  })
  .catch(err => {
    console.error('Error creating Excel file:', err);
  });  
};