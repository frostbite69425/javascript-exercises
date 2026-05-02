const factorial = function (num) {
  if (typeof num !== "number" || num < 0 || num % 1 !== 0) {
    return undefined;
  }
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = factorial;
