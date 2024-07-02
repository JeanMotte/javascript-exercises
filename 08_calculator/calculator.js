const add = function(...args) {
  return args.reduce((a, b) => a + b)
};

const subtract = function(...args) {
  return args.reduce((a, b) => a - b)
};

const sum = function(args) {
    if (args.length === 0) {
      return 0
    } else {
      return args.reduce((a, b) => a + b)
    }
};

const multiply = function(args) {
  return args.reduce((a, b) => a * b)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1
  } else {
    let arr = [...Array(number + 1).keys()]
    arr.shift()
    return multiply(arr)
  }
};

let userInput = document.getElementById("prompt");
let keys = document.querySelectorAll(".keys");

keys.forEach((key) => {
  key.addEventListener(("click"), function(e) {
    userInput.innerText += key.innerText;
  })
})












// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
