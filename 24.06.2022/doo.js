//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Print factorial of a number using recursion.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function fact(num,facto){

     while(num>0){
        facto=facto*num;
        return fact((num-1),facto)
     }
     return facto
}
console.log(fact(12,1))





//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Given a number n, print numbers from 1 to n using recursion.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function pri(a,b){
//    if(a>b)
//    return;
//    console.log(a);
//    pri(a+1,b)
// }
// pri(10,20)




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Given a number n, print numbers from n to 1 using recursion.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function pri(a,b){
//    if(a<b)
//    return;
//    console.log(a);
//    pri(a-1,b)
// }
// pri(20,10)


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Print ‘n’ numbers of Fibonacci series using recursion.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function fibo(first,second,counter){
   if(counter<10){
      var c= first+second;
      return fibo(second,c,counter+1);
   }
   console.log(first);
}
fibo(1,1,1)




//<<<<<<<<<<<<<<<<<<<<<<< Write a Javascript program to count the number of digits a given number has using recursion.>>>>>>>>>>>>>>>>>>>>>>>
// function count_digit(num, count) {
//   if (num != 0) 
//     return count_digit(Math.floor(num / 10), count + 1);
//    console.log(count);
// }
// count_digit(234576, 0);


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Given a number n, print all the even numbers from 1 to n using recursion>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
function Even(L, R)
{

    if (R < L)
    {
        return;
    }

    if (R % 2 == 0 )
    {
        Even(L, R - 2);
    }
    else
    {
        Even(L, R - 1);
    }

    if (R % 2 == 0)
    {
        console.log(R + " ");
    }
}
Even(11,21)








//<<<<<<<<<<<<<<<<<<<<<<<<<Given a number n, print all the odd numbers from 1 to n using recursion.>>>>>>>>>>>>>>>>>>>>>>>>>
// function Odd(L, R)
// {

//     if (R < L)
//     {
//         return;
//     }
//     if (R % 2 == 1 )
//     {
//         Odd(L, R - 2);
//     }
//     else
//     {
//         Odd(L, R - 1);
//     }

//     // Check if R is even
//     if (R % 2 == 1)
//     {
//         console.log(R);
//     }
// }Odd(13,33)


//<<<<<<<<<<<<<<<<<<<<<<<Write a javascript program to check whether the given string is palindrome or not using recursion.>>>>>>>>>>>>>>>>>>>>>>>

//  function num(a,b,c){
  
//    if(b==0){
     
//       return a==c
//    }
//    a= (a*10)+(b%10);
//    b=Math.floor(b/10);
// return num(a,b,c)


//  }
//  if(num(0,129,129)){
//    console.log("it is palendrom")
//  }else{
//    console.log("it is not palendrom")
//  }



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Given a number n, find 2^n using recursion.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function pow(x,n){
   if(n==0)
   return 1
   else
   return x*pow(x,n-1)
}
console.log(pow(2,4))