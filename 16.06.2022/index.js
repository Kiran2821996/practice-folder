// />>>>>>>>>>print numbers in range<<<<<<<<<<<<</
for(let i=10;i<20;i++){
  console.log(i)
}
// />>>>>>>>>print even numbers<<<<<<<<<<</
for(let i=2;i<10;i++){
  if(i%2==0){
    console.log(i)
  }
}
// />>>>>>>>>>>>print sum between the range<<<<<<<<<<<</
let um = 0;
for(let i=2;i<10;i++){
  sum+=i
 
}
 console.log(sum)
// />>>>>>>>>>>>>>>>>>>print factorial<<<<<<<<<<<<<<<<<</
 let res=1
 for (let i = 2; i <= 4; i++){
  res = res* i;
  
 }
     console.log(res)
// />>>>>>>>>>>>>>>>>>.print a table of any number<<<<<<<<<<<<<</
for(let i = 1; i <= 10; i++) {
    let p = i * 2;
    console.log(`2 x ${i} = ${p}`);
}
// />>>>>>>>>>>>>>>>>>.print a sum of even numbers<<<<<<<<<<<<<</
let sum=0
for(i=15;i<20;i++){
  if(i%2==0){
    sum=sum+i;
    }
}
console.log(sum)
// />>>>>>>>>>>>>>>>>>>>print the values from 50 to 0<<<<<<<<<<<<<<<<<</
for(let i=50;i>0;i--){
  console.log(i)
}
// />>>>>>>>>>>>>>>>first 20 even numbers in reverse order<<<<<<<<<<<<</
for(let i=20;i>0;i--){
  if(i%2==0){
     console.log(i)
  }
}
// find prime numbers
let a = 7
if(a==1){
  console.log("its neither a prime or composie number")
}else if(a<0){
  console.log("its not a prime number")
  
}else{
  for(var i=2;i<a;i++){
    if(a%i==0){
     var r = "is notaprime"
     break;
    }else{
      var r = "is prime"
    }
   
  }
   console.log(r)
}