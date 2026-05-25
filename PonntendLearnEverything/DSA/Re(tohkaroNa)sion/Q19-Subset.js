function subsets(nums) {
  // final answer
  let result = [];

  // recursive function
  function solve(index, subset) {
    // if we reached the end
    if (index === nums.length) {
      // save current subset
      result.push([...subset]);
      return;
    }

    // -------------------
    // CHOICE 1: take number
    // -------------------

    subset.push(nums[index]);

    solve(index + 1, subset);

    // remove last added number
    // this is BACKTRACKING
    subset.pop();

    // -------------------
    // CHOICE 2: don't take number
    // -------------------

    solve(index + 1, subset);
  }

  solve(0, []);

  return result;
}

function subsequences(str) {
  let result = [];

  function solve(index, current) {
    // base case
    if (index === str.length) {
      // don't include empty string
      if (current.length > 0) {
        result.push(current);
      }

      return;
    }

    // -------------------
    // Choice 1: take char
    // -------------------

    solve(index + 1, current + str[index]);

    // -------------------
    // Choice 2: skip char
    // -------------------

    solve(index + 1, current);
  }

  solve(0, "");

  return result;
}

console.log(subsequences("abc"));
