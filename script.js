// Javascript needed to input todo item- done
// javascript needed to submit item- done

// html needed to show list of submitted items-done

// javascript needed to check off todo items and mark them as completed using strikethrough font- done

// javascript needed to delete existing tofo item (for those that have been marked as completed)

let addTodoButton = document.querySelector(".submitButton");
addTodoButton.addEventListener("click", showTodo);

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
  const completedButton = document.createElement("button");
  completedButton.textContent = "o";
  completedButton.addEventListener("click", function () {
    listedItemToDo.innerHTML =
      "<strike>" + listedItemToDo.innerHTML + "</strike>";
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.style.color = "white";
  deleteButton.style.backgroundColor = "red";
  deleteButton.addEventListener("click", function () {
    console.log("Delete was clicked");
    listedItemToDo.remove();
  });
  const listedItemToDo = document.createElement("li");
  listedItemToDo.style.listStyle = "none";
  listedItemToDo.append(completedButton);
  listedItemToDo.append(text);
  listedItemToDo.append(deleteButton);
  return listedItemToDo;
}
