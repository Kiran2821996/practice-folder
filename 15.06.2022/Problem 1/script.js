// Take a 3 digit integer, print "YES" if the reversed integer is equal to the input. Print "NO" otherwise.

let a = parseInt(promt("Enter the number"))
let b = parseInt(promt("Enter the number")) 
  
// write your code here

// write your code here
let hcf;
for (let i = 1; i <=a && i <= b; i++) {
  if( a % i == 0 && b % i == 0) {
      hcf = i;
  }
}
let lcm = (a * b) / hcf;
console.log(hcf);
console.log(lcm);
