//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<q1<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let num = 4;
// for (let i = 0; i <= num; i++) {
//   let star = "";
//   for (let j = 0; j <= num; j++) {
//     if (i==j || i+j==4) {
//       star = star + "     *";
//     }else{
//       star = `${star}       `;
//     }
//   }
//   console.log(star);
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<q2<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let n = 3;
// let star = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = n; j > i; j--) {
//     star += " ";
//   }
//   for (let k = 0; k < i * 2 - 1; k++) {
//     if (k === 0 || k === 2 * i - 2) {
//       star += "*";
//     }
//     else {
//       star += " ";
//     }
//   }
//   star += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//    for (let j = 0; j < i; j++) {
//       star += " ";
//     }
//     for (let k = (n - i) * 2 - 1; k >= 1; k--) {
//       if (k === 1 || k === (n - i) * 2 - 1) {
//         star += "*";
//       }
//       else {
//         star += " ";
//       }
//     }
//     star += "\n";
//   }
// console.log(star);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>q3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let num=5;
// let count=1;
// for(let i=1;i<=num;i++){
//   let stars="  "
//   for(let j=1;j<=i;j++){
//     stars=`${stars}  ${count}`;
//     count= count+1
//   }
//   console.log(stars)
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>q4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let num=5;
// let count=0;
// let a=0;b=1
// for(let i=1;i<=num;i++){
//   let stars="  "
//   for(let j=1;j<=i;j++){
//     stars=`${stars} ${count}`;
//     count= a+b;
//     a=b;
//     b=count
//   }
//   console.log(stars)
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

