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
//     if(a%2==0){
//         even(a+2,b)
//     }else{
//         even(a+1,b)
//     }
//     if(a%2==0){
//         console.log(a)
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

// function sum(n1,n2,s=0){
//    if(n1<=n2){
//     return sum(n1,n2-1,s+n2)
//    }
// return s
// }
// console.log(sum(1,5))

//Print product of all the numbers in the given range.

// function sum(n1,n2,s=1){
    // console.log(n1,"n1",n2,"n2",s,"s","outside1")
   // if(n1<=n2){
    // s=s+n2
    // n2=n2-1
    // console.log(n1,"n1",n2,"n2",s,"s","inside")
//    console.log(n1,"n1",n2,"n2",s,"s","outside2")
//    return s
// }
// console.log(sum(1,5))
 
//Write the recursive function to check whether a given number is prime or not
// function checkIfPrime(num,temp=2){
//     if(temp<num ){
//         if(num%temp == 0){
//             return "Not a Prime number";
//         }else{
//             return checkIfPrime(num,temp+1);
//         }
//     }else {
//         return "Prime Number";
//     }
// }
// let ret = checkIfPrime(5);
// console.log(ret);


// Print sum of all the first 10 even numbers.

// function sum(num){
   
//     if(num==0){
//        return 0
//     }else if(num%2!==0){
//         return num+sum(num-1)
//     }else{
//         return num+sum(num-2)
//     }
//  };
//  console.log(sum(11))


// Write a recursive program to find the power of given number and exponent. (without using Math.pow and exponent operator(**)).
// function pow(x,n){
//     if(n==0)
//     return 1
//     else
//     return x*pow(x,n-1)
//  }
//  console.log(pow(2,4))