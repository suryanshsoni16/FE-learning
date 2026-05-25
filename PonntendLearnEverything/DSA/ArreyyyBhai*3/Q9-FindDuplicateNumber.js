
var findDuplicate = function (nums) {
  let ans = 0;
  

  // XOR all array elements
  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }

//   // XOR numbers from 1 to n-1
//   for (let i = 1; i < nums.length; i++) {
//     ans = ans ^ i;
//   }

  return ans;
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
// console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3