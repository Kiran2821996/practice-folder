// Take an integer ranging from 0 - 6 as input and print out the corresponding weekday. 0 corresponds to Sunday and 6 corresponds to Saturday.


let a = parseInt(promt("Enter the number"))
 
  
// write your code here
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