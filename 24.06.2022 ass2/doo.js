function sum(a) {
  let s1 = 0,
    s2 = 0,
    p1 = 1,
    sum = 0;

  for (let i = 1; i <= a; i++) {
    if (i % 3 == 0) {
      s1++;
    }
    if (i % 5 == 0) {
      s2++;
    }
    if (i % 5 == 0 && i % 3 == 0) {
      p1 = p1 * i;
    }
  }
  if (p1 == 1) {
    return (sum = s1 + s2);
  } else {
    return (sum = p1 + s1 + s2);
  }
}
console.log(sum(10));

// }
// sum(20)
