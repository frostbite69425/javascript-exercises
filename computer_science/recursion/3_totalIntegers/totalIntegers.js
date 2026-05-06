const totalIntegers = function (list) {
  let result = 0;

  if (typeof list !== "object") {
    return undefined;
  }

  if (Array.isArray(list)) {
    for (const sublist of list) {
      if (
        sublist !== null &&
        typeof sublist === "object" &&
        sublist.length !== 0
      ) {
        result = result + totalIntegers(sublist);
      } else if (typeof sublist === "number" && Number.isInteger(sublist)) {
        result++;
      }
    }
  } else {
    const listValues = Object.values(list);
    for (const sublist of listValues) {
      if (
        sublist !== null &&
        typeof sublist === "object" &&
        sublist.length !== 0
      ) {
        result = result + totalIntegers(sublist);
      } else if (typeof sublist === "number" && Number.isInteger(sublist)) {
        result++;
      }
    }
  }

  return result;
};

// Do not edit below this line
module.exports = totalIntegers;
