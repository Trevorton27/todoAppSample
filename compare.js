let addButton = document.querySelector('.submitButton');
addButton.addEventListener('click', showInputItemOnPage);

function showInputItemOnPage(event) {
  const inputElement = document.getElementById('taskBox');
  const text = inputElement.value;
  const fullEntry = createTodo(text);
  const toDoListedItems = document.getElementById('toDoItems');
  const todo = fullEntry;
  toDoListedItems.append(todo);
  inputElement.value = '';
}
function createTodo(text) {
  const completedButton = document.createElement('button');
  completedButton.textContent = 'o';
  completedButton.style.color = 'white';
  completedButton.style.backgroundColor = 'blank';
  completedButton.style.borderRadius = '40px';
  completedButton.value = 0;
  console.log(completedButton);
  completedButton.addEventListener('click', function (completeButton) {
    if (completedButton.value == 0) {
      completedButton.value = 1;
      listedItemToDo.style.textDecoration = 'line-through';
      deleteButton.disabled = false;
    } else {
      completedButton.value = 0;
      listedItemToDo.style.textDecoration = 'none';
      deleteButton.disabled = true;
    }
  });
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.style.color = 'white';
  deleteButton.style.backgroundColor = 'red';
  deleteButton.style.borderRadius = '40px';
  deleteButton.disabled = true;
  deleteButton.addEventListener('click', function () {
    listedItemToDo.remove();
  });
  const listedItemToDo = document.createElement('li');
  listedItemToDo.style.paddingInline = '20px';
  listedItemToDo.style.listStyle = 'none';
  listedItemToDo.append(completedButton);
  listedItemToDo.append(text);
  listedItemToDo.append(deleteButton);
  return listedItemToDo;
}
