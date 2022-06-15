// Take a number , print "Hello" if the number is divisible by 3, print "World" if the number is divisible by 5, or print "HelloWorld" if the number is divisible by both 3 and 5.
// if all these conditions are false than print the number itself
let a = parseInt(prompt("Enter an Integer "));
  
// write your code here
if(a%3==0 && a%5==0){
 console.log("HelloWorld");
  
}
 else if(a%5==0){
console.log("World");
   
 }
else if(a%3==0 ){
  console.log("Hello")
}else{
  console.log(a)
}
