// Take two integers a,b and return the count of all the odd numbers in between them, inclusive of the input.
let a = parseInt(prompt("Enter an Integer "));
let b = parseInt(prompt("Enter an Integer "));
let count =0;
for ( let i=a; i <= b; i++){
	if(i%2!=0){
	  count ++
	}

		}
			console.log(count) 