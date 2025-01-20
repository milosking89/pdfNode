module.exports = function (data) {
 
  const resources = require('../resources/resource-en');

  let table = '<table class="table">';
  
  // Generate the table header row
  table += '<thead><tr>';
  for (let key in data[0]) {
    
    const value = resources[key];
    table += '<th>' + value + '</th>';


  }
  table += '</tr></thead>';

  // Generate the table body
  table += '<tbody>';
  data.forEach(item => {
    table += '<tr class="row-break">';
    
    for (let key in item) {

      if (item[key] == "newLine") {
        return;
      }
      else {
        table += '<td class="tableItem">' + item[key] + '</td>';
      }
    }

    table += '</tr>';
  });
  table += '</tbody>';

  table += '</table>';

  return table;
  
}