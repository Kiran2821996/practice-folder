//Check if a number is even or odd and print it out. Use switch case to solve the problem.

let a = parseInt(prompt("Enter an Integer"));

  
// write your code here


switch (a % 2) {
  case 0:
      console.log("EVEN");
      break;
  case 1:
      console.log("ODD");
      break;
  default:
      console.log("NEUTRAL");
}

  


