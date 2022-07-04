//<<<<<<<<<<<<<<<<<<CallBack with Operators>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const operationsOnNumbers =(message,callback)=>{
//     console.log(message)
//      callback()
//  }
 
//  const toAdd=()=>console.log("11"+"12");
//  const toSub=()=>console.log("11"-"12");
//  const toDiv=()=>console.log("11"/"12");
//  const toMulti=()=>console.log("11"*"12");
 
//  operationsOnNumbers("This is addition of two strings",toAdd)
//  operationsOnNumbers("This is Subtraction of two strings",toSub)
//  operationsOnNumbers("This is Multiply of two strings",toDiv)
//  operationsOnNumbers("This is Division of two strings",toMulti)


 //<<<<<<<<<<<<<<<<<<<CallBack with Areas>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const operationsOnNumbers =(message,callback)=>{
//     console.log(message)
//      callback()
//  }
 
//  const toCalculateTheAreaOfSquare=()=>{
//     let side =4
//     let areaOfSquare = side*side
//     console.log(areaOfSquare);
// }
//  const toCalculateTheAreaOfRecangle=()=>{
//     let length =4,width =5
//     let areaOfRectangle = length*width
//     console.log(areaOfRectangle);
// }
//  const toCalculateTheAreaOfCircle=()=>{
//     let radus =5
//     let areaOfCircle = Math.PI*radus*radus
//     console.log(areaOfCircle);
// }
//  const toCalculateTheAreaOfTriangle=()=>{
//     let length =4,width =5
//     let areaOftriangle =(1/2)*length*width
//     console.log(areaOftriangle);
//  }
 
//  operationsOnNumbers("This is area of square",toCalculateTheAreaOfSquare)
//  operationsOnNumbers("This is area of rectangle",toCalculateTheAreaOfRecangle)
//  operationsOnNumbers("This is area of circle",toCalculateTheAreaOfCircle)
//  operationsOnNumbers("This is area of triangle",toCalculateTheAreaOfTriangle)



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<callback for perimeter>>>>>>>>>>>>>>>>>>>>>>>>>>.

const operationsOnNumbers =(message,callback)=>{
    console.log(message)
     callback()
 }
 
 const toCalculateThePerimeterOfSquare=()=>{
    let side =4
    let PerimeterOfSquare = 4*side
    console.log(PerimeterOfSquare);
}
 const toCalculateThePerimeterOfRecangle=()=>{
    let length =4,width =5
    let PerimeterOfRectangle = 2*(length+width)
    console.log(PerimeterOfRectangle);
}
 const toCalculateThePerimeterOfCircle=()=>{
    let radus =5
    let PerimeterOfCircle =2*Math.PI*radus
    console.log(PerimeterOfCircle);
}
 const toCalculateThePerimeterOfTriangle=()=>{
    let side1=4,side2=6,side3=8
    let PerimeterOftriangle =side1+side2+side3
    console.log(PerimeterOftriangle);
 }
 
 operationsOnNumbers("This is Perimeter of square",toCalculateThePerimeterOfSquare)
 operationsOnNumbers("This is Perimeter of rectangle",toCalculateThePerimeterOfRecangle)
 operationsOnNumbers("This is Perimeter of circle",toCalculateThePerimeterOfCircle)
 operationsOnNumbers("This is Perimeter of triangle",toCalculateThePerimeterOfTriangle)