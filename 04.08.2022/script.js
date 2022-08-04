let display = document.querySelector(".display");
let buttons = Array.from(document.getElementsByClassName("buttons"));
buttons.map((btn) => {
  btn.addEventListener("click", (e) => {
    function radians(x) {
      var pi = Math.PI;
      return x * (pi / 180);
    }

    function factorial(x) {
      return x > 1 ? x * factorial(x - 1) : 1;
    }
    let key = e.target.innerText;

    if (key == "C") {
      display.innerText = "";
    } else if (key == "DEL") {
      if (display.innerText == "infinity" || display.innerText == "-infinity") {
        display.innerText = "";
      }
      display.innerText = display.innerText.slice(0, -1);
    } else if (key == "=") {
      if (display.innerText) {
        if (display.innerText.includes("^")) {
          let arr = display.innerText.split("^");
          display.innerText = Math.pow(arr[0], arr[1]);
        } else if (
          display.innerText.includes("(") ||
          display.innerText.includes(")")
        ) {
          display.innerText = display.innerText.replace("(", "*");
          display.innerText = display.innerText.replace(")", "");
          display.innerText = eval(display.innerText);
        } else if (display.innerText.includes("√")) {
          let arr = display.innerText.split("√");
          display.innerText = Math.sqrt(arr[1], 2);
        } else display.innerText = eval(display.innerText);
      }
    } else if (key == "sin") {
      display.innerText = Math.sin(display.innerText);
    } else if (key == "cos") {
      display.innerText = Math.cos(display.innerText);
    } else if (key == "tan") {
      display.innerText = Math.tan(display.innerText);
    } else if (key == "x^2") {
      display.innerText += "^2";
    } else if (key == "x^") {
      display.innerText += "^";
    } else if (key == "√") {
      display.innerText += "√";
    } else if (key == "e") {
      display.innerText += 2.71828182846;
    } else if (key == "π") {
      display.innerText += 3.14159265359;
    } else if (key == "x!") {
      display.innerText = factorial(display.innerText);
    } else if (key == "rad") {
      display.innerText = radians(display.innerText);
    } else if (key == "log") {
      display.innerText += Math.log(display.innerText);
    } else if (key == "ln2") {
      display.innerText += display.innerText * 0.693;
    } else if (key == "ln10") {
      display.innerText += display.innerText * 2.303;
    } else if (key == "±") {
      display.innerText = -display.innerText;
    } else {
      display.innerText += key;
    }
  });
});
