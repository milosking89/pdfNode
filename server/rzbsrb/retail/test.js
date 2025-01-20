const PDFDocument = require('pdfkit');
const fs = require('fs');
const base64 = require('base64-stream');

const doc = new PDFDocument();

const responseData = {
    Success: false,
    Content: "",
    Name: ""
  };

// Save or stream the PDF to a buffer
const buffer = [];
doc.on('data', (chunk) => {
    buffer.push(chunk);
});

// Function to draw the table header
const drawTableHeader = () => {
    doc.font('Helvetica-Bold').fontSize(12);
    doc.text('Title 1', 50, 50);
    doc.text('Title 2', 100, 50);
    doc.text('Title 3', 150, 50);
    doc.text('Title 4', 200, 50);
    doc.text('Title 5', 250, 50);
};

// Function to draw the table rows
const drawTableRows = (rows) => {
    doc.font('Helvetica').fontSize(10);

    let paddingTop = 100;
    let paddingLeft = 50;

    rows.forEach((row) => {
        row.forEach((data, index) => {
            doc.text(data, paddingLeft, paddingTop);
            paddingLeft +=50;
        });
        paddingTop +=20;
        paddingLeft = 50;
    });
};

exports.execute = function (req, res, data) {

    doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffer);
        const pdfBase64 = pdfBuffer.toString('base64');

        responseData.Content = pdfBase64;
        responseData.Name = "Test";
        responseData.Success = true;

        res.send(JSON.stringify(responseData))
    });

    // Save or stream the PDF to a file
    const outputStream = fs.createWriteStream('output.pdf');
    doc.pipe(outputStream);

    // Add content to the document
    drawTableHeader();
    drawTableRows([
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        // Add more rows here
    ]);

    // Add more pages as needed
    doc.addPage();
    drawTableHeader();

    drawTableRows([
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
        ['Data 1A', 'Data 2A','Data 2A','Data 2A','Data 2A'],
    // Add more rows here
    ]);

    // End the document stream
    doc.end();

};