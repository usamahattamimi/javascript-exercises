const removeFromArray = function (array, ...args) {
  // method 1
  // // const resultArrays = arguments[0];
  // // const filter = Array.from(arguments).slice(1);

  // return array.filter((result) => !args.includes(result));

  // method 2
  const result = [];

  array.forEach((item) => {
    if (!args.includes(item)) result.push(item);
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
