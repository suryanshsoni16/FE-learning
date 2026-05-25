/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Remove extra spaces
  s = s.trim().replace(/\s+/g, " ");

  // Reverse whole string
  let arr = s.split("").reverse();

  let start = 0;

  // Reverse each word
  for (let end = 0; end <= arr.length; end++) {
    if (end === arr.length || arr[end] === " ") {
      let left = start;
      let right = end - 1;

      while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
      }

      start = end + 1;
    }
  }

  return arr.join("");
};
