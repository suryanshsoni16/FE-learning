var reverseString = function (s) {
  function swapArr(start, end) {
    if (start >= end) return;
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    return swapArr(start + 1, end - 1);
  }
  return swapArr(0, s.length - 1);
};
