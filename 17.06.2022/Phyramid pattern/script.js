// printing pyramid
let rowp = 10;
for (let i = 1; i <= rowp; i++) {
  for (let k = 1; k <= (rowp - i); k++) {
    document.write("&nbsp;");
  }
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}