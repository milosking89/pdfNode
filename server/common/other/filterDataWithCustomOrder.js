module.exports = function (arrayOfObjects, arrayOfStrings) {

  //CREATE ARAY WITH OBJECTS THAT WE NEED TO SHOW
  const filteredArray = arrayOfObjects.map(obj =>
    Object.fromEntries(
      Object.entries(obj).filter(([key]) => arrayOfStrings.includes(key))
    )
  );
  //ORDER OBJECTES IN ARRAY BY THE SEQUENCE FROM arrayOfStrings
  var originalReorderedArray = reorderProperties(filteredArray, arrayOfStrings);
 
  //IF PROP FROM OBJECT CONTAINS LONG WORD, ADD POPOR newLine AND MERGE 2 TR INTO ONE
  var customRenderedArray = [];
  originalReorderedArray.forEach((item, index) => {
    customRenderedArray.push(item);
    if (item["newLine"]) {
      delete item["newLine"];
      customRenderedArray.splice(index + 1, 0, {});
    }
});

  return customRenderedArray;
  
}

function reorderProperties(filteredArray, order) {
  
  var counter = 0;

  return filteredArray.map(obj => {
      const reorderedObj = {};  

      order.push("id");
      counter ++;

      order.forEach(property => {

        reorderedObj["id"] = counter;
        
        if (obj.hasOwnProperty(property)) {

              reorderedObj[property] = obj[property];

              if (typeof obj[property] === 'number') {
                //todo
              }
              else if (obj[property] === null || obj[property] === undefined){
                obj[property] = "0.00";
              }
              else {
                
                const dateObject = new Date(obj[property]);

                if (!isNaN(dateObject)) {

                  //Get the month, day, and year from the Date object
                  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to get the correct month
                  const day = dateObject.getDate().toString().padStart(2, '0');
                  const year = dateObject.getFullYear();
  
                  //Create the formatted date string in MM.DD.YYYY format
                  const formattedDate = `${month}.${day}.${year}`;
  
                  reorderedObj[property] = formattedDate;
                }
                else {
                  if (reorderedObj[property].length > 20) {
                      reorderedObj["newLine"] = true;
                  }
                }
              }

           }
      });

      return reorderedObj;
  });
}