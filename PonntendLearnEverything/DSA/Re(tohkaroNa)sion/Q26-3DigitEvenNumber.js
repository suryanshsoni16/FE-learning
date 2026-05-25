var findEvenNumbers = function (digits) {
  let ans = new Set();

  function solve(num, used) {
    // if number has 3 digits
    if (num.length === 3) {
      // check even
      if (Number(num) % 2 === 0) {
        ans.add(Number(num));
      }

      return;
    }

    // try every digit
    for (let i = 0; i < digits.length; i++) {
      // skip used digit
      if (used[i]) continue;

      // first digit cannot be 0
      if (num === "" && digits[i] === 0) continue;

      // mark used
      used[i] = true;

      // add digit and recurse
      solve(num + digits[i], used);

      // backtrack
      used[i] = false;
    }
  }

  solve("", []);

  return [...ans].sort((a, b) => a - b);
};



console.log(findEvenNumbers([1,4,5]));