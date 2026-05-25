function sortZeroOne(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // correct position
    if (arr[left] === 0) {
      left++;
    }

    // correct position
    else if (arr[right] === 1) {
      right--;
    }

    // swap
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left++;
      right--;
    }
  }

  return arr;
}

console.log(sortZeroOne([1, 0, 1, 0, 1, 0]));
