//check if array is srted or not 

const inputArr = [2,3,6,77,88,90];
function isSorted(arr, i = 1) {
// base case
if (i >= arr.length) return true;
// check current pair
if (arr[i] < arr[i - 1]) return false;
// recursive call
return isSorted(arr, i + 1);
}
console.log(isSorted(inputArr)); // true
console.log(isSorted([1, 3, 2, 4])); // false
