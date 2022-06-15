// Take marks in five subjects,find the average and return the corresponding grade .
let a = parseInt(prompt("Enter an Integer "));



// write your code here
 
// write your code here

let rem,temp,result=0;
temp=a;
while(a>0){
 rem= a%10;
 a=a/10;
 result=result*10+rem;
}
if(result==temp){
 console.log("YES")
}else{
 console.log("NO")
}