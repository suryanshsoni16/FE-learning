/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const totalSum = (nums.length * (nums.length + 1)) / 2;

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  return totalSum - sum;
};
