// Take two integers a,b and print all the even numbers in between them, excluding the input integers.

// Constraints:
// 0 <= a < b <= 100
let a = parseInt(prompt("Enter an Integer"));
let b = parseInt(prompt("Enter an Integer"));
for ( let i=a; i <= b; i++){
	if(i%2==0){
	  window.alert(i)
	}
		}