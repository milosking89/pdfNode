module.exports = async function (htmlContent, outputPath, name, res) {
  
  const pdf = require('html-pdf');//https://github.com/marcbachmann/node-html-pdf/blob/master/LICENSE
  const pdf2base64 = require('pdf-to-base64');//https://opensource.org/license/MIT

  const responseData = {
    Success: false,
    Content: "",
    Name: name
  };

 // PDF options
 const options = {
  format: 'A4',
  border: {
      top: '0mm',
      right: '5mm',
      bottom: '5mm',
      left: '5mm'
  },
     header: {
        height: "20mm", // Define height for the header
        contents: {
           default: '<div style="text-align: center; font-size: 30px; color: white; background-color: #d22030; padding: 10px">QIIB</div>'
        }
    },
    footer: {
        height: "10mm", // Define height for the footer
        contents: {
            default: `<div style="text-align: right; font-size: 12px; color: white; background-color: #d22030; padding: 10px;">Page {{page}} of {{pages}}</div>`, // Dynamic page numbering
        }
    }
};
  try {
    const result = await new Promise((resolve, reject) => {
      
      pdf.create(htmlContent, options).toFile(outputPath, (err, res) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }

        console.log('PDF created successfully');

        pdf2base64(res.filename)
          .then((response) => {
            console.log(response);
            responseData.Content = response;
            responseData.Name = name;
            responseData.Success = true;
            responseData.Html = htmlContent;
            resolve(responseData);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    });

    return res.send(JSON.stringify(result));
    
  } catch (error) {
    console.error(error);
    return responseData;
  }
};