const nums = [1, 2, 3];

function permutation(nums) {
  if (nums.length === 0) {
    return [];
  }

  let result = [];
  function solve(arr) {
    if (arr.length === nums.length) {
      result.push([...arr]);
      return;
    }

    for (let num of nums) {
      if (arr.includes(num)) {
        continue;
      }
      arr.push(num);
      solve(arr);
      arr.pop();
    }
  }
  solve([]);
  return result;
}

console.log(permutation(nums));

// for string
function permutation(str) {
  let result = [];

  function solve(current) {
    // permutation complete
    if (current.length === str.length) {
      result.push(current);
      return;
    }

    // try every character
    for (let char of str) {
      // skip used character
      if (current.includes(char)) {
        continue;
      }

      // choose character
      solve(current + char);
    }
  }

  solve("");

  return result;
}
