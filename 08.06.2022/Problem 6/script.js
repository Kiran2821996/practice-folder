// Take 3 distinct integers a,b,c and return the integer of largest value.

// Constraints:
// 0 <= a,b,c <= 1000

let a = parseInt(prompt("Enter an Integer"));
let b = parseInt(prompt("Enter an Integer"));
let c = parseInt(prompt("Enter an Integer"));
if(a>b && a>c){
    window.alert("The integer of largest value"+a)
  }else if(a<b && b>c){
    window.alert("The integer of largest value"+b)
  }else{
    window.alert("The integer of largest value"+c)
  }
  


