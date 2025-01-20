exports.template = (data, table) => {

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
          .header {
            padding : 20px 0 20px 0;
            margin-bottom:20px;
            overflow :auto;
            border-bottom : 2px solid #0095c8;
          }
          
          p {
            margin : 0;
          }
          
          .content {
            width: 100%;
            padding : 10px;
            height : 70px;
            border-bottom : 1px solid;
            text-align : center;
            
          }

          th.sticky {
            position: sticky;
            top: 0;
            z-index: 1;
          }

          @media print
          {
              tbody {
                  page-break-inside: avoid;
              }
              thead {
                  display: table-header-group;
                  margin-top: 100px;
              }
          }
                    
        </style>
    </head>
    
    <body style="margin:0;padding:0;">
    <div style = "margin:auto;  height : 40px; width :200px">
</div>
<table style = "margin:auto">
  <thead>
    <tr>
        <th class="sticky">
          <div class = "">
            <div style = "float:left">
              <h2>Some Logo for header </h2>
            </div>
             <div style = "float:right">
               <p>header summary</p>
               <p>header summary</p>
               <p>header summary</p>
               <p>header summary</p>
               
            </div>   
          </div>
        </th>
      </tr>
    </<thead>
    <tbody>
      <tr>
        <td>        
          <div class = "content">
            <p>print will have multiple page</p>
            <p>print will have multiple page</p>
            <p>print will have multiple page</p>
          </div>
          <div class = "content">
            <p>print will have multiple page</p>
            <p>print will have multiple page</p>
            <p>print will have multiple page</p>
          </div>
          <div class = "content">
            <p>print will have multiple page</p>
            <p>print will have multiple page</p>
            <p>print will have multiple page</p>
          </div>
          <div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div>
          <div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div>
          <div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div>
          <div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div>
          <div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>Wwe want header to be repeated in each page</p>
            <p>Wwe want header to be repeated in each page</p>
          </div>
      <div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div>
      
      <div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div><div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div><div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div><div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div><div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div><div class = "content">
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
            <p>we want header to be repeated in each page</p>
          </div><div class = "content">
            <p>ohh!!!! No!!! in chrome and safari header overlapse with content</p>
            <p>ohh!!!! No!!! in chrome and safari header overlapse with content</p>
            <p>ohh!!!! No!!! in chrome and safari header overlapse with content</p>
          </div><div class = "content">
            <p>ohh!!!! No!!! in chrome and safari header overlapse with content</p>
            <p>ohh!!!! No!!! in chrome and safari header overlapse with content</p>
            <p>ohh!!!! No!!! in chrome and safari header overlapse with content</p>
          </div>                
        </td>
      </tr>
   </<tbody> 
      
 
</table>  
        
    </body>
    
    </html>`
};