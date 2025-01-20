//exports.template = (master, details) => {
  exports.template = (container) => {

    return `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <!--[if mso]>
              <noscript>
                <xml>
                  <o:OfficeDocumentSettings>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
                </xml>
              </noscript>
              <![endif]-->      
    </head>
    
    <body>
      <div class="page">${container}</div>
      <div class="clear"></div>
    </body>
    </html>`
};
