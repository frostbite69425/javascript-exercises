const contains = function (object, value) {
  let result = false;
  for (const key in object) {
    if (Number.isNaN(object[key]) && Number.isNaN(value)) {
      return (result = true);
    }
    if (object[key] === value) {
      return (result = true);
    } else {
      if (typeof object[key] === "object" && !Array.isArray(object[key])) {
        if (!result) {
          result = contains(object[key], value);
        }
      } else {
        continue;
      }
    }
  }
  return result;
};

// Do not edit below this line
module.exports = contains;
