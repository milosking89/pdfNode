module.exports = function (employees, number) {

  const table = require('../../../common/table');

  const maxChunkLength = number;
  const numChunks = Math.ceil(employees.length / maxChunkLength);
  
  const chunkedArrays = Array.from({ length: numChunks }, (_, index) => {
    const start = index * maxChunkLength;
    const end = start + maxChunkLength;
    return employees.slice(start, end);
  });
  
  console.log('Chunked Arrays:', chunkedArrays);
  
  let tableHTML = [];
  
  chunkedArrays.forEach(element => {
     tableHTML.push(table(element));
  });
  
  return tableHTML;
  
}