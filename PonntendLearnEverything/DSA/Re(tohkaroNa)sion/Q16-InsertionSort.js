const nums = [5, 2, 3, 1];

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let curr = arr[i];
//     for (let j = i - 1; j >= 0; j--) {
//       if (curr < arr[j]) {
//         const temp = arr[j];
//         arr[j] = curr;
//         arr[j + 1] = temp;
//       } else {
//         break;
//       }
//     }
//     console.log(arr);
//   }
//   //   return arr;
// }

// console.log(selectionSort(nums));


function insertionSortRecursive(arr, n) {

    if (n <= 1) {
        return;
    }       

    insertionSortRecursive(arr, n - 1);

    let last = arr[n - 1];
    let j = n - 2;

    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = last;  

    return arr;
}