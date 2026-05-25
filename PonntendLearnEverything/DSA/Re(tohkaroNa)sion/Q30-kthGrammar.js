var kthGrammar = function (n, k) {
  //base case
  if (n === 1) {
    return 0;
  }

  let length = Math.pow(2, n - 1);
  let mid = Math.floor(length / 2);

  if (k <= mid) {
    return kthGrammar(n - 1, k);
  } else {
    return 1 - kthGrammar(n - 1, k);
  }


};

console.log(kthGrammar(2,1));
