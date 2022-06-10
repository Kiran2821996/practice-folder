// Take an integer and print the multiplication table of the interger upto a factor of 10 in this form -> n x 1 = n
let a = parseInt(prompt("Enter an Integer"));

for(let i = 1; i <= 10; i++) {
  let p = i * a;
  window.alert(`${a} x ${i} = ${p}`);
}


