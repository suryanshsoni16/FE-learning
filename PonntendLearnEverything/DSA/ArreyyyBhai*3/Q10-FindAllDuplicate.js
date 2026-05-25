
var findDuplicates = function (nums) {
  let map = {};
  let result = [];

  for (let num of nums) {
    if (map[num]) {
      result.push(num);
    } else {
      map[num] = 1;
    }
  }

  return result;
};


// time complexity: O(n)   
// space complexity: O(n)  