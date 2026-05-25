/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let arr = s.split("");
  let i = 0;

  while (i < arr.length - 1) {
    // Adjacent duplicate found
    if (arr[i] === arr[i + 1]) {
      // Remove both characters
      arr.splice(i, 2);

      // Move back
      if (i > 0) {
        i--;
      }
    } else {
      i++;
    }
  }

  return arr.join("");
};
