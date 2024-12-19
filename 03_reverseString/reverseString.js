const reverseString = function (word) {
  //   let result = [];
  //   if (word)
  //     for (let i = word.length; i > 0; i--) {
  //       result.push(word[i - 1]);
  //     }
  //   else return (result = "");
  //   return result.join("");

  return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
