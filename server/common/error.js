exports.execute = async function (req, res, error) {

  const responseData = {
    Success: false,
    Message: error
  };
  
  return res.send(responseData);
  
}