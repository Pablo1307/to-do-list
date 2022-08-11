//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//functions

function addTodo(event) {
    //prevent from refreshing the page
    event.preventDefault();
    
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //checkmark
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     //delete
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
     deleteButton.classList.add("delete-btn");
     todoDiv.appendChild(deleteButton);

     //append to list
     todoList.appendChild(todoDiv);

     //clear todo input value
     todoInput.value = " ";
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
           todo.remove(); 
        })
    }

    //checkmark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                   todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
        }
    });
}
