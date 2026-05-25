const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

function intersection(nums1, nums2) {
  let map = {};
  let result = [];

  for (let num of nums1) {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  for (let num of nums2) {

    if(map[num] > 0 ){
        result.push(num)
        map[num]--;
    }
  }

  return result;
}

console.log(intersection(nums1, nums2)); // Output: [2, 2]
