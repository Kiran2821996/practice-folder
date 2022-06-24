//Print all the numbers in the given range.
// function pri(a,b){
//     if(a>b)
//     return;
//     console.log(a);
//     pri(a+1,b)
// } pri(10,19)

// Print all the numbers in descending order in the given range
// function pri(a,b){
//     if(a>b)
//     return ;
//     console.log(b)
// return pri(a,b-1)

// }pri(50,60)

//Print all the even numbers in the given range
// function even(a,b){
//     if(a>b){
//         return
//     }
//     if(b%2==0){
//         even(a,b-2)
//     }else{
//         even(a,b-1)
//     }
//     if(b%2==0){
//         console.log(b)
//     }
// }even(101,115)

//Find the factorial of a given number n.
// function fact(num,facto){

//     if(num>0){
//        facto=facto*num;
//        return fact((num-1),facto)
//     }
//     return facto
// }
// console.log(fact(12,1))



//Find the nth digit of the fibonacci series.
// function fibo(first,second,counter){
//     if(counter<10){
//        var c= first+second;
//        return fibo(second,c,counter+1);
//     }
//     console.log(first);
//  }
//  fibo(1,1,1)

//Print sum of all the numbers in the given range.
// let s=0
// function sum(n1,n2){
//     if(n1<=n2){
//         s+=n1
//         return sum(n1+1,n2)
//     }else{
//         return s
//     }
// }
// console.log(sum(1,5))

//Print product of all the numbers in the given range.
// let p=1
// function sum(n1,n2){
//     if(n1<=n2){
//         p*=n1
//         return sum(n1+1,n2)
//     }else{
//         return p
//     }
// }
// console.log(sum(1,5))
 
//Write the recursive function to check whether a given number is prime or not
// function isPrime(n, i)
// {
//     if (n <= 2)
//         return (n == 2) ? true : false;
//     if (n % i == 0)
//         return false;
//     if (i * i > n)
//         return true;
    
//     return isPrime(n, i + 1);
// }

// if (isPrime(2, 2))
// console.log("Yes");
// else
// console.log("No");


// Print sum of all the first 10 even numbers.

// function recursiveEvenSum (num, sum = 0){
   
//     num = num % 2 === 0 ? num : num - 1;
//     if(num){
//        return recursiveEvenSum(num - 2, sum+num);
//     }
//     return sum;
//  };
//  console.log(recursiveEvenSum(10))

// Write a recursive program to find the power of given number and exponent. (without using Math.pow and exponent operator(**)).
// function pow(x,n){
//     if(n==0)
//     return 1
//     else
//     return x*pow(x,n-1)
//  }
//  console.log(pow(2,4))