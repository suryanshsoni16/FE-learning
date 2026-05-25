var PredictTheWinner = function (nums) {
  function solve(left, right) {
    // base case
    if (left === right) {
      return nums[left];
    }

    // pick left
    let pickLeft = nums[left] - solve(left + 1, right);

    // pick right
    let pickRight = nums[right] - solve(left, right - 1);

    // choose best
    return Math.max(pickLeft, pickRight);
  }

  return solve(0, nums.length - 1) >= 0;
};
