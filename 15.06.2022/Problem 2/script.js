// Take an integer ranging from 0 - 6 as input and print out the corresponding weekday. 0 corresponds to Sunday and 6 corresponds to Saturday.


let a = parseInt(promt("Enter the number"))
 
  
// write your code here

 
// write your code here




  let sum = 0;
  while (a != 0) {
      sum = sum + a % 10;
      a = parseInt(a / 10);}
      console.log(sum)
  