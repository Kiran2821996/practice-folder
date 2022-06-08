// Take an integer as input and return "POSITIVE" if the integer is positive, "NEGATIVE" if the integer is negative and "ZERO" if the integer is zero.

// Constraints:
// -10000 <= input <= 10000
let a = parseInt(prompt("Enter an Integer to check its positive or negative"));
if(a>0){
    window.alert("POSITIVE")
  }else if(a<0){
    window.alert("NEGATIVE")
  }else{
    window.alert("ZERO")
  }