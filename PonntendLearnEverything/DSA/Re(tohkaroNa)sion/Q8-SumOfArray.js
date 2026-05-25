const inputArr = [2, 3, 6, 77, 88, 90];
function sumArray(arr, i = 0) {
  // base case
  if (i === arr.length) return 0;
  // current value + rest
  return arr[i] + sumArray(arr, i + 1);
}
console.log(sumArray(inputArr));
