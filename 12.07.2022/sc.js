//POINTERS
let nums=[2,3,5,6,7,8];
let target=9;
let left=0;
let right=nums.length-1;
while(left<right){
    if(nums[left]+nums[right]===target){
        console.log(nums[left],nums[right]);
        left=left+1;
        right=right-1;
    }else if(nums[left]+nums[right]>target){
        right=right-1;
    }else if(nums[left]+nums[right]<target){
        left=left+1
    }

}
//Matrix
let matrix=[[1,2,3,],
            [4,5,6],
            [7,8,9]
        ];

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(`${[i]} ${[j]}---->${matrix[i][j]}`)
    }
}
