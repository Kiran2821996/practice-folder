// Take 4 distinct integers a,b,c, d and return the integer of largest value.

// Constraints:
// 0 <= a,b,c, d <= 1000
let a = parseInt(prompt("Enter an Integer"));
let b = parseInt(prompt("Enter an Integer"));
let c = parseInt(prompt("Enter an Integer"));
let d = parseInt(prompt("Enter an Integer"));
if(a>b && a>c && a>d){
    window.alert("The integer of largest value"+a)
  }else if(a<b && b>c && b>d){
    window.alert("The integer of largest value"+b)
  }else if (a<c && b<c && c>d){
    window.alert("The integer of largest value"+c)
  }else{
    window.alert("The integer of largest value"+d)
  }