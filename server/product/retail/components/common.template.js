//exports.template = (master, details) => {
  exports.template = (container) => {

    return `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="Title" content="My PDF Title">
        <meta name="Author" content="Milos Ivankovic">
        <meta name="Producer" content="NFINNOVA">
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
