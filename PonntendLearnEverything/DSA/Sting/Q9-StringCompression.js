
var compress = function (chars) {
  let write = 0;
  let read = 0;
  while (read < chars.length) {
    let currentChar = chars[read];
    let count = 0;

    while (read < chars.length && chars[read] === currentChar) {
      read++;
      count++;
    }

    chars[write] = currentChar;
    write++;

    if (count > 1) {
      let countStr = count.toString();

      for (let digit of countStr) {
        chars[write] = digit;
        write++;
      }
    }
  }

  return write;
};


