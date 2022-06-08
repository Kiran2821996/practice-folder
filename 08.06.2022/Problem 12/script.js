// Take an integer ranging from 0 - 6 as input and print out the corresponding weekday. 0 corresponds to Sunday and 6 corresponds to Saturday.

// Constraints:
// 0 <= input <= 6
let a = parseInt(prompt("Enter an Integer from 0-6"));

switch (a) {
    case 0:
        window.alert("The corresponding weekday is Sunday");
      break;
    case 1:
        window.alert("The corresponding weekday is Monday");
      break;
    case 2:
        window.alert("The corresponding weekday is Tuesday");
      break;
    case 3:
        window.alert("The corresponding weekday is Wednesday");
      break;
    case 4:
        window.alert("The corresponding weekday is Thursday");
      break;
    case 5:
        window.alert("The corresponding weekday is Friday");
      break;
    case 6:
        window.alert("The corresponding weekday is Saturday");
  }