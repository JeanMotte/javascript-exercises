const sumAll = function(start, end) {
  result = 0
  if (start < 0 || end < 0) return "ERROR";
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  if (start <= end) {
    for (i = start; i <= end; i++) {result += i}
  } else if (start > end) {
    for (i = end; i <= start; i++) {result += i}
  }
  return result
};

// Do not edit below this line
module.exports = sumAll;


// Think about how you would do this on pen and paper and then how you might translate that process into code:
// - make sure you pay attention to the function parameters
// - create a variable to hold the final sum
// - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
// - on each iteration add the number to the sum
// - return the sum after finishing the loop
