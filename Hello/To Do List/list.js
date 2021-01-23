//Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
  //Prevent form from submitting
  event.preventDefault();
  //Creates the ToDo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Creates ToDo List from whatever is added within the input field 
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //Add ToDo to local storage
  saveLocalTodos(todoInput.value)
  //Creates mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
    //Creates trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append todo list
    todoList.appendChild(todoDiv)
    //Clear ToDo input value
    todoInput.value = "";
}

//Animate function for delete
function deleteCheck(e){
  const item = e.target;
  //animates the delete button
  if(item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    //animation to whatever is deleted
    todo.classList.add('fall');
    removeLocalTodos(todo);
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }

  //animates the check mark button
  if(item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

//Animate function for selection
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value) {
      //uncatagorized
      case "all":
        break;
      //only displays whatever is completed
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display= 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      //only displays whatever is uncompleted
      case "uncompleted":
        if(!todo.classList.contains('completed')){
          todo.style.display= 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

//Function that creates the array of the ToDo List
function saveLocalTodos(todo){
  //Check to see if items are stored in local storage
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(event){
  let todos;
  //Check to see if items are stored in local storage
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    //Creates the ToDo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Creates ToDo List from whatever is added within the input field 
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
 //Creates mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
    //Creates trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append todo list
    todoList.appendChild(todoDiv)
  })
}

//Function that permenantly deletes items off the array ToDo List
function removeLocalTodos(todo){
  let todos;
  //Check to see if items are stored in local storage
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}
