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
  
  