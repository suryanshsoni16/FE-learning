const inputString = ["a", "b", "c", "c", "b", "a"];

function isPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  }

  if (str[start] !== str[end]) {
    return false;
  }

  return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome(inputString, 0, inputString.length - 1));
