// Take a 3 digit integer, print "YES" if the reversed integer is equal to the input. Print "NO" otherwise.

let a = parseInt(promt("Enter the number"))
 
  
// write your code here
let firstpart = a%10;
let secondpart = Math.floor(a/10);
let se= secondpart%10;
let thirdpart = Math.floor(secondpart/10);

let n =firstpart*100+se*10+thirdpart;
if (n == a  ){
console.log("YES");
} else{
   console.log("NO");       
  }
