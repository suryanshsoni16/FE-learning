function kthCharacter(k) {
  function solve(word) {
    // base condition
    if (word.length >= k) {
      return word[k - 1];
    }

    let temp = "";

    //make next char
    for (let ch of word) {
      let next = String.fromCharCode(ch.charCodeAt(0) + 1);
      temp += next;
    }
    // recursive call
    return solve(word + temp);
  }
  return solve("a")
}

console.log(kthCharacter(3));
