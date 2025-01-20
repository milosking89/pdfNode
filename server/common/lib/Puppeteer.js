module.exports = async function (htmlContent, outputPath, name, res, pageHeader) {

  const puppeteer = require('puppeteer');
  const fs = require('fs'); 

  const responseData = {
    Success: false,
    Content: "",
    Name: name
  };

  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport to avoid scaling issues
    await page.setViewport({
      width: 1560,
      height: 1024,
      deviceScaleFactor: 1
    });

    await page.setContent(htmlContent);

    // Generate PDF with custom header/footer and margins
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: 
      `<div style="font-size:14px; width:100%; text-align:center;">${pageHeader}</div>`,
      footerTemplate: `
      <div style="font-size:12px; width:100%; text-align:center;">
          Page <span class="pageNumber"></span> of <span class="totalPages"></span>
          <span>Generated on ${new Date().toLocaleString()}</span>
      </div>`,
      margin: {
        top: '100px',
        bottom: '50px',
        left: '20px',
        right: '20px'
      }
    });

    // Save PDF to disk
    fs.writeFileSync(outputPath, pdfBuffer);

    // Convert the PDF buffer to base64
    const base64PDF = pdfBuffer.toString('base64');
    responseData.Content = base64PDF;
    responseData.Success = true;
    responseData.Name = name;
    responseData.Html = htmlContent;

    return res.send(JSON.stringify(responseData));

  } catch (error) {
    console.error("Error generating PDF:", error);
    return res.send(JSON.stringify(responseData));

  } finally {
    if (browser) {
      await browser.close(); // Ensure browser is closed
    }
  }
};
