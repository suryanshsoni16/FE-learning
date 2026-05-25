function reverseString(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    const temp = str[l];
    str[l] = str[r];
    str[r] = temp;

    l++;
    r--
  }
    return str;
}

console.log(reverseString(["h","e","l","l","o"])); // olleh
