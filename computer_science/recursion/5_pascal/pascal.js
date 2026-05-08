const pascal = function (row) {
  let result = [];
  result[0] = 1;
  result[row - 1] = 1;
  if (row == 1) {
    return [1];
  } else if (row == 2) {
    return [1, 1];
  } else {
    for (let i = 1; i < row - 1; i++) {
      result[i] = pascal(row - 1)[i - 1] + pascal(row - 1)[i];
    }
  }
  return result;
};

// Do not edit below this line
module.exports = pascal;
