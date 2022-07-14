//sum of all elements
// let matrix=[
//             [1,2,3,4],
//             [5,6,7,8],
//             [9,10,11,12],
//             [13,14,15,16]
//            ]
// let rows=matrix.length;
// let cols=matrix[0].length;
// let sum=0
// for (let i=0;i<rows;i++){
//     for(let j=0;j<cols;j++){
//         sum+=matrix[i][j]
//        
//     }
// }
// console.log(sum)
//Sum of all Even digits in  matrix
// let matrix=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
//    ]
// let rows=matrix.length;
// let cols=matrix[0].length;
// let sum=0
// for (let i=0;i<rows;i++){
// for(let j=0;j<cols;j++){
//     if((matrix[i][j])%2==0){
//         sum+=matrix[i][j]
//     }
// }
// }
// console.log(sum)
//Sum of all diagnol elements
// let matrix=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
//    ]
// let rows=matrix.length;
// let cols=matrix[0].length;
// let sum=0
// for (let i=0;i<rows;i++){
// for(let j=0;j<cols;j++){
//     if(i==j){
//         sum+=matrix[i][j]
//     }
// }
// }
// console.log(sum)
//Sum of all opp diagnol elements
let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
   ]
let rows=matrix.length;
let cols=matrix[0].length;
let sum=0
for (let i=0;i<rows;i++){
for(let j=0;j<cols;j++){
    if(i+j==3){
        sum+=matrix[i][j]
    }
}
}
console.log(sum)