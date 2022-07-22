//Factorial
// function getFactorial(num) {
//   if (num < 0) {                      //ERROR CONDITION
//     return -1;
//   }
//   if (num == 1 || num == 0) {         //BASE CONDITION
//     return 1;
//   }
//   return num * getFactorial(num - 1); //MANIPULATION
// }
// console.log(getFactorial(5));

//Adding elements of an given array
// let arr=[1,2,3,4,5,6]
// function findSum(arr){
//     if(arr.length===0){
//         return -1
//     }
//     if(arr.length===1){
//         return arr[0]
//     }
//     return arr.shift()+findSum(arr)
// }
// console.log(findSum(arr))




//Adding elemrnts in the sum of the range
 function getSumRange(first,secong){
if(first==0){
    return 0
}
if(first===secong){
    return first;
}
return first+getSumRange(first+1,secong)
 }
 console.log(getSumRange(5,10))