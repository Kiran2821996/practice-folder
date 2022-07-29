const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const btn = document.querySelector(".btn");

function printGrandParent(event) {
  console.log("grand parent bubbling", event.target);
}

function printOnHover() {
  console.log("hovering");
}

grandParent.addEventListener("click", printGrandParent);

function removeGrandParent() {
  setTimeout(() => {
    console.log("removing grandparent");
    grandParent.removeEventListener("click", printGrandParent);
  }, 2000);
}

btn.addEventListener("click", removeGrandParent);

parent.addEventListener("click", () => {
  console.log("parent bubbling");
});

child.addEventListener("click", () => {
  console.log("child bubbling");
});