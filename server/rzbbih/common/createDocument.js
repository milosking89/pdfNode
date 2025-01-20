module.exports = async function (htmlContent, outputPath) {
  const pdf = require('html-pdf');
  const pdf2base64 = require('pdf-to-base64');

  const responseData = {
    Success: false,
    Content: "",
    Name: ""
  };

  try {
    const result = await new Promise((resolve, reject) => {
      pdf.create(htmlContent).toFile(outputPath, (err, res) => {
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
            responseData.Name = "AccountTurnover";
            responseData.Success = true;
            resolve(responseData);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    });

    return result;
    
  } catch (error) {
    console.error(error);
    return responseData;
  }
};