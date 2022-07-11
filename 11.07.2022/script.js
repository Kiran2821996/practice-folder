function flames(a, b) {
  let sum = 0,result = 0;
  let a1 = a.toLowerCase().split("");
  let b1 = b.toLowerCase().split("");

  let n = a1.length;
  let m = b1.length;
  let count = n + m;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a1[i] == b1[j]) {
        b1[j] = -1;
        sum = sum + 2;
      }
    }
  }

  result = count - sum;

  if (result <= 6) {
    if (result == 0 || result == 5) {
      return "MARRIAGE";
    } else if (result == 1) {
      return "SIBLINGS";
    } else if (result == 2 || result == 4) {
      return "ENEMY";
    } else if (result == 3) {
      return "FRIENDS";
    } else {
      return "AFFECTION";
    }
  } else {
    if (result % 6 == 0 || result % 6 == 5) {
      return "MARRIAGE";
    } else if (result % 6 == 1) {
      return "SIBLINGS";
    } else if (result % 6 == 2 || result % 6 == 4) {
      return "ENEMY";
    } else if (result % 6 == 3) {
      return "FRIENDS";
    } else {
      return "AFFECTION";
    }
  }
}
console.log(flames("Maharaj", "Rani"));
