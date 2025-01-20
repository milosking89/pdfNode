exports.template = (data, employees) => {

    return `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
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
        <style>
            table,
            td,
            div,
            h1,
            p {
                font-family: Arial, sans-serif;
            }
            table.generated {
                width: 100%;
                border-collapse: collapse;
              }
          
              table.generated, .generated th, .generated td {
                border: 1px solid #f2f2f;
                padding: 8px;
              }
          
              .generated th {
                background-color: #f2f2f2;
              }     

            .page-break-before {
                page-break-before: always;
            }
            .page-break-after {
                page-break-after: always;
            }.no-page-break-inside {
                page-break-inside: avoid;
            }
            .page-start {
                page-break-before: avoid;
            }
            .no-page-break-inside {
                page-break-inside: avoid;
            }

        </style>
    </head>
    
    <body style="margin:0;padding:0;">

        <table role="presentation"
            style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    
            <tr>
                <td align="center" style="padding:0;">
                    <table role="presentation"
                        style="width:800px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                        <tr>
                        </tr>
                        <tr>
                            <td style="padding:30px;background:rgb(255, 255, 0);">
                                <table role="presentation"
                                    style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                    <tr>
                                        <td style="padding:0;width:50%;" align="center">
                                            <h1>RZB SERBIA</h1>
                                        </td>
    
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:36px 30px 42px 30px;">
                                <table role="presentation"
                                    style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                    <tr>
                                        <td style="padding:0 0 36px 0;color:#153643;">
                                            <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Kod
                                                porudzbine:</h1>
                                            <h1
                                                style="text-align: center; margin:0 0 12px 0;font-size:32px;line-height:24px;font-family:Arial,sans-serif; background-color: #000; color:white">
                                                ${data.code}</h1>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0;">
                                            <table role="presentation"
                                                style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                                <tr>
                                                    <h2>Ukupna cena za naplatu sa dostavom iznosi: <br>${data.total}.oo RSD</h2>
                                                    <br>
                                                    <h3>Detalje dostave mozete pogledati na Vasem nalogu.</h3>
                                                    <br>
                                                    <h3>Dostavu mozete ocekivati u najkracem mogucem roku.</h3>
                                                    <br>
                                                    <h1>Srdacan pozdrav, <br> Vas Online-Shop.</h1>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="background:#000000;">
                                <table role="presentation"
                                    style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:24px;font-family:Arial,sans-serif;">
                                    <tr>
                                    <td style="padding:10px;background:#ffffff;">
                                        ${employees.forEach(i => `<div class="page-break-after">${employees[i]}</div>`)}
                                    </td>
                                </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>    
    </body>
    </html>`
};