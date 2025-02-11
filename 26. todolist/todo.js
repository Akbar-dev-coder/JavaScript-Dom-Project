let todolist = [];
displayItems();

function Addtodo() {
  let inputElement = document.querySelector("#todo-input");
  let todoItems = inputElement.value;
  todolist.push(todoItems);
  inputElement.value = "";

  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector("#list-Items");
  displayElement.innerText = "";

  for (let i = 0; i < todolist.length; i++) {
    displayElement.innerText = displayElement.innerText + "\n" + todolist[i];
  }
}
