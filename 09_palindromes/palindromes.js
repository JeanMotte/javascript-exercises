const palindromes = function (sentence) {
  return (String(sentence.toLowerCase().replace(/[.,?!\s]/g, '').split('').join('')) === String(sentence.toLowerCase().replace(/[.,?!\s]/g, '').split('').reverse().join(''))) ? true : false
};

// Do not edit below this line
module.exports = palindromes;
