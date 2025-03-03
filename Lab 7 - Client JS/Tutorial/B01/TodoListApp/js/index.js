const form = document.querySelector('#form');
const todolistContainer
    = document.querySelector('#todolist-container');
const clearTodos = document.querySelector('#clear-todos');

const todos = [];
// Add event listener to form
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const todo = Object.fromEntries(data);
    todos.push(todo);
    todolistContainer.innerHTML = todos.map(todo => renderTodo(todo)).join('');

}

function renderTodo(todo) {
    console.log(todo);

    return ` <div class="form-group todo" id="">
                <p class="todo-title" id="">${todo.title}</p>
                <input class="completed icon" type="checkbox"
                onclick="" ${todo.completed ? 'checked' : ''}>
                <i class="fa fa-trash icon" onclick=""></i>
            </div>`;
}
