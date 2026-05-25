const nums = [5, 2, 3, 1, 7, 41, 6, 4];

function merge(arr1, arr2) {
  //conquor
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //base case

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); //divide
  let right = mergeSort(arr.slice(mid)); //divide

  return merge(left, right); //conquor
}

console.log(mergeSort(nums));
