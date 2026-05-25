function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5, 3, 1, 4, 2]));


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Bubble Sort Recursive
var sortArray = function(nums) {

    function bubbleSort(arr, n = arr.length) {

        // base case
        if (n === 1) {
            return arr;
        }

        // one pass
        for (let i = 0; i < n - 1; i++) {

            if (arr[i] > arr[i + 1]) {

                // swap
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

        // recursive call
        return bubbleSort(arr, n - 1);
    }

    return bubbleSort(nums);
};