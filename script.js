// Javascript needed to input todo item
// javascript needed to submit item

// html needed to show list of submitted items

// javascript needed to check off todo items and mark them as completed using strikethrough font

// javascript needed to delete existing tofo item (for those that have been marked as completed)

let addTodoButton = document.querySelector(".submitButton");
addTodoButton.addEventListener("click", showTodo);
let deleteAll = document.querySelector("button");
deleteAll.addEventListener("click", vanishItem);



function showTodo(event) {
  const inputElement = document.getElementById("taskBox");
  const text = inputElement.value;
  const fullEntry = createTodo(text);  
  const toDoListedItems = document.getElementById("toDoItems");
  const todo = fullEntry;
  toDoListedItems.append(todo);
  inputElement.value = "";

}

function createTodo(text) {
//   const deleteButton = document.getElementById("dltButton");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  const listedItemToDo = document.createElement("li");  
  listedItemToDo.append(text);
  listedItemToDo.append(deleteButton);
  return listedItemToDo ;
}

// function vanishItem () {
// console.log("vanished");
// }
