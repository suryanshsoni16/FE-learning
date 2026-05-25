const nums = [2, 7, 11, 15];
const target = 9;   

function twoSum(nums, target){
    for (let  i = 0 ; i < nums.length; i++){
        for (let j = i +1 ; j < nums.length; j ++){
            if (nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}
console.log(twoSum(nums, target)); // Output: [0, 1]


//optimized solution using hash map
var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
};

