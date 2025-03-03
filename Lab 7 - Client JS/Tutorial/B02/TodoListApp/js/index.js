// first step to check if this file linked

// get the references to the elements you want to manipulate    

const form = document.querySelector('#form');
const todoListContainer = document.querySelector('#todolist-container');
const clearTodos = document.querySelector('#clear-todos');

// add event listener to the form
form.addEventListener('submit', handleSubmit);
clearTodos.addEventListener('click', handleClearTodos);

// create a function to handle the submit event
let todos = [];

function handleSubmit(e) {
    e.preventDefault();
    // const data = new FormData(form);
    const data = new FormData(e.target);
    console.log(data);

    const todo = Object.fromEntries(data);
    todos.push(todo);

    renderTodos();
    form.reset();
}

function renderTodos() {
    todoListContainer.innerHTML = todos.map(todo => covertToCard(todo)).join('');
}

function covertToCard(todo) {
    return ` <div class="form-group todo" id="">
                    <p class="todo-title" id="">${todo.title}</p>
                    <input class="completed icon" type="checkbox"
                    onclick="" ${todo.completed ? 'checked' : ''}>
                    <i class="fa fa-trash icon" onclick=""></i>
                    </div>
            `;
}

function handleClearTodos() {
    todos = [];
    renderTodos();
}
