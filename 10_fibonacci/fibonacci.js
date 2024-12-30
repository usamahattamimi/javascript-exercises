// const fibonacci = function (n) {
//   if (n < 0) return "OOPS";

//   if (typeof n === "string") n = Number(n);

//   const fibonacci = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//   }

//   return fibonacci[n];
// };

const fibonacci = (n) => {
  let count;

  if (typeof n === "string") count = parseInt(n);
  else count = n;

  if (count < 0) return "OOPS";
  if (count === 0) return 0;

  let firstPrevious = 1;
  let secondPrevious = 0;

  for (let i = 2; i <= count; i++) {
    let current = firstPrevious + secondPrevious;
    secondPrevious = firstPrevious;
    firstPrevious = current;
  }

  return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
