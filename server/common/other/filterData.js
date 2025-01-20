module.exports = function (arrayOfObjects) {

    var counter = 0;
    customIDArray = [];
    customRowArray = [];

    arrayOfObjects.forEach((item) => {

        counter ++;
        const idObj = { }; 
        idObj.id = counter;

        const mergedObj = Object.assign({}, idObj, item);

        Object.keys(mergedObj).forEach(key => {
             if (mergedObj[key].toString().length > 50 && mergedObj[key].toString().length < 100) {        
                mergedObj["newLine"] = true;
             }
             else if (mergedObj[key].toString().length > 100){
                mergedObj["newDoubleLine"] = true;
             }
        });

        customIDArray.push(mergedObj);

    });

    customIDArray.forEach((item, index) => {
        customRowArray.push(item);
        if (item["newLine"]) {
          delete item["newLine"];
          customRowArray.push({newLine: 'newLine'});
        }
        else if (item["newDoubleLine"]){
          delete item["newDoubleLine"];
          customRowArray.push({newLine: 'newLine'});
          customRowArray.push({newLine: 'newLine'});
        }
      
      });
  
    return customRowArray;
  
  }