/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // bc
  if (n === 1) return true;

  if (n <= 0 || n % 2 !== 0) return false; //if negative or odd

  return isPowerOfTwo(n / 2);
};
