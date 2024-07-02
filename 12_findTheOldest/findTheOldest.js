const findTheOldest = function(people) {
  let ages = people.map((element) => (element.yearOfDeath !== undefined) ? (element.yearOfDeath - element.yearOfBirth) : (new Date().getFullYear() - element.yearOfBirth));

  let maxAge = Math.max(...ages)
  let index = ages.indexOf(maxAge)
  return people[index]
};

// Do not edit below this line
module.exports = findTheOldest;
