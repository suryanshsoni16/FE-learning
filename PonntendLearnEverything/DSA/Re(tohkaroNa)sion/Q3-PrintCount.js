function PrintCount(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  PrintCount(n - 1);
}

PrintCount(5);
