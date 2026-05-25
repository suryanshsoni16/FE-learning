const nums = [5, 2, 3, 1];

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//         const temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
//   }
//   return arr;
// }


// console.log(selectionSort(nums));


function selectionSortRecursive(arr, start = 0) {
  if (start >= arr.length) {
    return arr;
  }
  let minIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  const temp = arr[start];
  arr[start] = arr[minIndex];
  arr[minIndex] = temp;
  return selectionSortRecursive(arr, start + 1);
}

console.log(selectionSortRecursive(nums));