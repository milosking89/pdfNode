module.exports = function (data) {
 
  const resources = require('../../../../common/resources/resource-en');

  let tableHead = '<thead><tr>';
  for (let key in data[0]) {
    const value = resources[key];
    tableHead += '<th>' + value + '</th>';
  }
  tableHead += '</tr></thead>';

  let counter = 50;

  let tableBody = '<tbody>';

  data.forEach((item, index) => {
    
    if (Object.keys(item).length === 0) {
      counter = counter+50;
    }
    else {
      tableBody += '<tr class="row-break">';
    }

    for (let key in item) {
      tableBody += '<td class="tableItem">' + item[key] + '</td>';
    }

    tableBody += '</tr>';
  });

  tableBody += '</tbody>';

  let table = '<table style="margin-bottom: '+ counter + "px" + '" >' + tableHead + tableBody +'</table>';

  return table;
  
};