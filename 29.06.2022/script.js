//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<q1<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let num = 5;
// for (let i = 1; i <= num; i++) {
//   let star = "";
//   for (let j = 1; j <= num; j++) {
//     if (i==j||i+j==6) {
//       star = star + "     *";
//     }else{
//       star = `${star}       `;
//     }
//   }
//   console.log(star);
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<q2<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// let n=5;
// let px=n;
// let py=n;
// for(let i=1;i<n;i++){
//     let star = "";
//     for(let j=1;j<n*2;j++){
//         if(j==px||j==py){
//             star+="*"
//         }else{
//             star+=" "
//         }
//     }
//     px++;
//     py--;
//     console.log(star)
// }

// px=1;
// py=n*2-1;
// for(let i=1;i<=n;i++){
//     let star = "";
//     for(let j=1;j<n*2;j++){
//         if(j==px||j==py){
//             star+="*"
//         }else{
//             star+=" "
//         }
//     }
//     px++;
//     py--;
//     console.log(star)
// }

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
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>q5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let num=3;
for(let i=1;i<=num;i++){
    star=""
    for(var j=1;j<=num-i;j++){
        star+=" "
    }
    for(var k=1;k<=i;k++)
    {
        if(i==1){
            star+=k
        }else if(i==2){
            star+=k+1
        }else{
            star+=k+2 
        }
        
    }
    for(let k=2;k<=i;k++)
    {
        if(i==3&&k==2){
            star+=k*2

        }else{
             star+=k
        }
       
    }
    console.log(star)
}
num=2;
for(let i=num;i>=1;i--){
    star=" "
    for(var j=1;j<=num-i;j++){
        star+=" "
    }
    for(var k=1;k<=i;k++)
    {
        if(i==1){
            star+=k
        }else if(i==2){
            star+=k+1
        }else{
            star+=k+2 
        }
        
    }
    for(let k=2;k<=i;k++)
    {
        star+=k
    }
    console.log(star)
}