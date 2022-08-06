let form = document.querySelector("#form");
let input = document.querySelector("#input-text");
let submit = document.querySelector("#submit-btn");
let tasks = document.querySelector("#tasks");
let check = document.querySelector(".check");
let tasks1 = document.querySelector("#tasks1");
// function docheck(checkboxElem) {
//     if (checkboxElem.checked) {
//   tasks1.append(tasks)
//     }
//   }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let task = input.value;
  if (task.length > 0) {
    let task_element = document.createElement("div");
    task_element.classList.add("task-element");
    task_element.setAttribute("id", "ele-1");
    /////////////////////////////////////////////////////

    let task_input_element1 = document.createElement("button");
    task_input_element1.classList.add("check");
    // task_input_element1.innerText = "check";

    // task_input_element1.type = "checkbox";
    // task_input_element1.value = "checkbox";
    // task_input_element1.setAttribute("onclick","if(this.div.checkbox.checked){alert('hai')}")

    task_element.append(task_input_element1);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    task_input_element1.append(checkbox);

    /////////////////////////////////////////////////////////
    let label = document.createElement("label");
    label.htmlFor = "checkbox";
    let task_input_element2 = document.createElement("input");
    task_input_element2.classList.add("text");
    task_input_element2.type = "text";
    task_input_element2.value = task;
    task_input_element2.setAttribute("readonly", "readonly");
    label.append(task_input_element2);

    ////////////////////////////////////////////////////////
    let edit_button = document.createElement("button");
    edit_button.classList.add("edit");
    edit_button.innerText = "\u{1F58A}";
    // edit_button.innerHTML = "<i class='fa-solid fa-pen'></i>";
    label.append(edit_button);
    ////////////////////////////////////////////////
    let delete_button = document.createElement("button");
    delete_button.classList.add("delete");
    delete_button.innerText = "\u{1F5D1}";
    label.append(delete_button);
    ///////////////////////////////////////////////////
    task_element.append(label);
    tasks.append(task_element);

    ////////////////FUNCTION
    input.value = "";

    edit_button.addEventListener("click", (e) => {
      if (edit_button.innerText == "\u{1F58A}") {
        edit_button.innerText = "\u{1F5AB}";
        task_input_element2.style.border = "2px solid black";
        task_input_element2.style.backgroundColor = "white";
        task_input_element2.removeAttribute("readonly");
      } else {
        edit_button.innerText = "\u{1F58A}";
        task_input_element2.style.border = "2px solid rgb(239,239,239)";
        task_input_element2.style.backgroundColor = "rgb(239,239,239)";
        // edit_button.innerHTML = "<i class='fa-solid fa-pen'></i>"
        task_input_element2.setAttribute("readonly", "readonly");
      }
    });

    delete_button.addEventListener("click", (e) => {
      tasks.removeChild(task_element);
      // tasks1.removeChild(task_element)
    });
    task_input_element1.addEventListener("click", (e) => {
      // tasks.removeChild(task_element);
      tasks1.append(task_element);
      delete_button.addEventListener("click", (e) => {
        tasks1.removeChild(task_element);
        // tasks1.removeChild(task_element)
      });
    });
    //   function removeAdd(e) {

    //       if (e.target.checked == true) {
    //         document.querySelector(".tasks1").append(document.querySelector(".task-element"));
    //       }

    //     }

    //     document.querySelector(".check").addEventListener("click", removeAdd);
  }
});
