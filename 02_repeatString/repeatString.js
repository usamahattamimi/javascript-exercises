const repeatString = function (text, repeat) {
  let result = "";
  let count = 0;

  if (repeat >= 0) {
    // for loop
    // for (let i = 0; i < repeat; i++) {
    //   result += text;
    // }

    // while loop
    while (count < repeat) {
      result += text;
      count++;
    }
  } else result = "ERROR";

  return result;
};

// Do not edit below this line
module.exports = repeatString;
