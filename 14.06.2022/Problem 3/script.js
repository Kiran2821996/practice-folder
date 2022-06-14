// Take marks in five subjects,find the average and return the corresponding grade .
let a = parseInt(prompt("Enter an Integer "));
let b = parseInt(prompt("Enter an Integer "));
let c = parseInt(prompt("Enter an Integer "));
let d = parseInt(prompt("Enter an Integer "));
let e = parseInt(prompt("Enter an Integer "));


// write your code here
let avg = (a+b+c+d+e)/5;
if(avg>=90){
  console.log("A")
}else if(avg>=80 && avg<90){
   console.log("B")
}else if(avg>=70 && avg<80){
  console.log("C")
}else if(avg>=50 && avg<70){
  console.log("D")
}else{
  console.log("F")
}