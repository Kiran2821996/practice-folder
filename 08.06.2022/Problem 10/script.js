// Take a 4 digit integer denoting a year and print out "YES" if it is a leap year and "NO" if it is not a leap year.

// Constraints:
// 1000 <= input <= 9999
let a = parseInt(prompt("Enter the year to check wether its a leap year"));

if ((a % 4 == 0 && a % 100 != 0) || a%400==0){
    window.alert("YES-it is a leap year");
  } else{
    window.alert("NO-it is not a leap year");       
      }