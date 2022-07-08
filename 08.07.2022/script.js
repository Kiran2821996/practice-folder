//Given two integer arrays, remove all the odd numbers from both the arrays and merge them into one array. Return the new array in descending order.
// function oddOne(arr1, arr2){
//     let arr= arr1.concat(arr2)
//     let oddExtract=arr.filter(a=>a%2==0)
//       return oddExtract.sort((a,b)=>b-a)
//     }
//     console.log(oddOne([5,20],[10,2]))
//Given an array, if the array contains duplicate elements return true, else return false
// function isDuplicate(arr){
//     let count=0
//  for(let i=0;i<arr.length;i++){
  
//  if(arr.indexOf(arr[i])!=arr.lastIndexOf(arr[i])){
 
//    count++
//  }
//  }
  
//    if(count>0){
//      return true
//    }else{
//     return false
//    }
 
//  }
//  console.log(isDuplicate([1,4,3,2]))
 //You are given a sorted array in ascending order, remove the duplicate elements and return the new sorted array.
//  function deleteDuplicate(arr){
//     for(let i=0;i<arr.length;i++){
//           for(let j=arr.length;j>=i+1;j--){
//               if(arr[i]==arr[j]){
//               arr.splice(i,1)
//               }
//           }
//       }
//       return arr
//   }
//   console.log(deleteDuplicate([1, 2,3,3,4,5,6,6,7]))
//When God was creating planets, he forgot to create one planet. Can you find which planet it is ?
function lostPlanet(planets){
 
    let sorted=planets.sort((a,b)=>a-b)
     let minNum = Math.min.apply(Math,sorted)
     let maxNum = Math.max.apply(Math,sorted)
    for(let i=minNum;i<maxNum;i++){
     if(sorted.indexOf(i)<0){
           return i
     }
    }
    
 }
 console.log(lostPlanet([1, 5, 7, 8, 3, 10, 2, 6]))