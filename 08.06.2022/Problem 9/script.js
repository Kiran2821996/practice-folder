// Take 3 integers A,B,C which denote the angles of a triangle, and return 'VALID' if the angles can form a valid triangle or 'NOT VALID' if the angles cannot form a valid triangle. Print the type of triangle in case it is valid

// Constraints:
// 0 <= A,B,C <= 180
let a = parseInt(prompt("Enter an 1st Angle"));
let b = parseInt(prompt("Enter an 2nd Angle"));
let c = parseInt(prompt("Enter an 3rd Angle"));

if (a+b+c===180){
    window.alert("VALID");
    if(a==b && b==c){
        window.alert("EQUILALTERAL"); 
    }else if(a==b||a==c||b==c){
        window.alert("ISOSCELES"); 
      }else{
       
        window.alert("SCALENE"); 
    }
    
  } else{
    window.alert("NOT VALID");  
    window.alert(" "); 
      }
  