// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Usign arrow function>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let calculateCharge = (number_of_days)=>{

//     let amount = 0;
//     if(number_of_days <= 5){
//         amount =number_of_days*0;
//     }else if(number_of_days>=6 && number_of_days<= 10){
//         amount = (number_of_days-5)*3;
//     }else if(number_of_days>=11&&number_of_days<=15){
//         amount = (number_of_days-10)*4 + 5*3 ;
//     }else{
//         amount = (number_of_days - 15)*5 + 10*4 +5*3;
//     }

//    return amount;
//   }
//   console.log(calculateCharge(10))


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let students=(a,b)=>{
//     let nextTerm;
//     for (let i = 0; i <= 7; i++) {

//         nextTerm = a + b;
//         a = b;
//         b = nextTerm;
//     }
//       return nextTerm
//     }

//     console.log(students(20,30))

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let amPm = (hr, min) => {
//   if (hr == 0) {
//     min = min < 10 ? "0" + min : min;
//     hr = hr < 10 ? "0" + hr : hr;
//     return "12:" + min + " AM";
//   } else if (hr >= 12) {
//     hr = hr - 12;
//     min = min < 10 ? "0" + min : min;
//     hr = hr < 10 ? "0" + hr : hr;
//     if (hr == 0) {
//       return "12:" + min + " PM";
//     } else {
//       return hr + ":" + min + " PM";
//     }
//   } else {
//     min = min < 10 ? "0" + min : min;
//     hr = hr < 10 ? "0" + hr : hr;
//     return hr + ":" + min + " AM";
//   }
// };
// console.log(amPm(17, 6));

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let eligible = (
//   birth_day,
//   birth_month,
//   birth_year,
//   election_day,
//   election_month,
//   election_year
// ) => {
//   let bY = election_year - birth_year;
//   if (bY > 20 && bY <= 50) {
//     return "I can vote";
//   } else if (bY > 50 && bY <= 70) {
//     return "I cannot walk so cannot vote please make an app to vote";
//   } else if (election_month == birth_month && election_day == birth_day) {
//     return "I received an iphone";
//   } else if (bY > 70) {
//     return "I will watch naruto rather than voting";
//   }
// };
// console.log(eligible(10, 5, 1970, 12, 6, 2022));


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let biggest=(a,b,c)=>{
//     let ans =(a>b&&a>c)?1:(b>a&&b>c)?2:(c>=a&&c>b)?3:0
//      switch(ans){
//        case 1:
//          return a;
//        case 2:
//          return b;
//        case 3:
//          return c;
//        case 0:
//          return "None of them is biggest"
         
//      }
   
//    }
//    console.log( biggest(10,20,30))






//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Immediatly Invoked Function Expresion>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// let calculate = (function calculateCharge(number_of_days){

//     let amount = 0;
//     if(number_of_days <= 5){
//         amount =number_of_days*0;
//     }else if(number_of_days>=6 && number_of_days<= 10){
//         amount = (number_of_days-5)*3;
//     }else if(number_of_days>=11&&number_of_days<=15){
//         amount = (number_of_days-10)*4 + 5*3 ;
//     }else{
//         amount = (number_of_days - 15)*5 + 10*4 +5*3;
//     }

//    return amount;
//   })(10)
//   console.log(calculate)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let class= (fuction students(a,b){
//     let nextTerm=0;
//     for (let i = 0; i <= 7; i++) {

//         nextTerm = a + b;
//         a = b;
//         b = nextTerm;
//     }
//       return nextTerm;
//     })(20,30)

//     console.log(class)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let convert=(fuction amPm(hr, min) {
//   if (hr == 0) {
//     min = min < 10 ? "0" + min : min;
//     hr = hr < 10 ? "0" + hr : hr;
//     return "12:" + min + " AM";
//   } else if (hr >= 12) {
//     hr = hr - 12;
//     min = min < 10 ? "0" + min : min;
//     hr = hr < 10 ? "0" + hr : hr;
//     if (hr == 0) {
//       return "12:" + min + " PM";
//     } else {
//       return hr + ":" + min + " PM";
//     }
//   } else {
//     min = min < 10 ? "0" + min : min;
//     hr = hr < 10 ? "0" + hr : hr;
//     return hr + ":" + min + " AM";
//     }

// })(17,6)
// console.log(convert);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let result = (function eligible(
//   birth_day,
//   birth_month,
//   birth_year,
//   election_day,
//   election_month,
//   election_year
// ){
//   let bY = election_year - birth_year;
//   if (bY > 20 && bY <= 50) {
//     return "I can vote";
//   } else if (bY > 50 && bY <= 70) {
//     return "I cannot walk so cannot vote please make an app to vote";
//   } else if (election_month == birth_month && election_day == birth_day) {
//     return "I received an iphone";
//   } else if (bY > 70) {
//     return "I will watch naruto rather than voting";
//   }
// })(10, 5, 1970, 12, 6, 2022);
// console.log(result)

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<question5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let bigger =(function biggest(a,b,c){
//     let ans =(a>b&&a>c)?1:(b>a&&b>c)?2:(c>=a&&c>b)?3:0
//      switch(ans){
//        case 1:
//          return a;
//        case 2:
//          return b;
//        case 3:
//          return c;
//        case 0:
//          return "None of them is biggest"
         
//      }
   
//    })(10,20,30)
//    console.log( bigger)
