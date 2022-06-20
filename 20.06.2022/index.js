let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];




// No if else is allowed.
// Take 3 numbers and find and return biggest of them. If all three numbers are same than print "None of them is biggest"

// if there are two numbers same as biggest than also print "None of them is biggest"



switch (true) {
  case ((a == b)||(a == c)):
    console.log("None of them is biggest");
    break;
 case ((b == c)||(b == a)):
    console.log("None of them is biggest");
    break;
  case  ((c == a)||(c == b)):
    console.log("None of them is biggest");
    break;
  default:
    console.log( Math.max(a, Math.max(b, c)));
}




// Take an integer ranging from 0 - 6 as input and print out the corresponding weekday. 0 corresponds to Sunday and 6 corresponds to Saturday.

switch (a) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
     console.log("Friday");
      break;
    case 6:
     console.log("Saturday");
  }




//   Check if a number is even or odd and print it out. Use switch case to solve the problem.
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
 

