// Take a 3 digit integer, print "YES" if the reversed integer is equal to the input. Print "NO" otherwise.

// Constraints:
// 99 < input < 1000
let a = parseInt(prompt("Enter an Integer"));

let firstpart = a%10;
 let secondpart = Math.floor(a/10);
 let se= secondpart%10;
 let thirdpart = Math.floor(secondpart/10);
  
let n =firstpart*100+se*10+thirdpart;
if (n == a  ){
    window.alert("YES-the reversed integer is equal to the input");
} else{
    window.alert("NO-the reversed integer is not equal to the input");       
    }
