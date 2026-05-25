/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  // base case
  if (n === 1) {
    return "0";
  }

  let length = Math.pow(2, n) - 1;

  let mid = Math.floor(length / 2) + 1;

  // middle bit
  if (k === mid) {
    return "1";
  }

  // left half
  if (k < mid) {
    return findKthBit(n - 1, k);
  }

  // right half
  else {
    let mirror = length - k + 1;

    let ans = findKthBit(n - 1, mirror);

    // invert answer
    if (ans === "0") {
      return "1";
    }

    return "0";
  }
};
