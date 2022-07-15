//If target present or not
// let str = "Lorem ipsum dolor sit dhoni consectetur adipisicing elit. Nulla, animi."
// let target = "dhoni"
// let arr = str.split(" ")
// let isPresent= false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         isPresent=true;
//     }
// }
// console.log(isPresent)
//Change dhoni to inohd
// let str = "Lorem ipsum dolor sit dhoni consectetur adipisicing elit. Nulla, animi."
// let target = "dhoni"
// let arr = str.split(" ");
// let arr1=[]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//   arr1.push(arr[i].split("").reverse().join(""))  
//     }else {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1.join(" "))
//Anagram
let wrd1="aircampus"
let wrd2="supmacria"
if(wrd1.split("").sort().join("")==wrd2.split("").sort().join("")){
    console.log("ANAGRAM")
}else{
    console.log("NOT AN ANAGRAM")
}