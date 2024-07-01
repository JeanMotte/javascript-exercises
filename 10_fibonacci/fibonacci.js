const fibonacci = function(number) {

  let count
  if (typeof number !== 'number') {
    count = parseInt(number)
  } else {
    count = number
  }

  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  let arr = [0, 1]

  for (i = 2; i <= count ; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[count]
};

// Do not edit below this line
module.exports = fibonacci;
