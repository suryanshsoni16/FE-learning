const inputArr = [2, 3, 6, 77, 88, 90];
function linearSearch(arr, target, i = 0) {
  if (arr.length === i) return -1;
  if (arr[i] === target) {
    return i;
  }
  return linearSearch(arr, target, i + 1);
}
console.log(linearSearch(inputArr, 77));
