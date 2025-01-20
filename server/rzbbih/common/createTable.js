module.exports = function (data) {
  
  let table = '<table>';
  
  // Generate the table header row
  table += '<thead><tr>';
  for (let key in data[0]) {
    table += '<th>' + key + '</th>';
  }
  table += '</tr></thead>';

  // Generate the table body
  table += '<tbody>';
  data.forEach(item => {
    table += '<tr>';
    for (let key in item) {
      table += '<td>' + item[key] + '</td>';
    }
    table += '</tr>';
  });
  table += '</tbody>';

  table += '</table>';
  return table;
  
}