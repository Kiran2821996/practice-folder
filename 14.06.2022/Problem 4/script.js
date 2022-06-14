// Print the sum of all even numbers from 1 to 100.

  
let a = parseInt(prompt("Enter an Integer "));

  // write your code here
  

 let amount = 0;
  if(a <= 50){
	  amount = a*1;
  }else if(a <= 150){
	  amount = (a-50)*2 + 50;
  }else if(a <= 250){
	  amount = (a-150)*3 + 100*2 + 50*1 ;
  }else{
	  amount = (a - 250)*4 + 100*3 + 100*2 + 50; 
  } 	
  let new_amount = 0;
  if(amount>150){
	  new_amount = amount + amount*20/100;
	  console.log(new_amount);
  }else{
    console.log(amount);
  } 