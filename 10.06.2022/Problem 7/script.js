
// Take an integer and print "YES" if the integer is prime and "NO" if it is not.
let a = parseInt(prompt("Enter an Integer"));
let check = true  
for( let i=2;i<a;i++) {

if(a%i==0){
   check = false
}
}
if(check==true){
  window.alert("YES");
}else{
window.alert("NO")
}