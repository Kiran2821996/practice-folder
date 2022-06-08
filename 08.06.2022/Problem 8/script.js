// Take 3 distinct integers a,b,c as input and return the second smallest among the input.

// Constraints:
// -1000 <= a,b,c <= 1000
let a = parseInt(prompt("Enter an Integer"));
let b = parseInt(prompt("Enter an Integer"));
let c = parseInt(prompt("Enter an Integer"));

let secondSmallest = Math.max(Math.min(a,b), Math.min(Math.max(a,b),c)); 
window.alert( "The Second smallest among the input is"+ secondSmallest);