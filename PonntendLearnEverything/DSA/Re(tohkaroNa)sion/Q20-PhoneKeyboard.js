var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];

  function solve(index, currString) {
    if (index === digits.length) {
      return result.push(currString);
    }

    const letters = map[digits[index]];
    console.log(index, currString);

    for (let letter of letters) {
      solve(index + 1, currString + letter);
    }
  }
  solve(0, "");
  return result;
};
console.log(letterCombinations("23"));
