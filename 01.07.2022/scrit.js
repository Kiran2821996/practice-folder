//CALLBACK FUNCTION
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<step 1 : introduced 2 functions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function firstAction(){
//     console.log("This is first action")
// }
// function secondAction(){
//     console.log("Thi is second action")
// }
 
// firstAction()
// secondAction()
// <<<<<<<<<<step 2: introduced callback function by setTimeout where firstAction function is passed as a callback>>>>>>>>>>
// function firstAction(){
//     console.log("This is first action")
// }
// function secondAction(){
//     console.log("Thi is second action")
// }
// setTimeout(firstAction,5000)
// secondAction()

// for(let i=1;i<=5;i++){
   
//     function getLoop(){
//         console.log(i);
//     }
// }
// setTimeout(getLoop,2000)

//<<<<<<<<<<<<<<<<<<<<<<<<<<< step 3: introduced second callback function  in firstAction()>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function firstAction(){
//     console.log("This is first action")
//     setTimeout(secondAction,2000)
// }
// function secondAction(){
//     console.log("This is second action")
// }
// setTimeout(firstAction,5000)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<step 4: introduced nested callback function in setTimeout()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function firstAction(callback){
//     console.log("This is first action")
//     setTimeout(callback,2000)
// }
// function secondAction(){
//     console.log("This is second action")
// }
// setTimeout(()=>firstAction(secondAction),5000)
// <<<<<<<<<<<<<<<<<<<<<<step5: Making secondAction as a reusable function using callback()>>>>>>>>>>>>>>>>>>>>>>
// function firstAction(callback,message){
//     console.log(message)
//     setTimeout(callback,2000)
// }
// function secondAction(message){
//     console.log(message)
// }
// setTimeout(()=>firstAction(()=>secondAction("This is second action"),("This is first action")),5000)



/// result "This is first action" is consoled after 5secs and "This is second action" is consoled after 2sec+5sec=7sec

function getNum(n,fact=1){
    if(n<=0){
        return
    }
    console.log(n);
    return getNum(n-1)

}
getNum(10)