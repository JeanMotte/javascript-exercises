const getTheTitles = function(object) {
  // let result = []
  // Object.values(object).forEach((element) => {
  // 	result.push(element.title)
  // })
  // return result
  return object.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
