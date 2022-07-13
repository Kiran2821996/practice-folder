//LINEAR SEARCH 

let nums = [2, 3, 5, 6, 7, 8];
let target = 5;
function isPresent(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return true
        }
    } return false
}
console.log(isPresent(nums,target))
//BINARY SEARCH
// let nums = [16, 23, 34, 43, 56, 62, 78, 81, 95];
// let target = 78;
// let start = 0;
// let end = nums.length - 1;

// while (start <= end) {
//   let middle = Math.floor((start + end) / 2);
//   if (nums[middle] == target) {
//     console.log("found at", middle);
//     start += 1;
//     end -= 1;
//     break;
//   } else if (nums[middle] < target) {
//     start = middle + 1;
//   } else {
//     end = middle - 1;
//   }
  
// }
