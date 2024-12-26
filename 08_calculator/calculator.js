const add = function (first, second) {
  return first + second;
};

const subtract = function (first, second) {
  return first - second;
};

const sum = function (number) {
  let result = 0;
  let count = 0;

  while (count < number.length) {
    result += number[count];
    count++;
  }

  return result;
};

const multiply = function (numbers) {
  let result = 1;

  for (const number of numbers) {
    result *= number;
  }

  return result;
};

const power = function (first, second) {
  let result = first;
  let count = 0;

  while (count < second - 1) {
    result *= first;
    count++;
  }

  return result;
};

const factorial = function (number) {
  if (number === 0) return 1;

  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
