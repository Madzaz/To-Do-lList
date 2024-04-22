const listItems = document.getElementById("myUL");

function newElement() {
  const textBox = document.getElementById("myInput");

  if (textBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = textBox.value;
    listItems.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  textBox.value = "";
  saveData();
}

listItems.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}

function callData() {
  listItems.innerHTML = localStorage.getItem("data");
}

callData();
