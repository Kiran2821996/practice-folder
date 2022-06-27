//Take a number and find the sum all the even digits of the number. if there are no even digit in number return -1.
function evenSum(n){
    let  rem,sum = 0;
    
    while (n!=0) {
        rem = n % 10; 
        if (rem % 2 === 0) {
           sum += rem;
        }
       n = Math.floor(n / 10);
    }
    if(sum==0){
      return -1
    }else{
      return sum
    }
    
     
    }
    console.log( evenSum(1234))

//For number from 1 to "n" count total numbers that are divisible by 3, also find sum of all numbers that are divisible by 5, if number is divisible by both 3 and 5 take product of those number. and finally return the sum of all three ans.
function calculate(n){
    let s1 = 0,s2 = 0,p1 = 1,sum = 0;
   
     for (let i = 1; i <= n; i++) {
       if (i % 3 == 0) {
         s1++;
       }
       if (i % 5 == 0) {
         s2=s2+i;
       }
       if (i % 5 == 0 && i % 3 == 0) {
         p1 = p1 * i;
       }
     }
     if (p1 == 1) {
       return (sum = s1 + s2);
     } else {
       return (sum = p1 + s1 + s2);
     }
     
   }
   
   console.log(calculate(10))

//Take an integer N and print the sum of series given below upto N numbers.
function sum(n){
    let t=0,sum=0
  for(i=1;i<=n;i++){
    t=t+i;
    sum=sum+(i/t)
  }
    return parseFloat(sum.toFixed(3)) 
  }
  console.log(sum(3))


//Input a Number and return number of digits.

function numberOfDigits(num,count=0){

    if(num>0){
      num=Math.floor(num/10);
      count=count+1
      return numberOfDigits(num,count)
    }
    return(count)
  }
  console.log(numberOfDigits(10))