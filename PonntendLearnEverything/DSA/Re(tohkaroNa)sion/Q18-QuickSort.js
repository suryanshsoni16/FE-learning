// Using two new arrays

const nums = [5, 2, 3, 1, 7, 41, 6, 4];

// function quickSort(nums) {
//   if (nums.length <= 1) {
//     return nums;
//   }

//   let pivot = nums[nums.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] < pivot) {
//       left.push(nums[i]);
//     } else if (nums[i] > pivot) {
//       right.push(nums[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort(nums));

// Two pointers approach

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low >= high) return;

  let pivot = arr[low];

  let i = low + 1;
  let j = high;

  while (i <= j) {
    // find bigger element
    while (arr[i] <= pivot && i <= high) {
      i++;
    }

    // find smaller element
    while (arr[j] > pivot && j >= low) {
      j--;
    }

    // swap wrong elements
    if (i < j) {
      console.log("swap:", arr[i], arr[j]);

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // put pivot in correct position
  console.log("pivot swap:", arr[low], arr[j]);

  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  quickSort(arr, low, j - 1);
  quickSort(arr, j + 1, high);

  return arr;
}
