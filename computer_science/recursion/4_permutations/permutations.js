const permutations = function (numArr) {
  if (numArr.length === 1) {
    return [numArr];
  } else if (numArr.length === 0) {
    return [[]];
  }
  const resultArr = [];
  let pushableElement = [];
  if (numArr.length === 2) {
    return [numArr, [numArr[1], numArr[0]]];
  } else {
    for (let i = 0; i < numArr.length; i++) {
      const fixedNum = numArr[i];
      const filteredNum = numArr.filter((el) => numArr.indexOf(el) !== i);
      const returnedArr = permutations(filteredNum);
      for (let j = 0; j < returnedArr.length; j++) {
        pushableElement[i + j] = [fixedNum].concat(returnedArr[j]);
        resultArr.push(pushableElement[i + j]);
      }
    }
  }

  return resultArr;
};

// Do not edit below this line
module.exports = permutations;
