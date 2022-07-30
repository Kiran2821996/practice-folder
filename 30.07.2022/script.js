//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for validation>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  var y = document.forms["myForm"]["emailId"].value;
  var z = document.forms["myForm"]["phone"].value;
  if (x == "" || y == "" || z == "") {
    document.querySelector(".alert1").innerText = "Empty Input Field(s)";
    document.querySelector(".alert1").style.color = "red";
    document.querySelector(".alert1").style.fontSize = "20px";
    document.querySelector(".alert1").style.textAlign = "center";
    document.querySelector(".alert1").style.height = "20px";
    document.querySelector(".alert1").style.fontWeight = "bold";

    setTimeout(() => (document.querySelector(".alert1").innerText = " "), 2000);
  }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<foradding rows>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");
function onAddDetails(event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const emailId = document.querySelector("#emailId").value;
  const phoneNumber = document.querySelector("#phone").value;
  if (name != "" || emailId != "" || phoneNumber != "") {
    tbody.innerHTML += `<tr>
   <td>${name}</td>
   <td>${emailId}</td>
   <td>${phoneNumber}</td>
   <td> <input type="submit" class="deleteBtn" id="button1" value="Remove"></td>
   
</tr> 
`;
    document.querySelector("#name").value = "";
    document.querySelector("#emailId").value = "";
    document.querySelector("#phone").value = "";
  }
}

form.addEventListener("submit", onAddDetails);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for deleting the rows>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const table = document.querySelector("table");
function deleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
  document.querySelector(".alert2").innerText = "Item deleted successfully";
  document.querySelector(".alert2").style.color = "red";
  document.querySelector(".alert2").style.fontSize = "20px";
  document.querySelector(".alert2").style.textAlign = "center";
  document.querySelector(".alert2").style.height = "20px";
  document.querySelector(".alert2").style.fontWeight = "bold";

  setTimeout(() => (document.querySelector(".alert2").innerText = ""), 2000);
}
table.addEventListener("click", deleteRow);
