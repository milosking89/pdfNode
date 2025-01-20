module.exports = function (elems, specElem) {

    specElem = "transactionDesc";

    var firstPageItems = 9; //elemenents after header and master data on first page

    const table = require('../../components/createTable'); // functon that initiate table script
  
    const chunks = []; // number of elements that represent container for every page.
    let remainingItems = elems.slice(); // Copy the original array

    var idCounter = 0; // counter of items per page
    customIDArray = []; // filtred array

    //foreach
    remainingItems.forEach((item) => {

      idCounter ++;
      let idObj = { }; 
      idObj.id = idCounter;

      let mergedObj = Object.assign({}, idObj, item); //add id to list

      if (mergedObj[specElem].length > 100) {   // if specific element contains more than 100 charachters, split 2 rows into one.
        customIDArray.push({}); 
      }
      
      customIDArray.push(mergedObj); 
    });


    chunks.push(customIDArray.splice(0, firstPageItems));
  
    // Create subsequent chunks of 20 items
    while (customIDArray.length > 0) {
      chunks.push(customIDArray.splice(0, firstPageItems + 8)); // do it for every page after first.
    }
  
    console.log(chunks);
  
    let tableHTML = [];
  
    chunks.forEach(element => {
        tableHTML.push(table(element));
    });
  
    return tableHTML;

}