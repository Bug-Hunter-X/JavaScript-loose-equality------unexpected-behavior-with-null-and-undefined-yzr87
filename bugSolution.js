function foo(a) {
  if (a === null) {
    return 0;
  } else if (a === undefined) {
    return -1; // Or handle undefined differently
  }
  return a + 1;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // -1
console.log(foo(5)); // 6