module.exports = function (arrayOfObjects, arrayOfStrings) {

  const filteredArray = arrayOfObjects.map(obj =>
    Object.fromEntries(
      Object.entries(obj).filter(([key]) => arrayOfStrings.includes(key))
    )
  );
  
  const reorderedArray = reorderProperties(filteredArray, arrayOfStrings);

  return reorderedArray;
  
}

function reorderProperties(objects, order) {
  return objects.map(obj => {
      const reorderedObj = {};
      order.forEach(property => {
          if (obj.hasOwnProperty(property)) {
              reorderedObj[property] = obj[property];
          }
      });
      return reorderedObj;
  });
}